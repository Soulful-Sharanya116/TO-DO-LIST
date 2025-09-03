import React from 'react';

const stickers = ['🎉', '🚀', '✨', '💻', '💡', '✅', '🦄', '🔥'];

function StickerBackground() {
  return (
    <div className="sticker-background">
      {stickers.map((sticker, index) => (
        <span
          key={index}
          className="sticker"
          style={{
            left: `${Math.random() * 90 + 5}%`, 
            top: `${Math.random() * 90 + 5}%`,  
            animationDelay: `${Math.random() * 5}s`, 
          }}
        >
          {sticker}
        </span>
      ))}
    </div>
  );
}

export default StickerBackground;
