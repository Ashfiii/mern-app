import React from 'react'
import UsersList from './components/UsersList/UsersList'

const Users = () => {

    const USERS = [
    {
        id: 'u1',
        name: "Assam",
        image: "https://static.toiimg.com/thumb/msid-71682425,width-800,height-600,resizemode-75,imgsize-106319,pt-32,y_pad-40/71682425.jpg",
        places: 3
    }
]
    return (
      <UsersList 
        items={USERS}
      />
    ) 
}

export default Users
