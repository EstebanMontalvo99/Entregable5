import React from 'react';
import FormUser from '../components/Home/FormUser';
import styles from "../components/Home/styles/home.css";
const Home = () => {
  return (
    <div className='home'>
      <img className='home__title' src="/image.png" alt="" />
      <h2 className='home__greetings'>Hi Trainer</h2>
      <p className='home__text'>Please enter your name to start</p>
      <FormUser />
      <footer className='home__footer'>
        <div className="red__bar"></div>
        <div className="black__bar">
          <div className="circle1">
            <div className="circle2"></div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;