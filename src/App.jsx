import './App.css'
import Body from './components/Body'
import Footer from './components/Footer'
import Header from './components/Header'
import SignIn from './components/SignIn'
import Slider from './components/Slider'

function App() {

  return (
    <div className="app">
      <Header />
      <Slider />
      <Body />
      <Footer />
      <SignIn />
    </div>
  )
}

export default App
