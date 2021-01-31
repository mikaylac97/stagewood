import React, { Component } from 'react'

export default class Login extends Component {

    state = {
        email: '',
        password: '',
        username: '',
        message: null
    }

    render() {
        return (
            <>
            <form className='form-styles'>
                <label>
                    EMAIL
                    <input type='text' name='email' value={this.state.email} onChange={this.handleInputChange} required />
                </label>
                <label>
                    USERNAME
                    <input type='text' name='username' value={this.state.username} onChange={this.handleInputChange} required />
                </label>
                <label>
                    PASSWORD
                    <input type='text' name='password' value={this.state.password} onChange={this.handleInputChange} required />
                </label>
                <input type='submit' value='Login' className='form-submission'/>
            </form>
        </>
        )
    }
}
