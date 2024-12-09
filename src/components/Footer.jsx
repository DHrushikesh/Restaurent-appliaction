function Footer(){
    return(
        <div className="  min-w-full  bg-slate-800 h-[100px] flex justify-evenly flex-wrap mt-auto">

                <div className="my-[10px] min-w-[200px]  flex items-center justify-center">
                <img src="https://1000logos.net/wp-content/uploads/2021/05/Swiggy-emblem.png"
                     alt="" height="99px" width="90px" />
                </div>

                <div className="my-[10px] min-w-[200px]  text-gray-300
                    flex justify-center items-center">
                    DownLoad The App From AppStore
                </div>

                <div className="my-[10px] min-w-[200px]  text-gray-300 flex items-center justify-center">
                    <ul className="flex-col justify-center  ">
                        <li>Twitter</li>
                        <li>Instagram</li>
                        <li>Facebook</li>
                    </ul>
                </div>
        </div>
    )
}
export default Footer