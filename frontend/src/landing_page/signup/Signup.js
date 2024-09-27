
import React from "react";
function Signup() {
  return (
    <div className="container mt-5">
      <div className="row  text-center">
        <div className="col-6  p-5">
          <img src="media/images/signup.png" style={{width:"90%",marginLeft:"8rem"}} className=""></img>
        </div>
        <div className="col-6 p-5 mt-5 text-muted " style={{fontSize:"15px "}}>
          <h1>Signup now</h1>
          <p>Or track your existing application.</p>
          <div className="p-2 " >
          <button id="contact" className="border">+91</button>
          <input type="number" placeholder="Contact Number" id="contact"className="border"/>

         
       
          </div>

          <p>You will receive an OTP on your number</p>
          <div>
          <button className='btn btn-primary fs-6 mb-2 p-2' style={{width:"20%",margin:"1 auto"}}>Continue</button>
          </div>
          <a href=""style={{textDecoration:"none"}}>Want to open an NRI account?</a>.
          </div>
          <p class=" text-muted text-center  " style={{fontSize:"14px"}}>
          I authorise Zerodha to contact me even if my number is registered on DND. I authorise Zerodha to fetch my KYC information from the C-KYC registry with my PAN.<br/> Please visit <a href=""style={{textDecoration:"none"}}>this article</a>. to know more.
          </p>
          <br/>
          <p class=" mb-5 text-muted text-center "style={{fontSize:"14px"}}>If you are looking to open a HUF, Corporate, Partnership, or NRI account, you have to use the <a href=""style={{textDecoration:"none"}}>offline forms</a>. For help,<a href=""style={{textDecoration:"none"}}> click here</a>.</p>
        
      </div>
    </div>
  );
}
export default Signup;
