import Functional from './Functional'; {/* REFERENCING TO OTHER JSX */}
import './App.css'

function App() {
  //ADDING FUNCTION
  const add = (a) => {
    return a+1;
  }

  return (
    <>
      <Functional/>
      {/* ADDING FUNCTION */}
      <div>
        {add(5)}
      </div>
    </>
  )
}

export default App