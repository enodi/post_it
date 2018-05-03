import React from "react";
import aboutImage from "../../assets/images/image.png";
import aboutImage2 from "../../assets/images/about-image2.jpeg";

const AboutSection = () => (
  <div className="about-section">
    <div className="description">
      <h2>About Us</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Vivamus sed nibh odio. Sed libero enim, lacinia ac purus sed,
      gravida tempor lorem. Phasellus nec nibh gravida, iaculis 
      neque ut, ornare quam. Nunc commodo tortor tellus, eu imperdiet 
      ligula vehicula vehicula. Sed at aliquam ante. Maecenas feugiat 
      mollis est, vel mollis turpis porttitor eget. Aenean mattis, mi 
      et sodales vehicula, felis leo finibus nunc, ac ullamcorper mauris 
      elit id nulla.<br/><br/>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Vivamus sed nibh odio. Sed libero enim, lacinia ac purus sed,
      gravida tempor lorem. Phasellus nec nibh gravida, iaculis 
      neque ut, ornare quam. Nunc commodo tortor tellus, eu imperdiet 
      ligula vehicula vehicula. Sed at aliquam ante. Maecenas feugiat 
      mollis est, vel mollis turpis porttitor eget. Aenean mattis, mi 
      et sodales vehicula, felis leo finibus nunc, ac ullamcorper mauris 
      elit id nulla.</p>
    </div>
    <div className="gallery">
      <div className="first-container">
        <img src={aboutImage} />
      </div>
      <div className="second-container">
        
      </div>
      <div className="third-container">
        <img src={aboutImage2} />
      </div>
    </div>
  </div>
)

export default AboutSection;
