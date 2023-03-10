import React, {FunctionComponent} from 'react';
interface DataFlyer{
    id:number
    title:string
    alt:string
    image:string
}
interface DisplayFlyprops {
    dataFlyer: DataFlyer[]
}

export const DisplayFly:FunctionComponent<DisplayFlyprops> = (prop) => {
    const {dataFlyer} = prop
    return (
        <div className="displayFly">
            {dataFlyer.map((item) => (
                <div className='fly' key={item.id}>
                    <h2>{item.title}</h2>
                    <img src={item.image} alt={item.alt}/>

                </div>
            ))}
        </div>
    );
};

export default DisplayFly;
