'use client';

import { useState } from 'react';
import styles from './styles.module.css';

export default function Page() {
  const [speed, setSpeed] = useState('1.8s');
  const [animationKey, setAnimationKey] = useState(0);

  const handleSpeed = (e: any) => {
    setSpeed(e.target.id);
    setAnimationKey((prev: number) => prev + 1);
  };

  return (
    <div className="flex flex-col justify-center gap-8 m-auto my-20 px-20">
      <h1 className="font-title">Text Simple Effects</h1>
      <div className="flex flex-col gap-1">
        <h2 className="font-body text-sm">Fade In - text up</h2>
        <div className="flex gap-2 items-center">
          <span className="font-body text-sm">Speed</span>
          <button
            id="0.5s"
            onClick={(e) => handleSpeed(e)}
            className="bg-black text-white rounded-md px-2 py-1 text-xs"
          >
            0.5s
          </button>
          <button
            id="1s"
            onClick={(e) => handleSpeed(e)}
            className="bg-black text-white rounded-md px-2 py-1 text-xs"
          >
            1s
          </button>
          <button
            id="1.5s"
            onClick={(e) => handleSpeed(e)}
            className="bg-black text-white rounded-md px-2 py-1 text-xs"
          >
            1.8s
          </button>
        </div>
        <div className="bg-black">
          <h1
            key={animationKey}
            style={{ animationDuration: speed }}
            className={`${styles.fadeUp} font-title text-[80px] text-center text-white`}
          >
            Hello
          </h1>
        </div>
      </div>
      <div>
        <h2 className="font-body">Down</h2>
        <div className="bg-black">
          <h1
            className={`${styles.fadeDown} font-title text-[80px] text-center text-white`}
          >
            Hello
          </h1>
        </div>
      </div>
      <div>
        <h2 className="font-body">ZoonIn</h2>
        <div className="bg-black">
          <h1
            className={`${styles.zoomIn} font-title text-[80px] text-center text-white`}
          >
            Hello
          </h1>
        </div>
      </div>
      <div>
        <h2 className="font-body">ZoonOut</h2>
        <div className="bg-black">
          <h1
            className={`${styles.zoomOut} font-title text-[80px] text-center text-white`}
          >
            Hello
          </h1>
        </div>
      </div>
    </div>
  );
}
