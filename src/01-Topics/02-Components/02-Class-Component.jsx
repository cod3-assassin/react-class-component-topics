import React from "react";

class ClassComponents extends React.Component {
  constructor() {
    super();
      this.state = {
      data: [
        {
          id: 1,
          name: "John Doe",
          age: 45,
        },
        {
          id: 2,
          name: "Peter parkour",
          age: 43,
        },
        {
          id: 3,
          name: "Ethen Hunt",
          age: 45,
        },
      ],
    };
  }
  render() {
    return (
      <div>
        <Studentname />
        {this.state.data.map((item) => (
          <Link data={item} />
        ))}
      </div>
    );
  }
}
class Studentname extends React.Component {
  render() {
    return (
      <h1>Student name Details</h1>
    );
  }
}
class Link extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>ID :{this.props.data.id}</li>
        </ul>
        <ul>
          <li>
            Name : {this.props.data.name}
          </li>
        </ul>
        <ul>
          <li> Age :{this.props.data.age}</li>
        </ul>
      </div>
    );
  }
}

export default ClassComponents;

// class ClassComponents extends React.Component{
//     constructor(){
//         super()
//         this.state={
//             value:[{id:1,name:'Shown '},{id:2,name:'John'},{id:3,name:'Bradd'}]
//         }
//     }
//     render(){
//         return <div className="div">
//         <NameofEmploye/>
//         {this.state.value.map((e)=><List value={e}/>)}
//         </div>
//     }
// }
// class NameofEmploye extends React.Component{
//     render(){
//         return <h1>Name Of The Employeee</h1>
//     }
// }
// class List extends React.Component{
//     render(){
//         return <div>
//             <ul>
//                 <li>
//                     {this.props.value.id}
//                 </li>
//                 <li>
//                     {this.props.value.name}
//                 </li>
//             </ul>
//         </div>
//     }
// }
// export default ClassComponents
