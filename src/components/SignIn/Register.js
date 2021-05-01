import React from 'react';
import './SignIn.css'

const Register = () => {
	
	return(
		<main className="pa5 dib br4 mv5 bg-white css">
		  <div className="measure center">
		    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
		      <legend className="f2 fw6 ph0 mh0">Register</legend>
		      <div className="mv3">
		        <label className="tl db fw6 lh-copy f4" htmlFor="name">Name</label>
		        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name"  id="name"/>
		      </div>
		      <div className="mv3">
		        <label className="tl db fw6 lh-copy f4" htmlFor="email-address">Email</label>
		        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-addressID"/>
		      </div>
		      <div className="mv3">
		        <label className="tl db fw6 lh-copy f4" htmlFor="password">Password</label>
		        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="passwordID"/>
		      </div>
		      <div className="mv3">
		        <label className="tl db fw6 lh-copy f4" htmlFor="phone">Phone</label>
		        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="phone"  id="phoneID"/>
		      </div>
		      <div className="mv3">
		        <label className="tl db fw6 lh-copy f4" htmlFor="districtr">District</label>
		        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="district"  id="districtID"/>
		      </div>
		      <div className="mv3">
		        <label className="tl db fw6 lh-copy f4" htmlFor="upazilla">Upazilla</label>
		        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="upazilla"  id="upazillaID"/>
		      </div>
		      <div className="mv3">
		        <label className="tl db fw6 lh-copy f4" htmlFor="blood-type">Blood Type</label>
		        <select className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" name="blood" id="bloodID" >
				  <option value="nonr">None</option>
				  <option value="A+">A+</option>
				  <option value="A">A-</option>
				  <option value="B+">B+</option>
				  <option value="B-">B-</option>
				</select>
		      </div>
		    </fieldset>
		    <div >
		      <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f4 dib w4" type="submit" value="Register"/>
		    </div>
		    
		  </div>
		</main>

	);
}

export default Register;