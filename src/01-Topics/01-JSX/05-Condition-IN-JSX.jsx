const ConditionRendering =()=>{
    var i = 5;

    return <div>
        <h1>{i?'True':'False'}</h1>
        <h1>{!i?'True':'False'}</h1>
    </div>



} 
export default ConditionRendering