'use client';

import ScrollControl from '@/components/ScrollControl';
import { useEffect, useState } from 'react';

export default function Page() {
  const [page, setPage] = useState(0);

  useEffect(() => {
    function setInnerHeight() {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    }

    setInnerHeight();
    window.addEventListener('resize', setInnerHeight);
    return () => {
      window.removeEventListener('resize', setInnerHeight);
    };
  }, []);

  const height = {
    height: 'calc(var(--vh, 1vh) * 100)',
  };

  return (
    <div style={height} className=" overflow-hidden">
      <ScrollControl page={page} setPage={setPage}>
        <div style={height} className="text-2xl bg-red-50">
          A
        </div>
        <div style={height} className="text-2xl bg-slate-300">
          B
        </div>
        <div style={height} className="text-2xl bg-green-300">
          C
        </div>
      </ScrollControl>
    </div>
  );
}
