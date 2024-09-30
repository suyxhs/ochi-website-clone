// components/ScrollButton.tsx
import { useState, useEffect } from 'react';

const ScrollButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const scrollThreshold = 100; // Порог прокрутки для появи кнопки
  const hideThreshold = 5000; // Порог прокрутки для зникнення кнопки

  useEffect(() => {
    const toggleVisibility = () => {
      const scrollY = window.scrollY;

      if (scrollY > scrollThreshold && scrollY < hideThreshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div 
      className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 transition-all duration-300 
                  ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`} 
      style={{ zIndex: 1000 }}
    >
      <button className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-2xl text-sm px-5 py-2.5 text-center me-2 mb-2">  {/* bg-blue-500 text-white rounded-full px-4 py-2 shadow-lg */}
        Собери свой сет
      </button>
    </div>
  );
};

export default ScrollButton;
