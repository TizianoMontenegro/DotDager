import './App.css'
import FooterComponent from './components/sections/Footer/FooterComponent'
import HeaderComponent from './components/sections/Header/HeaderComponent'
import MainComponent from './components/sections/Main/MainComponent'

function App() {

  return (
    <div className="wrapper">
      <HeaderComponent />
      <MainComponent />
      <section className="lumberjack">
        <h3 className='lumberjack__title'>Lumberjack</h3>
        <iframe className='lumberjack_game' src="https://tbot.xyz/lumber/" height="700" width="400" title="Lumberjack"></iframe>
      </section>
      <FooterComponent />
    </div>
  )
}

export default App
