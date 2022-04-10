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
                 Cervejas: 
                 <br/>
                 {beer[0].name} </div>

          }

      { toggle === "drink" &&
          
          <div> 
            Drink: 
            <br/>
            {drink.drinks[0].strDrink} </div>

     }




        
      </div>
    </div>
  );
}

export default App;

