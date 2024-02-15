function AfterLogin(){

    return (
        <div>
            <SignUp Islogged={false}/>
        </div>
    )

}
export default AfterLogin
function UserLogin(props){
    return <h1>Welcome Back !</h1>
}
function NewLogin(props){
    return <h1>Plsease LogIn</h1>
}
function SignUp(props){
    const Islogged=props.Islogged
    if(Islogged){
        return <UserLogin/>
    }
    return <NewLogin/>
}