import { Link } from 'react-router-dom'


function Header(){
    return(

<><div>
        <div className="bg-amber-200 flex  justify-between " >
        <img src="/public/LOGO.png" alt="" width={100} height={100} className=''/>
           <strong> <h1 className="text-blue-300 text-4xl border m-5">Library</h1></strong>
           </div>
                       <nav className='bg-blue-400  p-2 flex justify-center gap-7 text-2xl'>
            <Link to="/"> Home</Link>
            <Link to="/Sobre"> Kindle</Link>
            <Link to="/Produto"> Livros</Link>
            <Link to="/Contato"> Bolsas</Link> <br />
         </nav>
         </div>
         </>
        

    )
}

export default Header;