import './App.css';
import Inventory from './Inventory';

const carsArray = [
  {
    make: "BMW",
    color: "black",
    year: 2022,
    imgUrl: "https://cars.usnews.com/static/images/Auto/izmo/i159614805/2022_bmw_5_series_angularfront.jpg",
  },
  {
    make: "Mercedes",
    color: "black",
    year: 2022,
    imgUrl: "https://images.dealer.com/autodata/us/640/color/2022/USD20MBCBY5A0/040.jpg",
  },
];

const App = () => {
  return (
    <div className='wrapper'>
      <h1> Inventory</h1>
      <div className='inventoryy'>
        {carsArray.map((carObj, index) => {
          return <Inventory key ={index} carObj = {carObj} />;
        })}
      </div>
    </div>
  );
};

export default App; 

