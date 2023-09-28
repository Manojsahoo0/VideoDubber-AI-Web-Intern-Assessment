import React from 'react';

const SubmitButton = () => {
  return (
    <div className="w-full max-w-screen-md mx-auto mt-8 text-center md:text-right">
      <button className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Submit
      </button>
    </div>
  );
};

export default SubmitButton;

