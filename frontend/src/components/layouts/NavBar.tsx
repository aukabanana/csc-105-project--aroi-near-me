import { useState } from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import ModaladdRest from "../../features/admin/ModalRestaurantForm"


function NavBar() {
    const [openMo, setOpenMo] = useState<boolean>(false)

    return(
        <div id="NavTab" className="flex px-[clamp(3px,2.5vw,14px)] py-3 border-b bg-transparent">
            <nav className="flex flex-row items-center justify-between w-full mb-2 md:mb-5">
                <h2 className="font-extrabold text-xl md:text-3xl">ADMIN</h2>
                <div className='flex flex-row items-center gap-3 md:gap-6'>
                    <button className="rounded-3xl text-(--color-brand-secondary) hover:text-white font-bold bg-(--color-brand-secondary)/20 border-2 hover:bg-(--color-brand-secondary)
                    border-(--color-brand-secondary) px-[clamp(3px,2.5vw,8px)] py-1 transition-colors duration-300 cursor-pointer text-xs md:text-2xl"
                    onClick={()=> setOpenMo(true)}>
                    + restaurant</button>
                    <p><Link to={'/Landing'}><FontAwesomeIcon icon={faArrowRightFromBracket} className="hover:text-red-500 transform-transition duration-300 text-lg md:text-4xl"/></Link></p>
                </div>
            </nav> 

            {/* conditional rendering */}
            {openMo && <ModaladdRest onClose={() => setOpenMo(false)}/>}
        </div>
    )
}
export default NavBar