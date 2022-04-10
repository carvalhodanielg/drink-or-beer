import { useState } from "react";

export const Componente = ({beer}) => {

const [beerCom, setBeerCom] = useState();

setBeerCom(beer[0].name)

  return (
      <div>


       {console.log(beerCom)}
       
       
      </div>


    );
}

  