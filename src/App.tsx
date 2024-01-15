import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import ImageProvider from './context'

function App() {
  return (
    <ImageProvider>
      <Header/>
      <Main/>
    </ImageProvider>
    )
  }
    

export default App
