import React from "react" 

class FunctionComponents extends React.Component{
    

    render(){
    return <div>
        <First/>
        <Second/>
        <Hello mystyle2/>
    </div>
}}
class First extends React.Component{
    myStyle ={
        color :'blue',
       
    }
    mystyle2={
        color:'yellow',
    }

    render(){
        return <div>
            <h1>Functional Compoenets</h1>
        </div>
    }
}
class Second extends React.Component{
    info ={
        name :'Jihn HDO',
        age : 23,
        work :'4 years'
    }
    myStyle ={
        color :'blue',
       
    }
    mystyle2={
        color:'yellow',
    }

      
    
    
    render(){
        //destruturing of fucntional componenst
        
        const   {name,age,work}=this.info
       
        return <div>
        
            <h1 style={this.myStyle}>This is Scond Components</h1>
            <h2>{name}</h2>
            <h2 style={this.myStyle}>{age}</h2>
            <h2>{work}</h2>
        </div>
    }
}

class Hello extends React.Component{
    myStyle ={
        color :'blue',
       
    }
    mystyle2={
        color:'yellow',
    }

    render(){
        return <div>
        <h1 style={this.myStyle}>My Wbsite</h1>
        <h1 style={this.mystyle2}>Hello from Functional componenst no 3rd</h1>

        </div>   
         }
}




export default FunctionComponents