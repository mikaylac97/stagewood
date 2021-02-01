import React, { useEffect, useState } from 'react'
import { useQuery, gql } from '@apollo/client'


const ALL_USERS = gql`
    {
        allUsers {
            id
            username
        }
    }
`

export default function Profile() {

    const { data } = useQuery(ALL_USERS);

    console.log({data})

    return (
        <div>
            <div>
                {data?.allUsers.map(user => (
                    <>
                       <p>
                       {user.id} {user.username}
                       </p>
                    </>
                ))}
            </div>
        </div>
    )
}
