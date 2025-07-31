import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Marquee({ 
  items = ['EXCITING PRIZE POOL', 'INTERNATIONAL SPEAKERS', 'HACKBATTLE', 'CICADA'],
  rotate = 0, 
  bottom = '0%', 
  left = '0%', 
  width = '40vw',
  speed = 100, // pixels per second
  reverse = false // new prop to control direction
}) {
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;
    if (!container || !content) return;

    const updateAnimation = () => {
      // Kill previous animation
      if (animationRef.current) {
        animationRef.current.kill();
      }

      // Wait for content to render and get dimensions
      setTimeout(() => {
        const totalWidth = content.scrollWidth;
        const singleSetWidth = totalWidth / 3; // width of one set (since we have 3 sets)
        const duration = singleSetWidth / speed;

        // Reset position based on direction
        if (reverse) {
          gsap.set(content, { x: -singleSetWidth });
        } else {
          gsap.set(content, { x: 0 });
        }

        // Create seamless infinite loop with direction control
        if (reverse) {
          // Reverse direction: move from left to right
          animationRef.current = gsap.timeline({ repeat: -1 })
            .to(content, { 
              x: 0, 
              duration: duration, 
              ease: 'none' 
            })
            .set(content, { x: -singleSetWidth });
        } else {
          // Normal direction: move from right to left
          animationRef.current = gsap.timeline({ repeat: -1 })
            .to(content, { 
              x: -singleSetWidth, 
              duration: duration, 
              ease: 'none' 
            })
            .set(content, { x: 0 });
        }
      }, 50);
    };

    updateAnimation();
    window.addEventListener('resize', updateAnimation);

    return () => {
      window.removeEventListener('resize', updateAnimation);
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, [items, speed, reverse]);

  return (
    <div
      ref={containerRef}
      className="bg-violet-900 absolute flex items-center justify-center overflow-hidden"
      style={{
        bottom,
        left,
        width,
        height: '2rem',
        transform: `rotate(${rotate}deg)`,
        background:
          'linear-gradient(90deg, #9F9DFF 0%, #682FED 34%, #9F9DFF 71%, #9070F8 100%)',
      }}
    >
      <div 
        ref={contentRef}
        className="inline-flex whitespace-nowrap text-white uppercase"
      >
        {/* Render 3x the items for seamless infinite loop */}
        {items.concat(items, items).map((item, idx) => (
          <span key={idx} className="px-4 text-xl font-[rugen] flex-shrink-0">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}