import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className='App'>
      <div className='text-4xl font-semibold my-10'>
        <div className='pb-2'>Albert Randi</div>
        <div className='pb-2'>Web Dev</div>
        <div className='pb-2'>Based in Indonesia</div>
      </div>
      <div className='py-10 px-4'>
        <div className='pb-8'>
          <div className='text-gray-500 font-bold'>Biography</div>
          <div className='text-xl my-5 font-semibold'>
            Just a ordinary coder, deep thinker and a strategic game player
          </div>
        </div>
        <div className='pb-8'>
          <div className='text-gray-500 font-bold'>Contact</div>
          <div className='text-xl my-5 font-semibold'>
            <div className='pb-1'>Medan, Indonesia</div>
            <div className='pb-1'>
              <a
                className='hover:font-extrabold'
                href='mailto:albertrandi72@gmail.com'>
                albertrandi72@gmail.com
              </a>
            </div>
            <div className='pb-1'>
              <a href='tel:+628116311788' className='hover:font-extrabold'>
                +62 811 6311 788
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;