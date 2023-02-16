import './App.css'
import { Sidebar, Header, Footer } from './components'
import Routes from './routes/routes'

function App() {

  return (
    <div className='app_wrapper'>
      <div className='sidebar_wrapper'>
        <Sidebar />
      </div>
      <div className='content_wrapper'>
        <Header />
        <main>
          <Routes />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App