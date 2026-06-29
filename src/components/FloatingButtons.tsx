import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './FloatingButtons.scss';

export default function FloatingButtons() {
  const [isVisible, setIsVisible] = useState(false);

  // Scroll to top visibility toggle
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="floating-buttons">
      <button 
        onClick={scrollToTop} 
        className={`btn-float btn-scroll-top ${isVisible ? 'visible' : ''}`}
        aria-label="최상단으로 이동"
      >
        <img src="/Button.btn-scroll-top.svg" alt="TOP" />
      </button>

      <Link to="/support/inquiry" className="btn-float btn-inquiry">
        <img src="/Button.btn-inquiry.svg" alt="1:1 문의하기" />
      </Link>
    </div>
  );
}
