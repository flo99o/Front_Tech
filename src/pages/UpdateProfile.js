import React from 'react'
import UpdateFormControl from '../components/UpdateProfileForm/UpdateFormControl'

const UpdateProfile = () => {
    const userType = "user" //(state)
    return (
        <UpdateFormControl userType={userType} />
    )
}

export default UpdateProfile
