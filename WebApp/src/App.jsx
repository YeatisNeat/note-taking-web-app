import './App.css'
import PrimaryButton from './components/PrimaryButton'
import SecondaryButton from './components/SecondaryButton'
import BorderButton from './components/BorderButton'
import Modal from './components/Modal'

function App() {

  return (
    <>
      <Modal headerText="Delete Note" bodyText="Are you sure you want to permanently delete this note? This action cannot be undone."/>
    </>
  )
}

export default App
