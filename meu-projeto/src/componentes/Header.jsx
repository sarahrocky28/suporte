import { Link } from 'react-router-dom'


function Header(){
    return(

<><div>
        <div className="bg-amber-200  p-1 flex  justify-between " >
        <img src="/public/LOGO.png" alt="" width={100} height={100} className='m-0'/>
           <strong> <h1 className="text-blue-300 text-6xl border m-5">Library</h1></strong>
           </div>
                       <nav className='bg-blue-400  p-2 flex justify-center gap-7 text-2xl'>
            <Link to="/"> Home</Link>
            <Link to="/Sobre"> Sobre</Link>
            <Link to="/Produto"> Produto</Link>
            <Link to="/Contato"> Contato</Link> <br />
         </nav>
         </div>
         </>
        

    )
}

export default Header;