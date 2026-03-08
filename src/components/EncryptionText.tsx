import { useState, useEffect } from 'react';

interface EncryptionTextProps {
  text: string;
  className?: string;
  delay?: number;
}

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';

export const EncryptionText = ({ text, className = '', delay = 0 }: EncryptionTextProps) => {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    let iteration = 0;
    
    const startAnimation = () => {
      const interval = setInterval(() => {
        setDisplayText(prev => 
          text.split('').map((char, index) => {
            if (index < iteration) return text[index];
            return characters[Math.floor(Math.random() * characters.length)];
          }).join('')
        );

        if (iteration >= text.length) {
          clearInterval(interval);
          setIsComplete(true);
        }

        iteration += 1 / 3;
      }, 30);
    };

    timeoutId = setTimeout(startAnimation, delay);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [text, delay]);

  return (
    <span className={`${className} ${isComplete ? 'text-cyber-lime' : 'text-cyber-blue'}`}>
      {displayText}
    </span>
  );
};
