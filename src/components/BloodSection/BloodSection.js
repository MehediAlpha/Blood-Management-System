import React, {Component} from 'react';
import BloodSearch from '../BloodSearch/BloodSearch';
import BloodList from '../BloodList/BloodList';
import {UserList} from '../BloodList/UserList';

class BloodSection extends Component {

	constructor(){
		super();
		this.state = {
			UserList : UserList.sort((a, b) => a.bloodGroup - b.bloodGroup),
			Blood : '',
			Location: '',
		}
	}


	onChangeBlood = (event) =>{
		this.setState({Blood: event.target.value});
		console.log(this.state.Blood);
	}
	onChangeLocation = (event) =>{
		this.setState({Location: event.target.value});
		console.log(event.target.value);
	}

	render(){
		let filteredUserList = this.state.UserList.filter(userList => {
			return (userList.bloodGroup.toLowerCase().includes(this.state.Blood.toLowerCase()) && 
					userList.location.toLowerCase().includes(this.state.Location.toLowerCase()));
		})

		return(
			<div className = "bg-light-gray h-100">
				<BloodSearch changeBlood = {this.onChangeBlood} changeLocation = {this.onChangeLocation}/>
		        <BloodList UserList = {filteredUserList} />
	        </div>
		);
	}
	
}

export default BloodSection;