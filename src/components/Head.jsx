import { Link } from "react-router-dom"
export default function Header(){
    return(
        <>  
            <h1 className="box-border h-[100px] w-auto border-b-2 border-grey-300 shadow-lg 
                grid grid-cols-1 grid-rows-1 min-[1227px]:grid-cols-3 min-[1227px]:gap-4 ">
                <div className="Logo flex items-center justify-center ">
                    <img src="https://1000logos.net/wp-content/uploads/2021/05/Swiggy-emblem.png"
                     alt="" height="99px" width="90px" />
                </div>
                

                {/* HotBars */}
                <div className="hotbar hidden  min-[1227px]:flex items-center
                justify-between font-sans ">
                    <Link to={'/'}>
                    <span className="hover:text-orange-500  font-bold">Home</span>
                    </Link>

                    <Link to={'/Help'}>
                    <span className="hover:text-orange-500  font-bold">Help</span>
                    </Link>
                   
                    <Link to={'/Offers'}>
                    <span className="hover:text-orange-500  font-bold">Offers</span>
                    </Link>
                    
                    <Link to={'/SignIn'}>
                    <span className="hover:text-orange-500  font-bold">Sign in</span>
                    </Link>
                </div>


                <div className="flex items-center justify-center checkout w-24 ml-[100px]  invisible min-[1227px]:visible">
                    <svg className="hover:fill-black  fill-orange-400" xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" viewBox="0 0 576 512"> <path d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>               
                </div>

            </h1>
        </>
    )
}