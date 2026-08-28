





function Contato() {
    return ( 
        <div>
            <div className="h-200">
             <h1 className="text-4xl flex flex-col text-blue-900 p-3 justify-center">CONFIRA NOSSAS BOLSAS!</h1>
            <main className="flex gap-10 justify-center items-center">
               
                <article className="border h-fit rounded-2xl flex justify-center flex-col  p-5">
                    <div> 
                        <img src="KINDLE.png" alt="" width={300} height={300} className=""/>
                    </div>
                    <div >
                        <h1 className="p-3 m-2 text-3xl flex justify-center">KINDLE AMAZON </h1>
                    <div className="">
                        <button className="bg-amber-200 p-3 rounded-2xl text-2xl w-50 m-5">COMPRAR</button> <button type="submit" className="bg-amber-200 p-3 rounded-2xl text-2xl">🛒</button>
                    </div>
                    </div>
                   
                </article>
                <article className="border h-fit rounded-2xl flex justify-center flex-col  p-5">
                    <div> 
                        <img src="MARCA-PAGINAS.png" alt="" width={300} height={300} className=""/>
                    </div>
                    <div >
                        <h1 className="p-3 m-2 text-3xl flex justify-center">MARCA PÁGINA </h1>
                    <div className="">
                        <button className="bg-amber-200 p-3 rounded-2xl text-2xl w-50 m-5">COMPRAR</button> <button type="submit" className="bg-amber-200 p-3 rounded-2xl text-2xl">🛒</button>
                    </div>
                    </div>
                   
                </article>

                <article className="border h-fit rounded-2xl flex justify-center flex-col m-5 p-5">
                    <div> 
                        <img src="LIVROS.png" alt="" width={300} height={300} className=""/>
                    </div>
                    <div >
                        <h1 className="p-3 m-2 text-3xl flex justify-center">BOX LIVROS <br />ALI HAZELWOOD </h1>
                    <div className="">
                        <button className="bg-amber-200 p-3 rounded-2xl text-2xl w-50 m-5">COMPRAR</button> <button type="submit" className="bg-amber-200 p-3 rounded-2xl text-2xl">🛒</button>
                    </div>
                    </div>
                   
                </article>

                <article className="border h-fit rounded-2xl flex justify-center flex-col m-5 p-5">
                    <div> 
                        <img src="BOLSA.png" alt="" width={300} height={300} className=""/>
                    </div>
                    <div >
                        <h1 className="p-3 m-2 text-3xl flex justify-center">BOLSA <br /> PERSONALIZADA </h1>
                    <div className="">
                        <button className="bg-amber-200 p-3 rounded-2xl text-2xl w-50 m-5">COMPRAR</button> <button type="submit" className="bg-amber-200 p-3 rounded-2xl text-2xl">🛒</button>
                    </div>
                    </div>
                   
                </article>


                
            </main>
        </div>
            

            <br />
           
        </div>
    );

}

export default Contato;