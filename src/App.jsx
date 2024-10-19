import Header from './components/Head'
import Cards from './components/RestaurentCards'
import SearchBar from './components/Searchbar'
import Filters from './components/RatingFilters'
import Restaurentdetails from './assets/data'
import Footer from './components/Footer'
import { useState } from 'react'
import './App.css'

function App() {
  const [SearchedRestaurent,SetSearchedRestaurent] = useState(Restaurentdetails)
    
  function SearchFunction(value){
    const filteredRestaurents = Restaurentdetails.filter((res)=>
      res.name.toLowerCase().includes(value.toLowerCase())
    )
    SetSearchedRestaurent(filteredRestaurents)
  }
  function Filteredones(fres){
    SetSearchedRestaurent(fres)
  }
  
  return (
    <>
      <Header/>
      
      <SearchBar SearchFunction={SearchFunction}/>

      <Filters givenres = {SearchedRestaurent} returnfiltered={Filteredones}/>

      {/* Cards */}
      <div className="w-2/3 mx-auto mt-4 px-10 flex flex-wrap border-gray-500 rounded-lg">
        {SearchedRestaurent.map(res=>{
          return(<Cards key={res.id} resDetails = {res}/>)}  )
        }
      </div>

      <Footer/>
      
    </>
  )
}

export default App
