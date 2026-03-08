import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import { existsSync } from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;
  console.log(`SYSTEM: Starting server in ${process.env.NODE_ENV || 'development'} mode`);

  // API routes can go here
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", system: "Ali Omar Command Center" });
  });

  // Request logger for debugging
  app.use((req, res, next) => {
    if (!req.url.startsWith('/@') && !req.url.includes('node_modules')) {
      console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
    }
    next();
  });

  // Serve public directory explicitly
  app.use(express.static(path.join(__dirname, "public")));

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { 
        middlewareMode: true,
        hmr: process.env.DISABLE_HMR !== 'true'
      },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Serve static files in production
    const distPath = path.join(__dirname, "dist");
    if (existsSync(distPath)) {
      app.use(express.static(distPath));
      app.get("*", (req, res) => {
        res.sendFile(path.join(distPath, "index.html"));
      });
    } else {
      console.warn("WARNING: Production mode active but 'dist' directory not found. Falling back to dev-like behavior or error.");
      // In a real app, you'd probably want to error out or serve a friendly message
      app.get("*", (req, res) => {
        res.status(500).send("Production build missing. Please run 'npm run build'.");
      });
    }
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error("Error starting server:", err);
});
