import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import styles from "../components/ProtectedRoutesStyles/styles.css";
const ProtectedRoutes = () => {
  const { trainerName } = useSelector(state => state);
  if (trainerName.length >= 3) {

    return (
      <><header className='header'>
        <div className="red__bar">
          <img className='header__title' src="/image.png" alt="" />
        </div>
        <div className="black__bar">
          <div className="circle1">
            <div className="circle2"></div>
          </div>
        </div>

      </header><Outlet /></>);
  } else {
    return <Navigate to="/" />;
  }


};

export default ProtectedRoutes;