
import './App.css'
import End from './components/End/End'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Info from './components/Info/Info'
import Me from './components/Me/Me'

function App() {
  

  return (
    <>
     <Header />
     <div className="container">
      <Hero />
      <Info />
      <Me />
      <End />
     </div>
     <hr style={{border: '1px solid rgba(255, 255, 255, 0.1)', marginBottom: '32px'}} />
     <Footer />
    </>
  )
}

export default App
