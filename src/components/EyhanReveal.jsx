import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

export default function EyhanReveal({
  children,
  delay = 0,
  duration = 900,
  className = '',
  direction = 'up',
  threshold = 0.08,
}) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (domRef.current) {
              observer.unobserve(domRef.current);
            }
          }
        });
      },
      {
        threshold,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    const current = domRef.current;
    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, [threshold]);

  const getInitialClass = () => {
    switch (direction) {
      case 'left':
        return '-translate-x-12 opacity-0';
      case 'right':
        return 'translate-x-12 opacity-0';
      case 'scale':
        return 'scale-95 opacity-0';
      case 'fade':
        return 'opacity-0';
      case 'up':
      default:
        return 'translate-y-12 opacity-0';
    }
  };

  const transformStyle = isVisible
    ? 'translate-x-0 translate-y-0 scale-100 opacity-100'
    : getInitialClass();

  return (
    <div
      ref={domRef}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`,
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
      }}
      className={`transition-all will-change-transform ${transformStyle} ${className}`}
    >
      {children}
    </div>
  );
}

EyhanReveal.propTypes = {
  children: PropTypes.node.isRequired,
  delay: PropTypes.number,
  duration: PropTypes.number,
  className: PropTypes.string,
  direction: PropTypes.oneOf(['up', 'left', 'right', 'scale', 'fade', 'none']),
  threshold: PropTypes.number,
};
