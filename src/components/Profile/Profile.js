import React from 'react';

const Profile = (props) => {
	const {name, email, phone, district, upazilla, bloodType} = props.user;
	console.log("From Profile " + name);
	return(
		<div className="white bg-dark-gray tl pa5 pt3" >
			<h1 className="f1"> User Profile </h1>
			<p className="f3"> Name : {name} </p>
			<p className="f3"> Email : {email} </p>
			<p className="f3"> Phone : {phone} </p>
			<p className="f3"> District : {district} </p>
			<p className="f3"> Sub-District : {upazilla} </p>
			<p className="f3"> Blood Type : {bloodType} </p>
			 <div className="mv3">
		        <label className="tl f3" htmlFor="blood-type">Want to Donate Your Blood ?</label>
		        <select className="f4 pa2 pl4 pr4 ml4 input-reset ba bg-white hover-bg-black hover-white " 
		        name="bloodStatus" id="bloodStatusID" >
				  <option className="bg-red f4" value="no">No</option>
				  <option className="bg-green f4" value="yes">Yes</option>
				</select>
		      </div>
		</div>
	);

}

export default Profile;