// eslint-disable-next-line no-unused-vars
import React from 'react';

// eslint-disable-next-line react/prop-types
const TShirt = ({tshirt}) => {
    // eslint-disable-next-line react/prop-types, no-unused-vars
    const {name,picture}= tshirt;
    return (
        
        <div>
            <img src={picture} alt="" />
        </div>
    );
};

export default TShirt;