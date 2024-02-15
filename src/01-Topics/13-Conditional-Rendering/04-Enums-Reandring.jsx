export default function EnumsRendringExample({text,state}){
    return <div>
        {{
            info: <h1>Message text{text}</h1>,
            warning :<h1>Message text{text}</h1>
        }[state]}
    </div>
}