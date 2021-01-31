import React, { useState } from 'react';
import axios from 'axios';
import { AUTH_TOKEN } from '../../constants'
import { useMutation, gql } from '@apollo/client';

const NEW_USER_MUTATION = gql`
    mutation RegisterMutation(
        $first_name: String!
        $last_name: String!
        $email: String!
        $profile_pic: String!
        $username: String!
        $password: String!
    ) {
        signup(
            first_name: $first_name
            last_name: $last_name
            email: $email
            profile_pic: $profile_pic
            username: $username
            password: $password
        ) {
            token
        }
    }
`;

const RegisterNewUser = () => {
    const [formState, setFormState] = useState({
        first_name: '',
        last_name: '',
        email: '',
        profile_pic: '',
        username: '',
        password: '',
        confirmPassword: ''
    })

const [signup] = useMutation(NEW_USER_MUTATION, {
    variables: {
        first_name: formState.first_name,
        last_name: formState.last_name,
        email: formState.email,
        profile_pic: formState.profile_pic,
        username: formState.username,
        password: formState.password
    },
    onCompleted: ({ signup }) => {
        console.log(AUTH_TOKEN, signup.token);
        localStorage.setItem(AUTH_TOKEN, signup.token)
    }
})

function fileUpload(event) {
    event.preventDefault();

    const files = event.target.files;
    const formData = new FormData();
    formData.append('file', files[0])
    formData.append('upload_preset', 'stagewood_assessment')

    axios
        .post('https://api.cloudinary.com/v1_1/dzrts5flo/image/upload', formData)
        .then(response => setFormState({ ...formState, profile_pic: response.secure_url }))
        .catch(err => console.log(err))
    // const images = event.target.files;
    // console.log(images)
    // const data = new FormData()
    // data.append('file', images[0])
    // data.append('upload_preset', 'stagewood_assessment')

    // const result = await fetch(
    //     'https://api.cloudinary.com/v1_1/dzrts5flo/image/upload',
    //     {
    //         method: 'POST',
    //         body: data
    //     }
    // )
    // .then(response => {
    //     response.json()
    //     setFormState({ ...formState , profile_pic: response.secure_url })
    // })
    // .catch(err => console.log(err))
}

    return(
        <div>
            <form onSubmit={async (event) => {
                const { password, confirmPassword } = formState;
                password !== confirmPassword ? 
                    event.preventDefault() :
                    event.preventDefault()
                    await signup();
            }}>
                <div>
                    <input 
                        type="text"
                        placeholder="First name"
                        value={formState.first_name}
                        onChange={e => setFormState({ ...formState, first_name: e.target.value })}
                    />
                    <input 
                        type="text"
                        placeholder="Last name"
                        value={formState.last_name}
                        onChange={e => setFormState({ ...formState, last_name: e.target.value })}
                    />
                    <input 
                        type="text"
                        placeholder="Email"
                        value={formState.email}
                        onChange={e => setFormState({ ...formState, email: e.target.value })}
                    />
                    <input 
                        type="file"
                        id="file"
                        name="file"
                        value={formState.profile_pic}
                        onChange={e => fileUpload(e)}
                    />
                    <input 
                        type="text"
                        placeholder="Username"
                        value={formState.username}
                        onChange={e => setFormState({ ...formState, username: e.target.value })}
                    />
                    <input 
                        type="password"
                        placeholder="Password"
                        value={formState.password}
                        onChange={e => setFormState({ ...formState, password: e.target.value })}
                    />
                    <input 
                        type="password"
                        placeholder="Confirm password"
                        value={formState.confirmPassword}
                        onChange={e => setFormState({ ...formState, confirmPassword: e.target.value })}
                    />
                </div>
                <button type="submit">Create Account</button>
            </form>
        </div>
    )
}

export default RegisterNewUser;
