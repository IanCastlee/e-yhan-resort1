import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

export default function EyhanReveal({
  children,
  delay = 0,
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
        rootMargin: '0px 0px -50px 0px',
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

  const transformStyle = isVisible
    ? 'translate-y-0 opacity-100'
    : direction === 'up'
    ? 'translate-y-10 opacity-0'
    : 'opacity-0';

  return (
    <div
      ref={domRef}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: '800ms',
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
  className: PropTypes.string,
  direction: PropTypes.oneOf(['up', 'none']),
  threshold: PropTypes.number,
};
