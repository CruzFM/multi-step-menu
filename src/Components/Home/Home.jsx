export const Home = ()=>{
    return(
        <main className="flex items-start justify-center h-screen bg-sky-100 relative md:items-center">
            {/* <div className=" w-3/4 h-5/6 flex items-center px-2 bg-white">
                <aside className=" h-95 w-60 bg-blue-200 mx-3 sidebarBg">
                    <p>Hola Fer</p>

                </aside>
                <article className=" h-5/6 w-8/12">
                    <p>Hola a todos.</p>
                </article>
            </div> */}

            <div className=" h-full flex flex-col justify-center relative md:w-3/4 md:h-5/6 md:flex-row md:px-2 md:bg-white md:items-center">
                <aside className=" w-screen h-1/4 sidebarBg-mov md:h-95 md:w-3/12 md:mx-3 p-4">
                    {/* md:py-4 md:px-2  */}
                    {/* <p>Hola Fer</p> */}
                    <ul className="flex gap-1 md:flex-col border border-solid border-black justify-around px-9">
                        <li className="border border-solid border-white rounded-full px-2">
                            1
                        </li>
                        <li className="border border-solid border-white rounded-full px-2">
                            2
                        </li>
                        <li className="border border-solid border-white rounded-full px-2">
                            3
                        </li>
                        <li className="border border-solid border-white rounded-full px-2">
                            4
                        </li>
                    </ul>
                </aside>
                <div className=" h-3/4 flex-col border border-black border-solid md:w-9/12">
                    <div className=" h-4/5 bg-sky-100">
                        <article className=" w-11/12 bg-white  border border-solid border-black  absolute top-28 left-1 h-2/4 p-3 rounded-lg md:static">
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