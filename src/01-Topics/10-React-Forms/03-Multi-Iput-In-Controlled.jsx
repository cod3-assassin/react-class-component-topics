import React from "react";

export default class MultiInputInControlledExp extends React.Component{
    constructor(props){
        super(props)
        this.state={
            porsonGiong: true,
            numberOfPerson: 15
        }
        this.handelInputChange = this.handelInputChange.bind(this)

    }
    handelInputChange(event){
        const target = event.target
        const value = target.type = "checkbox"?target.checked:target.value
        const name =target.name
        this.setState({
            [name]:value
        })

    }
    render(){
        return(
            <form>
            <h1>Multiple Input Controlled Form Example</h1>  
              <label>  
                  Is Person going:  
                  <input  
                    name="personGoing"  
                    type="checkbox"  
                    checked={this.state.personGoing}  
                    onChange={this.handleInputChange} />  
             </label>  
             <br />  
             <label>  
                 Number of persons:  
                 <input  
                 name="numberOfPersons"  
                 type="number"  
                 value={this.state.numberOfPerson}  
                 onChange={this.handleInputChange} />  
             </label>  
         </form>  
                

            
        )
    }
}