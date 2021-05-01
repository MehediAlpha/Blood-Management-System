import React from 'react';
import Tilt from 'react-tilt';
import blood from './icons8-drop-of-blood-96.png';
import './logo.css'

const Logo = () => {
	return(
		<div className='ma4 pd'>
			<Tilt className="Tilt br2 shadow-2 " options={{ max : 100 }} style={{ height: 130, width: 130 }} >
				 <div className="Tilt-inner pa3" >
				 	<img alt='BloodLogo' src={blood}/> 
				 </div>
			</Tilt>
		</div>
	);
}

export default Logo;