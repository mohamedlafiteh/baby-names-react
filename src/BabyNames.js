import React from 'react'


function BabyNames(props) {
    // console.log('this is props' + props);
    return (
        <div>

            <ul>    
            <li>{props.item.name}</li> 
            </ul>
          
        </div>
    )
}

export default BabyNames
