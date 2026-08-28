import { Link } from 'react-router-dom'


function Header(){
    return(

<div>
        <div className="bg-amber-200  p-1 flex  justify-between items-center " >
            <strong> <h1 className="text-blue-400 text-6xl border m-5">Library</h1></strong>
            <nav className='h-fit flex gap-10 text-2xl'>
            <Link to="/" className='bg-blue-400 p-4 rounded-2xl justify-center'> Home</Link>
            <Link to="/Produto" className='bg-blue-400 p-4 rounded-2xl justify-center'> Marca-páginas</Link>
            <Link to="/Contato" className='bg-blue-400 p-4 rounded-2xl justify-center'> Bolsas </Link> <br />
            <Link to="/Livro" className='bg-blue-400 p-4 rounded-2xl justify-center'>Livro</Link> <br />
         </nav>
        
           
           </div>

         </div>
        
        

    )
}

export default Header;