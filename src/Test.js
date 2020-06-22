import React,{useState} from 'react';            //useState is used to hooks concept

let Test=()=>
{const [count,ChangeCount]=useState(0);          //const has no affect to array of ele's so can be updated.
const [count1]=useState({
    name:"Sanghavi",
    age:"20"
})
let increment=()=>
{
   ChangeCount(count+1)
}
    return(
        <div style={{border:"1px solid #ddd",padding:"1%",textAlign:"center"}}>
            <h2>Test Component</h2>
            <h2>{typeof(count)}</h2>
            <h2>{count}</h2>
            <h2>{count1.name}</h2>
            <button onClick={increment}>Change Count</button>
        </div>
    )
}

export default Test;