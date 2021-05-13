import React from 'react';

const Navigation = ({isSignedIn, onRouteChange, onRouteChange2}) => {
	if (isSignedIn) {
		return(
			<nav className="bg-white bb bw3 b--dark-gray" style={{display: 'flex', justifyContent: 'flex-end'}}>
				<p onClick={()=> onRouteChange2('profile')} className='f4 grow black pa3 pointer b ma2 hover-white hover-bg-black' >Profile</p>
				<p onClick={()=> onRouteChange2('bloodDonor')} className='f4 grow black pa3 pointer b ma2 hover-white hover-bg-black' >Blood Donor</p>
				<p onClick={()=> onRouteChange('signin')} className='f4 grow black pa3 pointer b ma2 hover-white hover-bg-black' >Sign Out</p>
			</nav>
		);
	} 
	else {
		return(
			<nav style={{display: 'flex', justifyContent: 'flex-end'}}>
				<p onClick={()=> onRouteChange('signin')} className='f4 link dim grow white pa3 pointer b ba bw1 br3 ma4' >Sign In</p>
				<p onClick={()=> onRouteChange('register')} className='f4 link dim grow white pa3 pointer b ba bw1 br3 ma4' >Register</p>
			</nav>
		);
	}
	
}

export default Navigation;