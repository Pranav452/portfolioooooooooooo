import { useEffect, useState } from 'react';

export const useKonamiCode = (callback: () => void) => {
  const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

  useEffect(() => {
    let keys: string[] = [];
    
    const handleKeyDown = (e: KeyboardEvent) => {
      keys = [...keys, e.key].slice(-10);
      
      if (JSON.stringify(keys) === JSON.stringify(konamiCode)) {
        callback();
        keys = [];
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [callback, konamiCode]);
};

export const useSecretClickCombo = (elementId: string, clicks: number, callback: () => void) => {
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    const element = document.getElementById(elementId);
    if (!element) return;

    const handleClick = () => {
      setClickCount((prev) => {
        const newCount = prev + 1;
        if (newCount === clicks) {
          callback();
          return 0;
        }
        return newCount;
      });
    };

    element.addEventListener('click', handleClick);
    return () => element.removeEventListener('click', handleClick);
  }, [elementId, clicks, callback]);

  useEffect(() => {
    const timer = setTimeout(() => setClickCount(0), 2000);
    return () => clearTimeout(timer);
  }, [clickCount]);
};

export const funnyMessages = [
  "I code so much, my dreams have syntax errors 🐛",
  "AI Engineer by day, debugging hero by night 🦸",
  "99 bugs in the code, 99 bugs... take one down, patch it around, 127 bugs in the code 🎵",
  "I speak fluent Python, JavaScript, and sarcasm 🐍",
  "My code works perfectly... in production (most of the time) 😅",
  "I don't always test my code, but when I do, I do it in production 🚀",
  "Coffee.exe has stopped working. Please insert more coffee to continue ☕",
  "I turn coffee into code and bugs into features ✨",
  "Roses are red, violets are blue, unexpected indent on line 42 🌹",
  "I'm not procrastinating, I'm doing async programming 🔄"
];

export const getRandomFunnyMessage = () => {
  return funnyMessages[Math.floor(Math.random() * funnyMessages.length)];
};

export const secretAchievements = [
  { name: "Konami Commander", message: "You found the secret code! 🎮" },
  { name: "Curious Cat", message: "Curiosity led you here! 🐱" },
  { name: "Speed Demon", message: "You're clicking fast! 👆" },
  { name: "Easter Hunter", message: "You found a secret! 🥚" }
];

