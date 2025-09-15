import React,{useContext} from 'react'
import UserContext from '../context/userContext'

function Profile() {
    const {user} = useContext(UserContext);

    if (!user?.username) return <div> please login</div>

    return <div> welcome {user.username} </div>
}

export default Profile