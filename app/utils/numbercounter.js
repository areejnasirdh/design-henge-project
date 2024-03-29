import Image from "next/image";
import { useState, useRef, useEffect } from "react";

function NumberCounter({
  startNumber,
  endNumber,
  duration,
  img,
  information,
  symbol,
}) {
  const [currentNumber, setCurrentNumber] = useState(0);
  const animationRef = useRef();
  const elementRef = useRef();

  useEffect(() => {
    const element = elementRef.current;
    const increment = (endNumber - startNumber) / (duration * 1000);
    let start = null;

    const animate = (time) => {
      if (!start) {
        start = time;
      }
      const progress = (time - start) / (duration * 1000);
      const newNumber = startNumber + increment * progress;

      if (newNumber < endNumber) {
        setCurrentNumber(newNumber);
        animationRef.current = requestAnimationFrame(animate);
      } else {
        setCurrentNumber(endNumber);
      }
    };

    const handleScroll = () => {
      const top = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (top < windowHeight * 0.8) {
        animationRef.current = requestAnimationFrame(animate);
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [startNumber, endNumber, duration]);

  return (
    <div ref={elementRef}>
      <div className="text-white">
        <div className="flex space-x-1 items-center">
          <Image
            src={`/images/${img}.png`}
            width={500}
            height={500}
            alt=""
            className="w-5 md:w-7"
          />
          <h1 className="achievement-count font-bebas text-2xl md:text-5xl xl:text-6xl ">
            {Math.round(currentNumber)}
            {symbol}
          </h1>
        </div>
        <h4 className="text-[11px] lg:text-[18px] font-light">{information}</h4>
      </div>
    </div>
  );
}
export default NumberCounter;
