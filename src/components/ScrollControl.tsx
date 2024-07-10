import React, { useEffect, useState } from 'react';

export default function ScrollControl({ children, page, setPage }: any) {
  const lastPage = React.Children.count(children) - 1;
  const [isThrottling, setIsThrottling] = useState(false);
  const [startY, setStartY] = useState(0);

  useEffect(() => {
    const handleWheel = (e: any) => {
      e.preventDefault();
      scrollLogic(e.deltaY);
    };

    const handleTouchStart = (e: any) => {
      const touch = e.touches[0];
      setStartY(touch.clientY);
    };

    const handleTouchMove = (e: any) => {
      const touch = e.touches[0];
      const deltaY = touch.clientY - startY;
      if (Math.abs(deltaY) > 20) {
        scrollLogic(deltaY);
        setStartY(touch.clientY);
      }
    };

    const scrollLogic = (deltaY: any) => {
      if (!isThrottling) {
        setIsThrottling(true);

        let newPage = page + (deltaY > 0 ? 1 : -1);
        newPage = Math.max(0, Math.min(newPage, lastPage));

        setPage(newPage);

        setTimeout(() => {
          setIsThrottling(false);
        }, 1000);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [page, lastPage, isThrottling, startY, setPage]);

  const style = {
    position: 'relative',
    width: '100%',
    height: `calc(var(--vh, 1vh) * ${React.Children.count(children) * 100})`,
    top: `calc(${page * -100} * var(--vh))`,
    transition: 'top 0.5s ease-in-out',
  };

  return (
    <div style={{ height: 'calc(var(--vh, 1vh) * 100)' }}>
      {/* @ts-ignore  */}
      <div style={style}>{children}</div>
    </div>
  );
}
