/* eslint-disable react/prop-types */
function Cards(props){
    const {resDetails} = props
    return(
        <div className="m-4 max-h-[350px] shadow-2xl  opacity-95 rounded-lg hover:opacity-100">
            <img className="rounded-lg size-[250px]" 
            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660${resDetails.imgurl}` }
            alt={resDetails.name} />
            <div className="font-bold mt-[10px] px-[50px]">
                <h1> {resDetails.name} </h1>
                <span> {resDetails.rating} </span>
                <span> {resDetails.DeliveryTime}</span>
                <p className="font-light text-gray-600"> 
                {resDetails.Area}</p>
            </div>
        </div>
    )
}
export default Cards;