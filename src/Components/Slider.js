import React, { useState, useRef } from 'react';
import 'tailwindcss/tailwind.css';
import VideoPlayer from './VideoPlayer';
import SubmitButton from './SubmitButton';

const Slider = () => {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(100);
  const [value3, setValue3] = useState(50);
  const sliderRef = useRef(null);

  const handleScroll = () => {
    const maxScroll = sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
    const newValue1 = (sliderRef.current.scrollLeft / maxScroll) * 100;
    const newValue2 = newValue1 + 100 * (sliderRef.current.clientWidth / sliderRef.current.scrollWidth);
    const newValue3 = newValue1 + 100 * (sliderRef.current.clientWidth / sliderRef.current.scrollWidth)/2;

    setValue1(newValue1);
    setValue2(newValue2);
    setValue3(newValue3);
  };

  return (
    <>
    <VideoPlayer/>
    <div className="w-full max-w-screen-lg mx-auto mt-8">
    <div
      ref={sliderRef}
      className="slider relative overflow-x-scroll w-full h-12 bg-gray-300"
      onScroll={handleScroll}
      
    >
      <div className='flex items-center'
        style={{
          width: '200%',
          height: '100%',
        }}
      >
      </div>

    {/* Render slide points */}
    <div
        style={{
          position: 'absolute',
          top: '0',
          left: `${value1}%`,
          transform: 'translateX(-50%)',
          height: '100%',
          width: '6px',
          background: 'red',
        }}
      />

      <div
        style={{
          position: 'absolute',
          top: '0',
          left: `${value2}%`,
          transform: 'translateX(-50%)',
          height: '100%',
          width: '4px',
          background: 'blue',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '0',
          left: `${value3}%`,
          transform: 'translateX(-50%)',
          height: '100%',
          width: '2px',
        //   background: 'black',
        }}
      >Text</div>

    
    </div>
    </div>
    <SubmitButton/>
    </>
  );
};

export default Slider;

