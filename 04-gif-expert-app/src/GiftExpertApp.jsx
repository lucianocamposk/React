import { useState } from "react";
export const GiftExpertApp = () => {

    const [categories, setCategories] = useState(['One punch', 'Dragon ball Z']);
    const onAddCategory = () => {
        setCategories(['Valorant', ...categories]);
    }
  

  return (
   <>
    {/* titulo */}
    <h1>Gift Expert App</h1>
    <button onClick={onAddCategory}>Agregar</button>
    {/* Input */}

    {/* Listado de Gif */}

    <ol>
        {
            categories.map( category => {
                return <li key={category}> { category }</li>
            })
        }
    </ol>

        {/* Gif Item */}


   </>
  )
}
