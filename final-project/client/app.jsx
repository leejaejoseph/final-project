import React from 'react';
import Home from './pages/home';
import Navbar from './components/Navbar';
import Background from './components/Background';
import LeftText from './components/LeftText';
import SignIn from './components/SignIn';

export default function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <Background/>
      <Navbar />
      <div className='bg-black'>
        <LeftText />
        <SignIn />
      </div>
    </>
  );
}
