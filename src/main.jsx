import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Find from './Find'
import About from './about'
import { Routes,Route,Link,BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <header>
    <App />
    </header>
    <main>
    <Routes>
      <Route path='/Calc' element={<Find/>}/>
      <Route path='/ABout' element={<About/>}/>
    </Routes>
    </main>
    </BrowserRouter>
  </React.StrictMode>,
)
