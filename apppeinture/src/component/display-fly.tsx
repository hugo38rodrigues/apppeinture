import React from 'react';

interface DisplayFlyprops {
    displayFly: any
}

const DisplayFly = (prop: DisplayFlyprops) => {
    const {displayFly} = prop
    return (
        <div className="displayFly">
            {displayFly.map((item) => (
                <div className='fly' key={item.id}>
                    <h2>{item.title}</h2>
                    <img src={item.image} alt={item.alt}/>

                </div>
            ))}
        </div>
    );
};

export default DisplayFly;
