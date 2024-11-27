import React, { useState, useEffect, useRef } from 'react';

const Counter = ({ targetValue, imgSrc, title }) => {
  const [count, setCount] = useState(0);
  const animationRef = useRef(null); // useRef for animation reference

  useEffect(() => {
    const options = { root: null, threshold: 0.5 }; // Observe entire page

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        const animate = () => {
          const startTime = performance.now();
          const duration = 5000;

          const updateCount = () => {
            const elapsed = performance.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const newCount = Math.floor(progress * targetValue);

            setCount(newCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));

            if (elapsed < duration) {
              requestAnimationFrame(updateCount);
            }
          };

          updateCount();
        };

        animate();
        observer.unobserve(animationRef.current); // Unobserve after animation
      }
    }, options);

    if (animationRef.current) {
      observer.observe(animationRef.current);
    }

    return () => {
      if (animationRef.current) {
        observer.unobserve(animationRef.current);
      }
    };
  }, [targetValue]); // Re-run useEffect if targetValue changes

  return (
    <div ref={animationRef} className="counter-wrapper md:flex-1 w-full md:h-64 h-52 text-white flex items-center justify-center flex-col relative">
      <img src={imgSrc} className="absolute top-0 left-0 w-full h-full object-cover" alt="" />
      <h3 className="z-10 font-bold text-4xl lg:text-5xl counter-target">{title == 'Grocery Gift' ? '$' : ''}{count}+</h3>
      <p className="z-10 lg:text-xl">{title}</p>
    </div>
  );
};

export default Counter;
