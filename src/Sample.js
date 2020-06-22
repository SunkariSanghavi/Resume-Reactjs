import React, { Component } from 'react';

let Sample=(p)=>{                                      //function component
    return(
        <div>
            <h2 style={{textAlign:"center",color:"red"}}>External Component</h2>
            <h1>{p.name}</h1>                       
            <Sample1 name="REACTTTTTT"></Sample1>  
        </div>
    )                                                          //p.name is used to retrieve the attribute name value given as a property 
                                                              // in App function.
    //text-align is not available in react-js so textAlign
    //the styles should be double braced{{}}
}

class Sample1 extends Component           //can use React.component;but if import{component} not required
{
    constructor()
    {
        super();
        this.state={
            name:"Sanghavi Sunkari",
            age:"20",
            count:20
        }
    }
    change=()=>
    {
        this.setState({
            name:"Sunkari Sanghavi"
        })
    }
    decrement=()=>
    {
        this.setState({
            count:this.state.count-1
        })
    }
    render()
    {
        return(
            <div>
                <h2>This is in external js file as class component</h2>
                {/*JSX-JAVASCRIPT extension*/}
                <h2>{this.state.name} is {this.state.age} years old.</h2>
                <h2>{this.state.count}</h2>
                <h1>{this.props.name}</h1>
                <button onClick={this.change}>Change</button>
                <br></br>
                <button onClick={this.decrement}>Decrement</button>
            </div>
        )
    }
}

export default Sample;