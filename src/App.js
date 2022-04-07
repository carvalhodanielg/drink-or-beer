import {Componente} from './components/Componente';
import {objeto} from './components/Componente'
import {Imprime} from './components/Imprime'

function App() {
let thing = {tipo: "desc tipo",
              nome: "desc nome"}
  return (
    <div className="main">
      <Componente />
      
      {/* {objeto.forEach((e)=> <Imprime e={e.nome}/>)} */}
        {<Imprime passa = {thing.tipo} passa2 = {thing.nome}/>}



   </div>
  );
}

export default App;
