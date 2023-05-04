import React from "react";

export default class BusinessCardForm extends React.Component { 
	
	handleChangeInput = (event) => {
		// check if the event.target.name == email
		// 		validate the email 
		// else 
		// 		validate the name
		// and THEN we can pass it up to the parent 

		this.props.updateState(event.target.name, event.target.value);
	}

	render(){
		return(
			<form>
				<label>Name:</label>
				<input type="text" name="name" value={this.props.name} onChange={this.handleChangeInput} />

				<label>Email:</label>
				<input type="text" name="email" value={this.props.email} onChange={this.handleChangeInput} />
			</form>
		)
	}
}