import './App.css'
import { Header } from './Components/Header';
import { Main } from './Components/Main';
import { AboutUs } from './Pages/AboutUs';
import { Cities } from './Pages/Cities';
import { Hotels } from './Pages/Hotels';
import { Partners } from './Pages/Partners';
import { Tips } from './Pages/Tips';


function App() {
  return (
    <div>
      <Header/>
      <Main/>
      <AboutUs/>
      <Tips/>
      <Hotels/>
      <Cities/>
      <Partners/>
    </div>
  )
}

export default App
