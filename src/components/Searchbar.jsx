import { useState } from "react"

function SearchBar(prop){
    const [text ,setText]= useState("")
    return(
    <div className="mt-4 flex justify-center items-center">
    <input className='px-4 border-2 border-orange-500 rounded-lg'
    type="text" placeholder='  Restaurent Name here'
    onChange={(e)=>setText(e.target.value)}  />

    <button className="ml-3 " onClick={()=>prop.SearchFunction(text)}>
    <svg className=" fill-orange-400 size-[20px] hover:border-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
    </button>
    </div>

    )
    //  (e)=>{console.log(e.target.value)}
}
export default SearchBar