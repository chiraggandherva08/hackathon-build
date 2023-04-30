import React from 'react';
import './Card.css';

const Card = ({ place, name, phoneNo, disc, category }) => {

    return (
        <div className='card'>
            <div className="card-info" >
                <h2 className='card-name-place'> {place} </h2>
                <h3 className='card-name'> {name} </h3>
            </div>

            <div className="card-disc">
                <p className='card-category'>{category}</p>
                <p className='disc-for-cards'> {disc} </p>
                <p className='card-price'> {phoneNo} </p>
            </div>

        </div>
    )
}

export default Card;