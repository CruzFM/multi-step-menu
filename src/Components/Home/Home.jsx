export const Home = ()=>{
    return(
        <main className="flex items-start justify-center h-screen bg-sky-100 relative">
            {/* <div className=" w-3/4 h-5/6 flex items-center px-2 bg-white">
                <aside className=" h-95 w-60 bg-blue-200 mx-3 sidebarBg">
                    <p>Hola Fer</p>

                </aside>
                <article className=" h-5/6 w-8/12">
                    <p>Hola a todos.</p>
                </article>
            </div> */}

            <div className=" h-full flex-col items-center justify-center  relative">
                <aside className=" w-screen h-1/4 sidebarBg-mov">
                    <p>Hola Fer</p>
                </aside>
                <div className=" h-3/4 flex-col border border-black border-solid">
                    <div className=" h-4/5 bg-sky-100">
                        <article className=" w-11/12 bg-white  border border-solid border-black  absolute top-28 left-1 h-2/4">
                            {/* absolute top-24 left-1  */}
                            <p>Hola a todos.</p>
                        </article>
                    </div>
                    <article className=" bg-slate-400 h-1/5">
                        Next
                    </article>
                </div>
            </div>
        </main>
    )
}