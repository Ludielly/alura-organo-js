import { useState } from 'react'
import Banner from './components/Banner'
import Form from './components/Form'

function App() {

  const [collaborator, setCollaborator] = useState([])

  const handleAddCollaborator = (collaborator) => {
    console.log(collaborator);
  }

  return (
    <>
    <Banner />
    <Form registedCollaborator={handleAddCollaborator} />
    </>
  )
}

export default App
