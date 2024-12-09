

function SearchBar(prop){
    return(
    <div className=" mt-[20px] flex justify-center items-center">
    <input className='px-2 border-2 border-orange-500 rounded-lg'
    type="text" placeholder='Search'
    onChange={(e)=>prop.SearchFunction(e.target.value) }  />
    </div>

    )
}
export default SearchBar