import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  // API routes can go here
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", system: "Ali Omar Command Center" });
  });

  // Request logger for debugging
  app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
    next();
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { 
        middlewareMode: true,
        hmr: process.env.DISABLE_HMR !== 'true',
        watch: {
          usePolling: true,
          interval: 100
        }
      },
      appType: "spa",
    });
    app.use(vite.middlewares);
    
    // Explicitly serve index.html for all paths in dev if Vite middleware doesn't catch it
    app.get('*', async (req, res, next) => {
      // Skip API routes
      if (req.url.startsWith('/api/')) {
        return next();
      }
      
      try {
        const html = await vite.transformIndexHtml(req.url, await (await import('fs/promises')).readFile(path.join(__dirname, 'index.html'), 'utf-8'));
        res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
      } catch (e) {
        vite.ssrFixStacktrace(e as Error);
        next(e);
      }
    });
  } else {
    // Serve static files in production
    app.use(express.static(path.join(__dirname, "dist")));
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "dist", "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error("Error starting server:", err);
});
