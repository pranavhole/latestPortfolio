// GlowingText.tsx
import React, { useEffect } from 'react';
import "./glow.scss";

interface GlowingTextProps {
  text: string;
}

const GlowingText: React.FC<GlowingTextProps> = ({ text }) => {
  useEffect(() => {
    const intervalId = setInterval(() => {
      animatedText();
    }, 1200);

    return () => clearInterval(intervalId);
  }, []);

  const animatedText = () => {
    const letters = document.querySelectorAll('.span') as NodeListOf<HTMLElement>;
    letters.forEach((letter, i) => {
      letter.style.transform = `scale(${Math.random() * 0.5 + 1})`;
      letter.style.top = `${Math.random() * 20}px`;
      document.documentElement.style.setProperty(`--blur-${i}`, `${Math.random() * 90 + 30}px`);
    });
  };

  const renderLetters = () => {
    return text.split('').map((letter, i) => (
      <span key={i} className="span">
        {letter}
      </span>
    ));
  };

  return (
    <section className="c-container flex justify-around h-[80vh] items-center">
      <h1 className="h1">{renderLetters()}</h1>
    </section>
  );
};

export default GlowingText;
