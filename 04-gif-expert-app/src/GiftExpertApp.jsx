import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GiftExpertApp = () => {

    const [categories, setCategories] = useState(['One punch']);

    const onAddCategory = ( newCategory ) => {
        
        if ( categories.includes(newCategory) ) return;

        setCategories([newCategory, ...categories]);
        //setCategories( cat => [ ...cat, 'valorant' ];
    }
  

  return (
   <>
    <h1>Gift Expert App</h1>

    <AddCategory 
            onNewCategory = { onAddCategory }
        />

        {
            categories.map( ( category ) => (
                <GifGrid 
                    key={ category } 
                    category={ category }
                />
                ))
        }
   </>
  )
}
