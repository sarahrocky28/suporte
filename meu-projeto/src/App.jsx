import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Sobre from './Sobre';
import Produto from './Produto';
import Contato from './Contato';
import Header from './componentes/Header.jsx';
import Footer from './componentes/Footer.jsx';

function App() {
return (
<>



    <BrowserRouter>
    <Header/>
    <Routes>

      <Route path='/' element={<Home />}/>
      <Route path='/Sobre' element={<Sobre />}/>
      <Route path='/Produto' element={<Produto />}/>
      <Route path='/Contato' element={<Contato />}/>


    </Routes>
    
    
    
    <Footer/>
    </BrowserRouter>




</>
)
}
export default App;