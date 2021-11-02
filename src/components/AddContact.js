import React, { Component } from 'react'

class AddContact extends Component {
    state = {
        name: "",
        Email: "",
    }
    add = (e) => {
        e.preventDefault();
        if (this.state.name === "" || this.state.Email === "") {
            alert("all fields are mandatory");
            return;
        }
        console.log(this.state);
        this.props.contactHandler(this.state);
        this.setState({ name: "", Email: "" });
    }

    render() {
        return (
            <div className="ui main">
                <br />
                <h2>
                    Add Contact
                </h2>
                <form className="ui form" onSubmit={this.add}>
                    <div className="field">
                        <label >Name</label>
                        <input value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} type="text" name="name" placeholder="name" />
                    </div>
                    <div className="field">
                        <label >Mail</label>
                        <input value={this.state.Email} onChange={(e) => this.setState({ Email: e.target.value })} type="text" name="mail" placeholder="mail" />
                    </div>
                    <button className="ui button blue">Add</button>
                </form>

            </div>
        )
    }
}

export default AddContact
