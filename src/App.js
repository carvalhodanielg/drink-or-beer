import {useState, useEffect} from 'react';
import  * as C from './AppStyle'
import  './App.css'


function App() {

const [beer, setBeer] = useState();
const [drink, setDrink] = useState();
const [toggle, setToggle] = useState(null);

const loadBeers = async (e) => {
        let response = await fetch('https://api.punkapi.com/v2/beers/random');
        let json = await response.json();
        setBeer(json); 
        setToggle("beer") 
}


const loadDrinks = async (e) => {
        let response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
        let json = await response.json();
        setDrink(json); 
        setToggle("drink");
}


return (
    <div className="main">


        <C.Header>
        <p>What you're gonna <span>drink </span> today?</p>
        {/* <img src='../public/decide-the-night.svg' alt=''></img> */}
        <img id='drinkImg' src='/decide-the-night.svg' alt='alt' height="150px"></img>

        </C.Header>

        <div className='buttons'> 


        <C.Button onClick={loadBeers}>Beer!</C.Button>
        <C.Button onClick={loadDrinks}>Drink!</C.Button>

        </div>
      
        <div className='parent-content'>
      


                    { toggle === "beer" &&
            <div className='content'> 

              <h2>Beer:</h2> 
              {beer[0].name}
              <br/>
              <br/>
              <h2>Description:</h2>
              {beer[0].description}
              <br/>
              <br/>
               
              <h2>Food pairing:</h2>
              {beer[0].food_pairing[0]}<br/>
              {beer[0].food_pairing[1]}<br/>
              {beer[0].food_pairing[2]}<br/>

              {/* <img src={beer[0].image_url} width={100}></img> */}

            </div>

                   }

      { toggle === "drink" &&
        
          <div className='content'> 

            <h2>Drink:</h2> 
            {drink.drinks[0].strDrink} 
            <br/>
            <br/>
            <h2>Tipo:</h2>
            {drink.drinks[0].strTags}
            <br/>
            <br/>
            <h2>Instructions:</h2>
            {drink.drinks[0].strInstructions}
            <br/>
            <br/>
            <h2>Ingredients:</h2>
            {drink.drinks[0].strIngredient1}, {drink.drinks[0].strIngredient2}, {drink.drinks[0].strIngredient3}
            <br/>
            <br/>

          </div>

          

     }
          { toggle === "drink" && 
          <div className='image-content'> 

            {<img src={drink.drinks[0].strDrinkThumb} width={200}></img>}   

          </div> }

           

      </div>
       
        {
          <C.Footer margin={toggle} >Developed by: Daniel Carvalho | 2022</C.Footer>
        }

    </div>

    
  );
}

export default App;

