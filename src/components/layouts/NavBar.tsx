// import { useState } from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
// import ModaladdRest from "./ModaladdRest"


function NavBar() {
    // const [openMo, setOpenMo] = useState<boolean>(false)

    return(
        <div id="NavTab" className="flex px-[clamp(3px,2.5vw,14px)] py-3 border-b bg-transparent">
            <nav className="flex flex-row items-center justify-between w-full">
                <h2 className="font-extrabold">ADMIN</h2>
                <div className='flex flex-row items-center gap-1 sm:gap-3 md:gap-5'>
                    <button className="rounded-3xl text-green-500 hover:text-white font-bold bg-green-500/20 border-2 hover:bg-green-500
                    border-green-500 px-[clamp(3px,2.5vw,8px)] py-1 transition-colors duration-300 cursor-pointer text-xs sm:text-sm md:text-base">
                    + restaurant</button>
                    <p><Link to={'/Landing'}><FontAwesomeIcon icon={faArrowRightFromBracket} size="lg" className="hover:text-red-500 transform-transition duration-300"/></Link></p>
                </div>
            </nav> 

            {/* conditional rendering */}
            {/* {openMo && <ModaladdRest onClose={() => setOpenMo(false)}/>} */}
        </div>
    )
}
export default NavBar