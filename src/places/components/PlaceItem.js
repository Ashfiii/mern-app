import React, {useState} from 'react'
import Card from '../../shared/components/UIElements/Card'
import './PlaceItem.css'
import Button from './../../shared/components/FormElements/Button';
import Modal from '../../shared/components/UIElements/Modal';

const PlaceItem = ({id, image, title, description, address}) => {

    const [showMap, setShowMap] = useState(false);

    const openMapHandler = () =>{
        setShowMap(true); 
    }

    const closeMapHandler = () =>{
        setShowMap(false);
    }
    return (
        <>
        <Modal
        show={showMap}
        onCancel={closeMapHandler}
        header={address}
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-actions"
        footer={<Button onClick={closeMapHandler}>CLOSE</Button>}
        >
           <div className="map-container">
               <h2>THE MAP</h2>
            </div> 
        </Modal>
        <li className="place-item">
            <Card className="place-item__content">
                <div className="place-item__image">
                    <img src={image} alt={title}/>
                </div>
                <div className="place-item__info">
                    <h2>{title}</h2>
                    <h3>{address}</h3>
                    <p>{description}</p>
                </div>
                <div className="place-item__actions">
                    <Button inverse onClick={openMapHandler}>VIEW ON MAP</Button>        
                    <Button to={`/places/${id}`}>Edit</Button>        
                    <Button danger>Delete</Button>        
                </div>
            </Card>
        </li>
        </>
    )
}

export default PlaceItem
