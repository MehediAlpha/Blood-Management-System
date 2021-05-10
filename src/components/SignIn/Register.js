import React from 'react';
import './SignIn.css'

class Register extends React.Component {

	constructor(){
		super();
		this.state = {
			name: '',
			email : '',
			password : '',
			phone : '',
			district: '',
			upazilla : '',
			bloodType : ''
		}
	}

	onName = (event) => {
		this.setState({name: event.target.value})
	}
	onEmail = (event) => {
		this.setState({email: event.target.value})
	}

	onPassword = (event) => {
		this.setState({password: event.target.value})
	}

	onPhone = (event) => {
		this.setState({phone: event.target.value})
	}

	onDistrict = (event) => {
		this.setState({district: event.target.value})
	}

	onUpazilla = (event) => {
		this.setState({upazilla: event.target.value})
	}

	onBloodType = (event) => {
		this.setState({bloodType: event.target.value})
	}
	
	onSubmitRegister = () => {
		console.log(this.state);

		fetch('http://localhost:3000/register', {
			method: 'post',
			headers: {'content-type' : 'application/json',
						'Accept': 'application/json'},
			body: JSON.stringify({
				name: this.state.name,
				email : this.state.email,
				password : this.state.password,
				phone : this.state.phone,
				district: this.state.district,
				upazilla : this.state.upazilla,
				bloodType : this.state.bloodType
			})
		})
		.then(response => response.json())
		.then(data =>{
			console.log(data);
			if(data === 'Registration Complete'){
				alert('Registration Complete');
				this.props.onRouteChange('signin');
			}
		})
		
	}

	render(){
		
		return(
			<main className="pa5 dib br4 mv5 bg-white css">
			  <div className="measure center">
				<fieldset id="sign_up" className="ba b--transparent ph0 mh0">
				  <legend className="f2 fw6 ph0 mh0">Register</legend>
				  <div className="mv3">
					<label className="tl db fw6 lh-copy f4" htmlFor="name">Name</label>
					<input onChange = {this.onName} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name"  id="name"/>
				  </div>
				  <div className="mv3">
					<label className="tl db fw6 lh-copy f4" htmlFor="email-address">Email</label>
					<input onChange = {this.onEmail} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-addressID"/>
				  </div>
				  <div className="mv3">
					<label className="tl db fw6 lh-copy f4" htmlFor="password">Password</label>
					<input onChange = {this.password} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="passwordID"/>
				  </div>
				  <div className="mv3">
					<label className="tl db fw6 lh-copy f4" htmlFor="phone">Phone</label>
					<input onChange = {this.onPhone} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="phone"  id="phoneID"/>
				  </div>
				  <div className="mv3">
					<label className="tl db fw6 lh-copy f4" htmlFor="districtr">District</label>
					<input onChange = {this.onDistrict} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="district"  id="districtID"/>
				  </div>
				  <div className="mv3">
					<label className="tl db fw6 lh-copy f4" htmlFor="upazilla">Upazilla</label>
					<input onChange = {this.onUpazilla} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="upazilla"  id="upazillaID"/>
				  </div>
				  <div className="mv3">
					<label className="tl db fw6 lh-copy f4" htmlFor="blood-type">Blood Type</label>
					<select onChange={this.onBloodType} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" name="blood" id="bloodID" >
					  <option value="nonr">None</option>
					  <option value="A+">A+</option>
					  <option value="A-">A-</option>
					  <option value="B+">B+</option>
					  <option value="B-">B-</option>
					</select>
				  </div>
				</fieldset>
				<div >
				  <input onClick={this.onSubmitRegister} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f4 dib w4" type="submit" value="Register"/>
				</div>
				
			  </div>
			</main>
		);
	}
	
}

export default Register;