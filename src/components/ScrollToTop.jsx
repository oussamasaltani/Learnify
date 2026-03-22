import React, { useState, useEffect, useCallback } from 'react'; // زدنا useCallback
import { ArrowUp } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const calculateScrollProgress = useCallback(() => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight - windowHeight;
    const scrollTop = window.pageYOffset;

    if (documentHeight > 0) {
      const progress = (scrollTop / documentHeight) * 100;
      setScrollProgress(progress);
    }
  }, []);

  const toggleVisibility = useCallback(() => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
    calculateScrollProgress();
  }, [calculateScrollProgress]);

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    window.addEventListener('resize', calculateScrollProgress);

    calculateScrollProgress();

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
      window.removeEventListener('resize', calculateScrollProgress);
    };
  }, [toggleVisibility, calculateScrollProgress]);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button
          className="scroll-to-top with-progress"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          title="Scroll to top"
          style={{
            background: `conic-gradient(var(--red) ${scrollProgress}%, var(--dark-blue) ${scrollProgress}% 100%)`
          }}
        >
          <div className="inner-circle">
            <ArrowUp size={24} />
          </div>
        </button>
      )}
    </>
  );
};

export default ScrollToTop;