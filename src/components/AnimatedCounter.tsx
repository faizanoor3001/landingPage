import { useSpring, animated } from '@react-spring/web';
import { useEffect, useRef, useState } from 'react';

interface AnimatedCounterProps {
  value: number;
  unit: string;
  prefix?: string;
}

export const AnimatedCounter = ({ value, unit, prefix }: AnimatedCounterProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const spring = useSpring({
    from: { val: 0 },
    to: { val: isVisible ? value : 0 },
    config: { duration: 2000 },
  });

  return (
    <div ref={counterRef} className="text-4xl font-bold text-[#3CB371]">
      {prefix && <span className="text-white/70">{prefix} </span>}
      <animated.span>
        {spring.val.to((val: number) => Math.round(val))}
      </animated.span>
      <span className="text-white/70">{unit}</span>
    </div>
  );
}; 