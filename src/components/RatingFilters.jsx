import { useState } from "react"
import Restaurentdetails from "../assets/data"
function Filters(prop){

    const [isclicked , setisclicked] = useState(false)

function ratingfilter(){
        setisclicked(!isclicked)
        if(isclicked){ 
        const filteredRestaurents = prop.givenres.filter((res)=>
        (res.rating>4.5))
        prop.returnfiltered(filteredRestaurents)
        }
        else{
            // console.log("not on")
            prop.returnfiltered(Restaurentdetails)
        }

    }
function deliveredfilter(){
        setisclicked(!isclicked)
         if(isclicked){ 
        const filtered = prop.givenres.filter((res)=>(
           res.DeliveryTime.includes("20")
        ))
           prop.returnfiltered(filtered)
        }
        else{
            // console.log("not on")
            prop.returnfiltered(Restaurentdetails)
        }

   
    }


    return(
        <div className=" text-gray-500 gap-1 mt-2 flex justify-center items-center">
            {/* Rating */}
            <button onClick={ratingfilter} className="px-1 border-2 border-orange-300 rounded-lg">High Rated </button>
            {/* delivery  */}
            <button onClick={deliveredfilter} className="px-1 border-2 border-orange-300 rounded-lg">DeliveryTime</button>
        </div>
    )
}
export default Filters