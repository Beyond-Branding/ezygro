import React from 'react';
import Header from './components/Header';
import VideoCarousel from './components/VideoCarousel';
// import IndustriesSection from './components/IndustriesSection';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <VideoCarousel />
      {/* <IndustriesSection /> */}
    </div>
  );
}

export default App;