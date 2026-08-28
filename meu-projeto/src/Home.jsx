


function Home() {
    return ( 
<>
        <div className="h-fit">
           
            <main className="bg-blue-200 border border-blue-800 border-dashed rounded-2xl h-150 m-10 flex justify-center gap-30">
             <article className="flex flex-col justify-center ">
                 <h1 className="p-7 text-7xl font-extrabold text-blue-900 "> A Library <br /> vai até você! <br />
            </h1><h2 className="text-2xl p-7">Fazemos entrega em todo Brasil, <br /> com qualidade e bom preço!</h2>
            <button className="bg-amber-300 rounded-2xl p-2 text-2xl m-2 w-60 text-blue-800 justify-center">COMPRAR AGORA</button>
            </article>
            <article>
                <img src="/public/produtos-blue200_v3.png" alt="" className="h-147 w-fit"/>
            </article>
            </main>
            <section className="flex gap-10 justify-center items-center">
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

                <article className="border h-fit rounded-2xl flex justify-center flex-col  p-5">
                    <div> 
                        <img src="MARCA-PAGINAS.png" alt="" width={300} height={300} className=""/>
                    </div>
                    <div >
                        <h1 className="p-3 m-2 text-3xl flex justify-center">MARCA <br />PÁGINA </h1>
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
                        <img src="KINDLE.png" alt="" width={300} height={300} className=""/>
                    </div>
                    <div >
                        <h1 className="p-3 m-2 text-3xl flex justify-center">KINDLE <br /> AMAZON</h1>
                    <div className="">
                        <button className="bg-amber-200 p-3 rounded-2xl text-2xl w-50 m-5">COMPRAR</button> <button type="submit" className="bg-amber-200 p-3 rounded-2xl text-2xl">🛒</button>
                    </div>
                    </div>
                   
                </article>
            </section>
            </div>
</>
    );

}

export default Home;
