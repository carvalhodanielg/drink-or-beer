import {useState, useEffect} from 'react'

function App() {

const [beerName, setBeerName] = useState();
const [beerDescription, setBeerDescription] = useState();
const [beerFood, setBeerFood] = useState();
const [beerImage, setBeerImage] = useState();
const [beer, setBeer] = useState();

const [drinkName, setDrinkName] = useState();
const [drink, setDrink] = useState();

const loadBeers = () => {

    fetch('https://api.punkapi.com/v2/beers/random')
      .then((response)=>{
        return response.json();
      })
      .then((json)=>{
        setBeerName(json[0].name);
        setBeerDescription(json[0].description)
        setBeerFood(json[0].food_pairing[0])
        setBeerImage(json[0].image_url)
        setBeer(json)
      }).catch((e)=>{
        console.error(e)
      })
}

const loadDrinks = () => [
  fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    .then((response)=>{
      return response.json();
    })
    .then((json)=>{
      console.log(json.drinks[0])
      setDrinkName(json.drinks[0].strDrink)
      setDrink(json)
    })
]


return (
    <div className="main">
       Cervejas:
        <button onClick={loadBeers}>Cerveja!</button>
        <button onClick={loadDrinks}>Drink!</button>
      <br/><br/>
      <div>
        {beerName}
        {drinkName}
        <br/><br/>
        {beerDescription}
        <br/><br/><br/>

        {beerFood}

        <br/><br/><br/><br/>

        <img src={beerImage} width={60}></img>
        
      </div>
    </div>
  );
}

export default App;

