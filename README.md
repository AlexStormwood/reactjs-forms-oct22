

Form is gonna look like:

- FormParent component -- class component, state to store data, functions to edit the data
	- DataDisplay component -- 
		- read-only render of the data from FormParent using props to acccess FormParent state
		- h1, p, lists
	- DataForm component -- 
		- edit the FormParent state data, 
		- receive functions and state from FormParent, 
		- use functions to update FormParent state 
		- form, input, button submit