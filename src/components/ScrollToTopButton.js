import React from 'react';

const ScrollToTopButton = () => {
  const goToTopPage = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // for smooth scrolling
    });
  };

  return (
    <button
      onClick={goToTopPage}
      className='fixed bottom-[20px] right-[20px] px-5 py-3 bg-blue-600 hover:bg-blue-800 text-sm text-white border-none rounded cursor-pointer z-[100px]'
    >
      Move to Top
    </button>
  );
};

export default ScrollToTopButton;
