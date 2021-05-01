import React from 'react';
import './SignIn.css'

const SignIn = ({onRouteChange}) => {
	
	return(
		<main className="pa5 dib br4 mv3 bg-white css">
		  <div className="measure center">
		    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
		      <legend className="f2 fw6 ph0 mh0">Sign In</legend>
		      <div className="mt3">
		        <label className="tl db fw6 lh-copy f4" htmlFor="email-address">Email</label>
		        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
		      </div>
		      <div className="mv3">
		        <label className="tl db fw6 lh-copy f4" htmlFor="password">Password</label>
		        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
		      </div>
		    </fieldset>
		    <div className="">
		      <input onClick={()=>onRouteChange('home')} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f4 dib" type="submit" value="Sign in"/>
		    </div>
		    <div className="lh-copy mt3">
		      <a onClick={()=>onRouteChange('register')} href="#0" className="f4 link dim black db">Register!</a>
		      <a href="#0" className="f4 link dim black db">Forgot your password?</a>
		    </div>
		  </div>
		</main>

	);
}

export default SignIn;