import Greeting from "./Greeting"


function App() {

  return (
   <div className="greet">
    <Greeting isLoggedIn = {true} name = "shyam"/>
    <Greeting isLoggedIn = {false} name = "Jack"/>
    <Greeting isLoggedIn = {true} name = "John"/>
    <Greeting isLoggedIn = {false} name = "Micheal"/>
    <Greeting isLoggedIn = {true} name = "Ruther"/>
   </div>
  )
}

export default App
