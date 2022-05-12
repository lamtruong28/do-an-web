import './App.css'
import Body from './components/Body'
import Footer from './components/Footer'
import Header from './components/Header'
import Slider from './components/Slider'
import SignIn from './components/SignIn'

function App() {

  return (
    <div className="app">
      <Header />
      <Slider />
      <Body />
      <Footer />
      {/* <SignIn /> */}
    </div>
  )
}

export default App
