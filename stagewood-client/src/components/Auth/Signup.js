import React, { Component } from 'react'
import AUTH_SERVICE from '../../services/AuthService'

export default class Signup extends Component {

    state = {
        email: '',
        password: '',
        username: '',
        first_name: '',
        last_name: '',
        profile_pic: '',
        message: null
    }


    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
      };

    handleFormSubmission = event => {
        event.preventDefault();

        const { first_name, last_name, email, password, username } = this.state;

        AUTH_SERVICE
            .signup({first_name, last_name, email, password, username})
            .then(responseFromServer => console.log(`new user in db: ${responseFromServer}`))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <>
                <form className='form-styles' onSubmit={this.handleFormSubmission}>
                    <label>
                        FIRST NAME
                        <input type='text' name='first_name' value={this.state.first_name} onChange={this.handleInputChange} required />
                    </label>
                    <label>
                        LAST NAME
                        <input type='text' name='last_name' value={this.state.last_name} onChange={this.handleInputChange} required />
                    </label>
                    <label>
                        EMAIL
                        <input type='text' name='email' value={this.state.email} onChange={this.handleInputChange} required />
                    </label>
                    <label>
                        USERNAME
                        <input type='text' name='username' value={this.state.username} onChange={this.handleInputChange} required />
                    </label>
                    <label>
                        PROFILE PICTURE
                        <input type='file' name='profile_pic' value={this.state.profile_pic} onChange={this.handleInputChange}  />
                    </label>
                    <label>
                        PASSWORD
                        <input type='text' name='password' value={this.state.password} onChange={this.handleInputChange} required />
                    </label>
                    <label>
                        CONFIRM PASSWORD
                        <input type='text' name='password' value={this.state.password} onChange={this.handleInputChange} required />
                    </label>
                    <input type='submit' value='Sign Up' className='form-submission'/>
                </form>
            </>
        )
    }
}
