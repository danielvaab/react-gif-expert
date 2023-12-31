import { useState } from "react"
import { AddCategory, GifGrid } from "./components/";

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState( [ 'Kimetsu' ] );
    const onAddCategories = ( NewCategory ) => {
    
        if ( categories.includes(NewCategory) ) return;

        setCategories([ NewCategory, ...categories ]);
    }

  return (
    <>

    <h1>GifExpertApp</h1>
    <AddCategory 
        // onAddCategories= { setCategories } 
        onNewCategory = { event => onAddCategories(event) }
    />
        { 
        categories.map( category => (
            <GifGrid key={category} 
            category={ category }
            />
            )
        ) 
        }
    </>
  )
}
