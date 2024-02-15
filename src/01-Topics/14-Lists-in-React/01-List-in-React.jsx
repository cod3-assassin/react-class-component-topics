
import React from "react";
//import { useState } from "react";


export default function ListinReactExample(){
const myList =['Peter','Sachin','Kevin','Dhoni','Alisa']
const listItem = myList.map((myList)=>{
        return <li>{myList}</li>
    
})
    return <div>
    <ul>{listItem}</ul>

    </div>



 }

// export default function MylistExample() {
//     const [newList, setNewList] = useState(["Michel", "Leo", "Haverd", "John", "Libert"]);
  
//     const addName = () => {
//       const newName = prompt("Enter a new name:");
//       if (newName) {
//         const updatedList = [...newList, newName];
//         setNewList(updatedList);
//       }
//     };
  
//     const listItems = newList.map((name, index) => (
//       <li key={index}>{name}</li>
//     ));
  
//     return (
//       <div>
//         <ul>{listItems}</ul>
//         <button onClick={addName}> New Name</button>
//       </div>
//     );
//   }
  