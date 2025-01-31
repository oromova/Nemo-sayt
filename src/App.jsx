import './App.css'
import { Footer } from './Components/Footer';
import { Header } from './Components/Header';
import { Main } from './Components/Main';
import { AboutUs } from './Pages/AboutUs';
import { Cities } from './Pages/Cities';
import { Contact } from './Pages/Contact';
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
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
