import React from 'react';
import reactDom from 'react-dom';
  
const About = () => {
    const myStyle ={
        fontFamily:'sans-serif',
        backgroundColor: 'white',
      };
    return (
      <div style={myStyle}>
        <h1 style={{color:'blue'}} >There's No Place Like Home.</h1>
        <p style={{color:'grey'}}>At Mr. Cooper, we believe in keeping the dream of homeownership alive. So whether you’re buying a home, selling a home, or settling in to the home you love, we’re here to make your homeownership journey less worrisome and more rewarding every step of the way.</p>
      </div>
  );
};
  
export default About;