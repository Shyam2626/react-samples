function Button(){

    const handleClick = () => console.log("Button Clicked");
    const handleClick2 = (name) => console.log(`${name} stop clicking me`);
    return(
        <div>
            <button onClick={() => handleClick2("bro")}>Click Me❤️</button>
        </div>
    )
}

export default Button;