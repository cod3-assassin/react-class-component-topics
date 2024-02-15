import React from "react";

class ArrowFunc extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        fetch("https://picsum.photos/v2/list?page=2&limit=100")
            .then(response => response.json())
            .then(data => {
                this.setState({ data });
            })
            .catch(error => console.log("Error Fetching Data : ", error));
    }

    render() {
        return (
            <div>
                <h2>React Constructor Example</h2>
                <ul>
                    {this.state.data.map(item => (
                        <li key={item.id}>
                            <div>Author: {item.author}</div>
                        
                            <div>ID: {item.id}</div>
                            
                            <div>Width: {item.width}</div>
                            <br/>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default ArrowFunc;
