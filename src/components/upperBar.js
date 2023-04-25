import React from 'react'
import Categories from '../utils/Constants'
import { useState } from 'react'


export const UpperBar = () => {

    const [selectedCategory, setSelectedCategory] = useState("Amazing pools")
    return (
        <div className='flex flex-row'>
            {Categories.map((category) => (
                <div >
                     <button onClick={()=>setSelectedCategory(category.Name)}>
                        <div className="flex flex-col">
                            <span style={{color:category.Name===selectedCategory ? "black" : "grey"}}>{category.icon}</span>
                            <span style={{color:category.Name===selectedCategory ? "black" : "grey"}}>{category.Name}</span>
                        </div>
                </button>
                </div>
            )
               
            )}
        </div>
    )
}

export default UpperBar