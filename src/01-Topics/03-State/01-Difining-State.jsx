import React from "react";

class DefiningState extends React.Component{


    
    constructor(){
        super()
        this.state=
            {displayBio:true}
        
    }
    render(){
        const bio =this.state.displayBio?(
            <div>
                <h1>This is an Example of Difining the state</h1>
            </div>
        ):null;
        return <div className="div">
            <h1>This is return </h1>
            {bio}
        </div>
    }
}
export default DefiningState


