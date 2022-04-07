import {useState, useEffect} from 'react'


function App() {


const [beer, setBeer] = useState();

const loadBeers = () => {

    fetch('https://api.punkapi.com/v2/beers/random')
      .then((response)=>{
        return response.json();
      })
      .then((json)=>{
        setBeer(json);
      })

}

  return (
    <div className="main">

      Cervejas:

      <button onClick={loadBeers}>Clica!</button>
      <br/><br/>
      <div>
        {beer[0].name}
        <br/><br/>
        {beer[0].description}
        <br/><br/><br/>
        {beer[0].food_pairing[0]}

        <br/><br/><br/><br/>

        <img src={beer[0].image_url} width={60}></img>


        {console.log(beer[0].name)}
      </div>
    </div>
  );
}

export default App;


