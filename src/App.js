import {useState, useEffect} from 'react'


function App() {

const [beer, setBeer] = useState();

const [drink, setDrink] = useState();

const [toggle, setToggle] = useState();

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

        <button onClick={loadBeers}>Cerveja!</button>
        <button onClick={loadDrinks}>Drink!</button>

      <br/><br/>
      <div>
      


          { toggle === "beer" &&
          
            <div> 

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

              {/* <img src={beer[0].image_url}></img> */}


            </div>

          }

      { toggle === "drink" &&
        
          <div> 

            <h2>Drink:</h2> 
            <br/>
            {drink.drinks[0].strDrink} 
            <br/>
            <br/>
            {drink.drinks[0].strTags}
            <br/>
            <br/>
            {drink.drinks[0].strInstructions}
            <br/>
            <br/>
            {drink.drinks[0].strIngredient1}, {drink.drinks[0].strIngredient2}, {drink.drinks[0].strIngredient3}
            <br/>
            <br/>

            <img src={drink.drinks[0].strDrinkThumb} width={200}></img>
            
          
          </div>
     }




        
      </div>
    </div>
  );
}

export default App;

