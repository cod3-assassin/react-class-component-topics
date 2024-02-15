 import React from "react";

class ChangingState extends React.Component{

    constructor(){
        super()
        this.state ={displayBio:false};
        console.log('Componenet this',this);
        this.toggleDisplayBio =this.toggleDisplayBio.bind(this);
    }
    toggleDisplayBio(){
        this.setState({displayBio:!this.state.displayBio});

    }

    render(){
        return (
            <div>
                <h1>This is Changing State</h1>
                {this.state.displayBio?(
                    <div>
                        <p><h4>This is Changing example of state and paragaraph of div</h4></p>
                        <button onClick={this.toggleDisplayBio}>Read More</button>
                    </div>
                ):(
                    <div>
                    <button onClick={this.toggleDisplayBio}>Read More</button>
                    </div>
                )}
            </div>
        )

    }
}
export default ChangingState

// class ChangingState extends React.Component{
//     constructor(){
//         super()
//         this.state={
//             displayBio:false
//         }
//         this.toggleDisplayBio=this.toggleDisplayBio.bind(this)
//     }
//     toggleDisplayBio(){
//         this.setState({displayBio:!this.state.displayBio})

//     }
//     render(){
//         return (
//             <div>
//                 <h1> This is second exaple of Changing State</h1>
//                 {this.state.displayBio?(
//                     <div>
//                     <p><h4>This is second paragrph of changing State example</h4></p>
//                   <h4>  <button onClick={this.toggleDisplayBio}>Read More</button></h4>
//                     </div>
//                 ):(
//                     <div>
//                     <button onClick={this.toggleDisplayBio}>Raed More</button>
//                     </div>
//                 )}
                
//             </div>
//         )
//     }
// }
// export default ChangingState