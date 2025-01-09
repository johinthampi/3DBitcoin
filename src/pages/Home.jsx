import React from 'react';
import ModelView from '../component/ModelView';

function Home() {
  return (
    <>
      <div className="relative bg-black h-screen flex items-center justify-center">
        {/* Text content */}
        <div className="absolute z-10 flex text-white">
          <h1 className="text-9xl font-custom">GLOBAL</h1>
          <div className="ms-5 mt-6">
            <h2 className="text-2xl">markets at</h2>
            <h1 className="text-5xl font-semibold">your sight .</h1>
            </div>
          
        </div>

        {/* ModelView (3D model) */}
        <div className="fixed top-0 left-0 w-full h-full z-0">
          <ModelView />
        </div>
      </div>
    </>
  );
}

export default Home;