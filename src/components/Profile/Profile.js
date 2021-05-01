import React from 'react';

const Profile = () => {
	return(
		<div className="white bg-dark-gray tl pa5 pt3" >
			<h1 className="f1"> User Profile </h1>
			<p className="f3"> Name : DatabaseName </p>
			<p className="f3"> Email : database@database.com </p>
			<p className="f3"> Phone : +880123456789 </p>
			<p className="f3"> District : DistrictDatabase </p>
			<p className="f3"> Division : DivisionDatabase </p>
			<p className="f3"> Blood Type : M+ </p>
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