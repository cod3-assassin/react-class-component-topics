

export default function Notification({ text }) {
    switch(text) {
        case "Hi All":
            return <h2>Message {text}</h2>
        case "Hello World":
            return <h2>Message {text}</h2>
        default:
            return null    
    }
}
