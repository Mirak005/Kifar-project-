import React from 'react'
import {Avatar} from "@material-ui/core"
import "./Feed.css"

const  Search =({search, keyword }) =>{
    return (
        <div className="searchComposant">
            <Avatar/>
<input type="text" className="search" placeholder="What you looking for?" value={keyword} onChange={(e)=>search(e) } />  
      </div>
    )
}

// const  Search =({setInputValue }) =>{



//     return (
//         <div>
//      <input type="text" placeholder="search" onChange={(event)=>setInputValue(event.target.value) } />
     
//         </div>
//     );
    
    // }

export default Search
