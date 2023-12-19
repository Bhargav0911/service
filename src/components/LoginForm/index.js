import React, { useState } from 'react';
import PhoneNumberValidation from '../PhoneNumberValidation';
import OTPValidation from '../OTPValidation';
import RegistrationForm from '../RegistrationForm';
import './index.css';


const LoginForm = () => {
  const [status, setStatus] = useState('LOGIN');
  const [dashboard, setDashboard] = useState(false);
  const [showRegistration, setShowRegistration] = useState(false);

  const onClickGetOtp = () => {
    setStatus("VERIFY");
  };

  const onClickVerify = () => {
    setStatus("SUCCESS");
  };

  const onClickContinue = () => {
    setDashboard(true);
  };
  const onClickSignUp = () => {
    setShowRegistration(true);
    setStatus('REGISTER');
  };

  const Welcome = () => (
    <div className='loginContainer'>
      <img src="https://res.cloudinary.com/dywrzseia/image/upload/v1694708937/Dooper_Logo.png" alt="dooper img" className='dooperImg' />
      <div className='welcomeContainer'>
        <h1 className='welcome'>Welcome</h1>
        <h2 className='welcomePara'>Welcome to <span className='span_dooper'>DOOPER</span>, please enter your details</h2>
        <div className='phoneNumberContainer'>
          <label className='label'>Phone Number</label>
          {<PhoneNumberValidation />}
          <button className='loginBtn' onClick={onClickGetOtp}>Send OTP</button>
        </div>
      </div>
      <div className=''>
      <button className='SignBtn' onClick={onClickSignUp}>
        Sign Up
      </button>
        <div className='checkBoxContainer'>
          <input type='checkbox' className='checkBox' />
          <p>By signing up you agree to <span className='span_dooper'>Terms of use</span></p>
        </div>
        <div className='checkBoxContainer'>
          <input type='checkbox' className='checkBox' />
          <p>By signing up you agree to <span className='span_dooper'>Marketing condition</span></p>
        </div>
      </div>
      <p className='bottomText'>Join the community of smart and experienced doctors.
        Login to access your personalized dashboard,
        track your record or process and get informed by our services</p>
        
    </div>
  );

  const Verify = () => (
    <div className='loginContainer'>
      <img src="https://res.cloudinary.com/dywrzseia/image/upload/v1694708937/Dooper_Logo.png" alt="dooper img" className='dooperImg' />
      <div className='otpContainer'>
        <h2 className='verify'>Verify</h2>
        <p className='verifyPara'>Enter OTP which we sent to you</p>
        {/* {<OTPValidation /> */} 
        <button className='verifyBtn' onClick={onClickVerify}>Verify OTP</button>
      </div>
      <p className='bottomText'>Join the community of smart and experienced doctors.
        Login to access your personalized dashboard,
        track your record or process and get informed by our services
      </p>
    </div>
  );

  const Success = () => (
    <div className='successContainer'>
      <img src="https://res.cloudinary.com/dywrzseia/image/upload/v1694708937/Dooper_Logo.png" alt="dooper img" className='dooperImg' />
      <div className='successImgContainer'>
        <img src="https://res.cloudinary.com/dywrzseia/image/upload/v1695027900/Group_tubb6n.png" alt="successful img" />
        <h3 className='successful'>Successful</h3>
        <p className='successfulPara'>OPT Is verified successfully</p>
        <button className='successBtn' onClick={onClickContinue}>Continue</button>
      </div>
    </div>
  );

  return (
    <div>
      <div className="maincontainer">
        <div className="leftcontainer">
          <p className='dooper'>DOOPER</p>
          <div className='headingContainer'>
            <h1 className='heading'>Start your journey with us</h1>
            <p className='para'>Discover the world's best community of doctors and DHAs</p>
          </div>
          <div className='ratingContainer'>
            <p className='ratingText'>Simply unbelievable! I am really satisfied with the doctor
              who treated me. This is absolutely wonderful!</p>
            <div className='ratingProfile'>
              <img src="https://res.cloudinary.com/dywrzseia/image/upload/v1694709052/rating_img.png" alt="rating" className='ratingImg' />
              <div>
                <p className='timson'>Timson K</p>
                <img src="https://res.cloudinary.com/dywrzseia/image/upload/v1694713305/stars_c00urb.png" alt="stars" className='stars' />
              </div>
            </div>
          </div>
        </div>
        <div className="rightContainer">
        {status === 'LOGIN' && !showRegistration && <Welcome />}
          {status === 'VERIFY' && !showRegistration && <Verify />}
          {status === 'SUCCESS' && !showRegistration && <Success />}
          {showRegistration && status === 'REGISTER' && <RegistrationForm onOtpSent={onClickGetOtp} />}
        </div>
      </div>
    </div>
  );
};

export default LoginForm;