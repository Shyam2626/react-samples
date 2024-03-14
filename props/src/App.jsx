import Student from "./Student";

function App() {

  
  return (
    <div>
      <Student name = "Shyam" age ={21} isStudent={true}/>
      <Student name = "Sam" age ={21} isStudent={false}/>
      <Student name = "John" age ={24} isStudent={true}/>
      <Student name = "Jack" age ={22} isStudent={false}/>
      <Student /> 
    </div>
  );
}

export default App
