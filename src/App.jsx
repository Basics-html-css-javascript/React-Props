import './App.css'
import ListWrapper from './ListWrapper' // ✅ use this
import Meduim from './Meduim'
import Simple from './Simple'

function App() {
  return (
    <>
      <h1>Single prop</h1>
      <Simple name="Alice"/>

      <h1>Multi prop</h1>
      <Meduim name="Alice" age={25} course="It"/>

      <h1>Advance props</h1>
      <ListWrapper/> 
    </>
  )
}

export default App
