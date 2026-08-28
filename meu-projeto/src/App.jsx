import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Produto from './Produto';
import Contato from './Contato';
import Livro from './Livros';
import Header from './componentes/Header.jsx';
import Footer from './componentes/Footer.jsx';

function App() {
return (
<>



    <BrowserRouter>
    <Header/>
    <Routes>

      <Route path='/' element={<Home />}/>
      <Route path='/Produto' element={<Produto />}/>
      <Route path='/Contato' element={<Contato />}/>
      <Route path='/Livro' element={<Livro />}/>


    </Routes>
    
    
    
    <Footer/>
    </BrowserRouter>




</>
)
}
export default App;