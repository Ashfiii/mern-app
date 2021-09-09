import React from 'react';
import Card from '../../../shared/components/UIElements/Card';
import UserItem from '../UserItem/UserItem';
import './UsersList.css';

const UsersList = ({items}) => {
    return (
        <div>
            {items.length === 0 ? 
            <div className="center">
                <Card>
                    <h2>No Users found.</h2>
                </Card>
            </div> : 
            <ul className="users-list">
                {items.map(item => (
                    <UserItem 
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        image={item.image}
                        placeCount={item.places}
                    />
                ))}
            </ul>
            } 

        </div>
    )
}

export default UsersList
