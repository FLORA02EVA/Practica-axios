import React, { useState } from 'react';
import api from "./api";

export default function Component() {
const [data, setData] = useState ("");
const onclick = () => {

    api.getData().then ((res)=>{
    setData (res.data);
    alert(`el mensaje es: ${JSON.stringify(data)}`);
    });
};

return (
    <div>
        <button onClick={onclick} className="button">Más información</button>
       
    </div>
  );
}