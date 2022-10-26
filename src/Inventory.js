/*function Inventory(prop){
    const name = prop.name;
    const model = prop.model;
    return(
        <div className="App">
            <h2>{name}</h2>
            <h2>{model}</h2>
            <ul>
                <li>Body style: Sedan </li>
                <li>0-60 mph: 5.6 to 7.3 seconds</li>
                <li>Bore: 3.4 to 3.7 </li>
                <li>Cargo volume: 15.1 ft³ </li>
                <li>Compression ratio: 11.8 to 13</li>
                <li>Engine cylinder configuration: V engine, Straight engine</li>
            </ul>
            <img id = "toyota" src="toyota.jpg" width="500px"/>
        </div>
    )
}

export default Inventory; */

const Inventory = ({carObj}) =>{
    const {make, imgUrl, color, year} = carObj;
    return (
        <div className="car">
            <h3> {make}</h3>
            <img src={imgUrl} />
            <p>
                The {year} {make} is {color} .
            </p>
        </div>
    )
}

export default Inventory;