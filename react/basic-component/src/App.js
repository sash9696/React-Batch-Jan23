import './App.css'

function Greetings(props) {
  console.log(props)

  return (
    <h1>Hi my name is  {props.name}. My age is {props.age}</h1>
  )
}

function Welcome() {

  return (
    <h1>Welcome to the class</h1>
  )
}

function App() {

  return (
    <div className="app">
      <Greetings name='John' age={20} />
      <Welcome />

    </div>
  )
}

export default App


