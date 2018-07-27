import React from 'react'

export default class TodoInput extends React.Component {
    handleSubmit = (event) => {
        if (event.key === "Enter") {
            if (event.target.value !== "" && event.target.value.trim()) {
                this.props.todoInputValue(event.target.value);
                event.target.value = "";
            } else {
                alert("enter todo here....");
            }
        }
    }
    handleSubmitFromButton = (e) => {
        const inputVal = e.target.previousSibling.value;
        if (inputVal.trim() && inputVal !== "") {
            this.props.todoInputValue(inputVal);
            e.target.previousSibling.value = "";
        } else {
            alert("enter todo here....");
        }
    }
    render() {
        return (
            <div>
                <input className="input-box" onKeyPress={this.handleSubmit} 
                placeholder="Enter todo here.." type="text" />
                <button className="submit-button" onClick={(e) => 
                    this.handleSubmitFromButton(e)}>Add Todo</button>
            </div >
        )
    }
}
