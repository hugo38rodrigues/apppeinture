import React from 'react';

const DisplayFly = (prop) => {
    const {displayFly} = prop
    return (
        <div>
            {displayFly.map((item) => (
                <div key={item.id} className="formDisplayFormFlyer">
                    <h2>{item.title}</h2>
                    <img src={item.image} alt={item.alt}/>
                </div>
            ))}
        </div>
    );
};

export default DisplayFly;