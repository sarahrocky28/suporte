


function Sobre() {
    return ( 
        <div className="h-200">
        <div className="h-200">

        <div>
            <h1 className=" p-10 flex justify-center text-3xl"> A Library tem os melhores livros e acessórios tecnológicos para você! <br />
            </h1><h2 className="text-2xl flex justify-center">Somos a livraria com os melhores preços do Brasil. Nascemos em 2006, com a proposta de levar cultura a todos, e estamos nessa missão há 20 anos!</h2>
            <main className="border border-blue-800 border-dashed rounded-2xl h-150 m-10 flex justify-center gap-30">
             <article className="flex flex-col justify-center">
             <h1 className="p-3 text-7xl font-extrabold text-blue-900">Ofertas <br />no nosso app!</h1>
            <h2 className="m-5 text-2xl"><strong className="bg-blue-400 p-2 rounded-xl  text-white text-2xl">Instale já</strong> e aproveite essa oportunidade</h2>
            </article>
            <hr />
             <article>
                
                <img src="/public/canvaCerto.png" alt="" className="flex p-15"/>
             
            </article>
            </main>
            </div>
        </div>
        </div>
    );
}

export default Sobre;