import './App.css'
import Form from './components/Form'

function App() {

  return (
    <>
      <div className="flex flex-col justify-center h-screen items-center font-mono bg-black m-0 p-0">
        <h1 className='text-white mb-10 font-bold'>Carga de estudiantes</h1>
        <Form/>
      </div>
    </>
  )
}

export default App;