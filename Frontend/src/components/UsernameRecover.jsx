import React from "react";
import HeaderPR from "./HeaderPR";
const UsernameRecover = () => {
  return (
    <>
      <div className="pr-page">
        <HeaderPR />
        <div className="pr-container">
          <div className="pr-top-box">
            <button className="forgot-pass text-black">FORGOT PASSWORD</button>
            <button className="forgot-pass text-[#582000] text-opacity-75">
              FORGOT USERNAME
            </button>
          </div>
          <div className="pr-bottom-box">
            {/* SAME AS THE SIGN-IN BOX */}
            <div className="container ">
              <div className="sign-in-box-heading ">PASSWORD RECOVERY</div>
              <p className="head-text">
                I know, You Can Remember Clingy Words Given By Your Partner But
                Gamertag Not !
              </p>
            </div>
            <div className="flex gap-5 flex-col">
              <input className="input-box" placeholder="EMAIL ID"></input>

              <button className="sign-in-button">VERIFY</button>
            </div>
            <div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UsernameRecover;
