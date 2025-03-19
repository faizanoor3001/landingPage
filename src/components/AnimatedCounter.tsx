import { useSpring, animated } from '@react-spring/web';

interface AnimatedCounterProps {
  value: number;
  unit: string;
  prefix?: string;
}

export const AnimatedCounter = ({ value, unit, prefix }: AnimatedCounterProps) => {
  const spring = useSpring({
    from: { val: 0 },
    to: { val: value },
    config: { duration: 2000 },
  });

  return (
    <div className="text-4xl font-bold text-[#3CB371]">
      {prefix && <span className="text-white/70">{prefix} </span>}
      <animated.span>
        {spring.val.to((val: number) => Math.round(val))}
      </animated.span>
      <span className="text-white/70">{unit}</span>
    </div>
  );
}; 