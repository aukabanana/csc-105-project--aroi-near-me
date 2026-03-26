import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStore } from "@fortawesome/free-solid-svg-icons"
// import { useState } from 'react'


function ModalRestaurantForm({ onClose } : {onClose : ()=> void}) {

    return (
        <div className="fixed inset-0 z-99 bg-black/60 flex justify-center items-center"
         onClick={onClose}>
            <div className="bg-black p-3 m-4 rounded-2xl" onClick={(e) => e.stopPropagation()}>
                <div className="flex items-center gap-3 w-[clamp(200px,70vw,800px)]">
                    <FontAwesomeIcon icon={faStore} className="bg-yellow-500/20
                    text-sm sm:text-3xl md:text-3xl p-2.5 rounded-xl text-yellow-500"/>
                    <p className="text-sm  sm:text-lg md:text-xl font-extrabold text-yellow-500">Create Restaurant</p>
                    <hr className="flex-1 border-t-px border-white "/>
                </div>
                <form>
                    <div className="flex flex-col gap-[clamp(2px,2.5vw,4px)]">
                        <label htmlFor="restName">Restaurant Name</label>
                        <input type="text" id="restName" className="border border-(--color-brand-secondary) rounded-md
                        p-[clamp(10px,2.5vw,20px)] text-sm md:4xl h-10 md:h-12 outline-none focus:outline-none" 
                        required placeholder="Restaurant Name"/>
                    </div>
                    <div className="flex flex-col gap-[clamp(2px,2.5vw,4px)]">
                        <label htmlFor="addressRest">Address</label>
                        <textarea name="addressRest" id="addressRest" className="border border-(--color-brand-secondary) rounded-md
                        p-[clamp(10px,2.5vw,20px)] text-sm md:4xl h-22 md:h-26 outline-none focus:outline-none" 
                        required placeholder="Address"></textarea>
                    </div>
                </form>

            </div>
        </div>
    )
}
export default ModalRestaurantForm
