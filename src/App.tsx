import './App.css'
import FooterComponent from './components/sections/Footer/FooterComponent'
import HeaderComponent from './components/sections/Header/HeaderComponent'
import MainComponent from './components/sections/Main/MainComponent'

function App() {

  return (
    <div className="wrapper">
      <HeaderComponent />
      <MainComponent />
      <FooterComponent />
    </div>
  )
}

export default App
