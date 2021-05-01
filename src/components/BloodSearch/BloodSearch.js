import React from 'react';
import './bloodsearch.css';

const BloodSearch = ({changeBlood, changeLocation}) => {
	return(
		<div className="flexSystem pa3 shabow-5 white bg-dark-gray w-100 tc">
			<input className='box1 pa3 ba b--black bg-white br-3 red b ma2 tc' type ='search' 
				placeholder= 'SearchBlood' onChange = {changeBlood} />
			<input className='box2 pa3 ba b--black bg-white br-3 red b ma2 tc' type ='Search' 
			placeholder= 'Location' onChange = {changeLocation} />
		</div>
	);
}

export default BloodSearch;