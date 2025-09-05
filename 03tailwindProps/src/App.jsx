
import './App.css'
import Card from './componenets/Card'

function App() {

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
      <Card username="iFighter" btnText="click me" />
      <Card username="himu336" />
    </>
  )
}

export default App