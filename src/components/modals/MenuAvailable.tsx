import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUtensils } from '@fortawesome/free-solid-svg-icons' 

function ModalAvailable({onClose} : {onClose : ()=> void}) {
    return (
        <div className="fixed inset-0 z-99 bg-white/20 flex justify-center items-center"
         onClick={onClose}>
            <div className='absolute z-1 w-full backdrop-blur-xs bg-(--color-text-primary)/0.1'></div>
            <div className="z-2 overflow-y-auto max-h-[90vh] scrollbar-hide bg-(--color-bg-default) p-3 m-4 rounded-2xl" onClick={(e) => e.stopPropagation()}>
                <div className="flex items-center gap-3 w-[clamp(200px,70vw,800px)]">
                    <FontAwesomeIcon icon={faUtensils} className="bg-yellow-500/20
                    text-sm sm:text-3xl md:text-3xl p-2.5 rounded-xl text-yellow-500"/>
                    <p className="text-sm  sm:text-lg md:text-xl font-extrabold text-yellow-500">Create Restaurant</p>
                    <hr className="flex-1 border-t-px border-white "/>
                </div>



                <div className='flex flex-row mt-5 md:mt-7 mb-5 md:mb-7 gap-5 float-end'>
                    <button className="border border-(--color-brand-primary) text-(--color-brand-primary) 
                    text-sm md:text-lg px-[clamp(9px,2.5vw,18px)] py-[clamp(3px,2.5vw,6px)] rounded-full 
                    bg-(--color-brand-primary)/20 hover:text-(--color-text-primary) hover:bg-(--color-brand-primary)
                    duration-300 cursor-pointer" onClick={(e) => {
                        e.preventDefault()
                        onClose()
                    }}>Cencel</button>

                    <button className="border border-(--color-state-success) text-(--color-state-success)
                    text-sm md:text-lg px-[clamp(9px,2.5vw,18px)] py-[clamp(3px,2.5vw,6px)] rounded-full 
                    bg-(--color-state-success)/20 hover:text-(--color-text-primary) hover:bg-(--color-state-success)
                    duration-300 cursor-pointer" onClick={(e)=> {
                        e.preventDefault()
                        onClose()
                    }}>Create</button>
                </div>
            </div>
        </div>
    )
}
export default ModalAvailable