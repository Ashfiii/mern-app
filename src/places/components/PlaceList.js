import React from 'react'
import Card from '../../shared/components/UIElements/Card'
import PlaceItem from './PlaceItem';
import './PlaceList.css'

const PlaceList = (props) => {
    return (
        <div>
            {props.items.length === 0 ? 
            <div className="place-list center">
                <Card>
                    <h2>No Places found. Maybe create one?</h2>
                    <button>Share Place</button>
                </Card>
            </div> :
            <ul className="place-list">
                {props.items.map(item => (
                    <PlaceItem 
                    key={item.id}
                    id={item.id}
                    image={item.imageUrl}
                    title={item.title}
                    description={item.description}
                    address={item.address}
                    creatorId={item.creator}
                    coordinates={item.location}
                    />
                ))}
            </ul> 
        }
        </div>
    )
}

export default PlaceList
