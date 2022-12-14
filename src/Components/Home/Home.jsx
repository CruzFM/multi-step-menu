import { StepOne } from "../StepOne/StepOne"

export const Home = ()=>{
    return(
        <main className="flex items-start justify-center h-screen bg-sky-100 relative md:items-center">
            <div className=" h-full flex flex-col justify-center relative md:w-3/4 md:h-5/6 md:flex-row md:px-2 md:bg-white md:items-center">
                <aside className=" w-screen h-1/4 sidebarBg-mov md:h-95 md:w-3/12 md:mx-3 p-4">
                    {/* md:py-4 md:px-2  */}
                    {/* <p>Hola Fer</p> */}
                    <ul className="flex gap-1 md:flex-col border border-solid border-black justify-around px-9 py-2 md:px-0 md:p-2 md:h-2/3">
                        <li className="border border-solid border-black px-2">
                            <span className="rounded-full px-2 py-1 border border-solid border-white text-white"> 1 </span>
                        </li>
                        <li className="border border-solid border-black rounded-full px-2">
                            <span className="rounded-full px-2 py-1 border border-solid border-white text-white"> 2 </span>
                        </li>
                        <li className="border border-solid border-black rounded-full px-2">
                            <span className="rounded-full px-2 py-1 border border-solid border-white text-white"> 3 </span>
                        </li>
                        <li className="border border-solid border-black rounded-full px-2">
                            <span className="rounded-full px-2 py-1 border border-solid border-white text-white"> 4 </span>
                        </li>
                    </ul>
                </aside>
                {/* Chances are that this whole div must be a component by itself */}
                <div className=" h-3/4 flex-col border border-black border-solid md:w-9/12 md:h-5/6">
                    <div className=" h-4/5 bg-sky-100 md:h-5/6">

                        <article className=" w-11/12 bg-white  border border-solid border-black  absolute top-28 left-1 h-3/5 py-3 px-4 rounded-lg md:static md:w-full md:h-full md:rounded-none">
                            {/* absolute top-24 left-1  */}
                            <StepOne />
                        </article>
                    </div>
                    <article className=" bg-white h-1/5 p-4 flex justify-between items-center md:h-1/6">
                        {/* This component below is just a test, and shouldn't be a white text. just testing displayment. */}
                        <span className="text-white">Something</span>
                        <button className="py-3 px-4 bg-blue-900 text-white rounded">Next Step</button>
                    </article>
                </div>
            </div>
        </main>
    )
}