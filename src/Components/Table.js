import React from "react";

export const Table = () =>{

    let [ingredientes, setIngredientes] = React.useState([]);
    
    React.useEffect(() => {
        fetch("http://localhost:8080")
        .then(res => res.json())
        .then(data => setIngredientes(data.ingredientes))
        .catch(error => console.log(error));
    }, []);

    React.useEffect(() => {
        console.log(ingredientes);
    }, [ingredientes]);
    
    

    return(
        <div>
                <table className= "table table-dark col-6 center">
                    <thead>
                        <tr>
                            <th scope="col">Ingredientes</th>
                            <th scope="col">Cantidad</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ingredientes.map((ing, i)=>{
                            return <tr key={i}>
                                <td>{ing.nombre}</td>
                                <td>{ing.cantidad}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
    )
}