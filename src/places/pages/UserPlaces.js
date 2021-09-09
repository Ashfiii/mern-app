import React from 'react'
import PlaceList from './../components/PlaceList';
import { useParams } from 'react-router-dom';

const PLACES = [
    {
     id: 'p1',
     title: 'Title1',
     description: 'Good',
     imageUrl: 'https://static.toiimg.com/thumb/msid-72397846,width-1200,height-900,resizemode-4/.jpg',
     address: 'Address',
     location: {
        lat: 23.3446442,
        long: 85.3268918
     },
     creator: 'u1'
    },
    {
        id: 'p2',
        title: 'Title2',
        description: 'Good',
        imageUrl: 'https://static.toiimg.com/thumb/msid-72397846,width-1200,height-900,resizemode-4/.jpg',
        address: 'Address1',
        location: {
           lat: 23.3446442,
           long: 85.3268918
        },
        creator: 'u2'
    }
]

const UserPlaces = () => {

    const {userid} = useParams();
    const updatedPlaces = PLACES.filter(place => place.creator === userid)

    return <PlaceList items={updatedPlaces} />
}

export default UserPlaces
