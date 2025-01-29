import './App.css'
import { Header } from './Components/Header';
import { Main } from './Components/Main';
import { AboutUs } from './Pages/AboutUs';
import { Tips } from './Pages/Tips';


function App() {
  return (
    <div>
      <Header/>
      <Main/>
      <AboutUs/>
      <Tips/>
    </div>
  )
}

export default App
