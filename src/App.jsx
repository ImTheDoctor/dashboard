import './App.css'
import Sidebar from './components/sidebar/Sidebar'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Routes from './routes/routes'

function App() {

  return (
    <div className='app_wrapper'>
      <div className='sidebar_wrapper'>
        <Sidebar />
      </div>
      <div className='content_wrapper'>
        <Header />
        <Routes />
        <Footer />
      </div>
    </div>

  )
}

export default App