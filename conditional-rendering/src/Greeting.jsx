function Greeting(props){
    return (
        props.isLoggedIn ? <p className="logIn">{props.name} -- Successfully Loggged in</p> : <p className="logOut">{props.name} -- Please Register</p>
    )
}

export default Greeting;