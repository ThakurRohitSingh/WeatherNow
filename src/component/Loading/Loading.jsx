import React from 'react';

const Loading = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-row gap-2">
        <div className="w-7 h-7 rounded-full bg-blue-700 animate-bounce"></div>
        <div className="w-7 h-7 rounded-full bg-blue-700 animate-bounce [animation-delay:-0.3s]"></div>
        <div className="w-7 h-7 rounded-full bg-blue-700 animate-bounce [animation-delay:-0.5s]"></div>
      </div>
    </div>
  );
};

export default Loading;

