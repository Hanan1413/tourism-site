import React from "react";
import Hero from "../../components/hero/Hero";
import Places from "../../components/places/Places";
import Adventure from "../../components/adventure/Adventure";
import Slider from "../../components/slider/Slider";

function HomePage() {
  return (
    <div>
      {/* Virtual Reality Tours: Incorporate virtual reality (VR) technology to offer immersive tours of popular destinations. 
        Users can explore landmarks, museums, and natural wonders from the comfort of their homes. 
        
        https://blog.logrocket.com/building-a-vr-app-with-react-360/*/}
      <Hero />
      <Places isHome={true} />
      <Adventure />
      <Slider />
      


    </div>
  );
}

export default HomePage;
