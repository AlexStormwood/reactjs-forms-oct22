import React from "react";
import BusinessCardDisplay from "./BusinessCardDisplay";
import BusinessCardForm from "./BusinessCardForm";


export default class BusinessCardParent extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			name: 'Default Name',
			email: 'default@email.com',
			editMode: false
		}
	}

	updateName = (newName) => {
		this.setState({
			name: newName
		});
	}
	
	updateEmail = (newEmail) => {
		this.setState({
			email: newEmail
		});
	}

	/**
	 * 
	 * @param {string} stateKey Some key from the component state.
	 * @param {string} newValue A new value relevant to that key.
	 * 
	 * Usage:
	 * 
	 * updateState("email", "test@email.com")
	 * 
	 * updateState("name","Alex")
	 */
	updateState = (stateKey, newValue) => {
		this.setState({
			[stateKey]: newValue
		});
	}


	toggleEditMode = () => {
		this.setState({
			editMode: !this.state.editMode
		});
	}


	render(){
		if (this.state.editMode) {
			// show the form
			return (
				<div>
					<BusinessCardForm 
					name={this.state.name} 
					email={this.state.email} 
					updateState={this.updateState}
					/>
					<button onClick={this.toggleEditMode}>Toggle Edit Mode</button>

				</div>
			);
		} else {
			// show the read-only data
			return (
				<div>
					<BusinessCardDisplay name={this.state.name} email={this.state.email} />
					<button onClick={this.toggleEditMode}>Toggle Edit Mode</button>
				</div>
			);	
		}
	}

}