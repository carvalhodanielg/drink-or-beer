import {useState, useEffect} from 'react'
import {Componente} from './components/Componente'

function App() {

const [beerName, setBeerName] = useState([]);
const [beerDescription, setBeerDescription] = useState();
const [beerFood, setBeerFood] = useState();
const [beerImage, setBeerImage] = useState();
const [beer, setBeer] = useState();

const [drinkName, setDrinkName] = useState();
const [drink, setDrink] = useState();

const loadBeers = async (e) => {

        let response = await fetch('https://api.punkapi.com/v2/beers/random');
        let json = await response.json();
        setBeer(json[0].name); 
        setBeerName(json[0])  
  }



return (
    <div className="main">

        <button onClick={loadBeers}>Cerveja!</button>
        {/* <button onClick={loadDrinks}>Drink!</button> */}
      <br/><br/>
      <div>
      Cervejas:
          {/* <Componente beer={beer}/> */}
          {beer}
          {console.log.BeerName}
          {beerName}
          {/* {beer[0].name} */}
             
        
        {/* {beerName}
        {drinkName}
        <br/><br/>
        {beerDescription}
        <br/><br/><br/>

        {beerFood}

        <br/><br/><br/><br/>

        <img src={beerImage} alt=""width={60}></img> */}
        
      </div>
    </div>
  );
}

export default App;

