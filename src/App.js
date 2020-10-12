import React, { useState } from 'react';
import Button from './DLIB/components/Button';

//let btnStyle = ['button'];
const App= ()=>{

    const[desireBtnStyle, setDesireBtnStyle]=useState([]);
    const onDesireBtnStyleChange= (event)=>{
        setDesireBtnStyle(event.target.value)
    }
    

    return(
        <div>
        <input type='text' style={{width:'200px'}} 
        placeholder='Enter your desired className'
        value={desireBtnStyle}
        onChange={onDesireBtnStyleChange} 
        />
            <Button btnComponentStyle={desireBtnStyle}/>
        </div>
    )
}

export default App ;