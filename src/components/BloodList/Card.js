import React from 'react';
import Tilt from 'react-tilt';

class Blood extends React.Component {

	onClickRequest = () => {
		console.log("From non-state "+this.props.UserList.email);
	}

	render(){
	const {id, name, email, mobile, location, bloodGroup} = this.props.UserList;
	return(
		<div className="tc bg-white dib br4 pa4 ma2 shadow-5">
			<Tilt className="Tilt" options={{ max : 50 }} style={{ height: 250, width: 250 }} >
				 <div className="Tilt-inner p4" >
				 	<img alt="Robots" src = {`https://robohash.org/${id}`} /> 
				 </div>
			</Tilt>
			{/*<img alt="Robots" src = {`https://robohash.org/${id}`} />*/}
			<div>
				<h2>{name}</h2>

				<p className='b red f4'>{bloodGroup}</p>
				<p>{location}</p>
				<p>{mobile}</p>
				<p>{email}</p>
				<div>
					<input onClick = {this.onClickRequest} 
					className="b ph4 pv2 input-reset ba b--transparent bg-dark-gray white grow pointer f4 dib" 
					type="submit" 
					value="Request"/>
				</div>
			</div>
		</div>
	);
	}
	
}

export default Blood;