import { Link } from 'react-router-dom'


function Header(){
    return(

<><div>
        <div className="bg-black  p-5 flex  justify-between" >
        <img src="/public/react.svg" alt="" width={40} height={30}/>
           <strong> <h1 className="text-amber-50 text-3xl ">Library Tech</h1></strong>
           </div>
                       <nav className='bg-blue-400  p-2 flex justify-center gap-7'>
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