import React from 'react';
import Card from './Card'

const BloodList = ({UserList}) => {
	const cardArray = UserList.map( (user, i) => {
		return <Card key={i} UserList = {UserList[i]} />
	})
	return(
		<div>
			{cardArray}
		</div>
	);
}

export default BloodList;