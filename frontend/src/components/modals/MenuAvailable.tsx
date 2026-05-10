import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUtensils } from '@fortawesome/free-solid-svg-icons' 
import { faCircle } from "@fortawesome/free-solid-svg-icons";


type ModalAvailableProps = {
    onClose: () => void
    nameMenu : string
    descMenu : string
    statusMenu : boolean
    imageMenu : string
}

function ModalAvailable({onClose , nameMenu, descMenu, statusMenu, imageMenu} : ModalAvailableProps) {
    
    const API_URL = "http://localhost:3000"

    const imageUrl = imageMenu.startsWith("http") ? imageMenu : `${API_URL}${imageMenu}`

    return (
        <div className="fixed inset-0 z-50 bg-white/20 flex justify-center items-center" onClick={onClose}>
            <div className='absolute z-1 w-full backdrop-blur-xs bg-(--color-text-primary)/0.1 '></div>
            <div className="z-2 overflow-y-auto max-h-[90vh] scrollbar-hide bg-(--color-bg-default) p-3 m-4 rounded-2xl w-[clamp(200px,70vw,500px)]" onClick={(e) => e.stopPropagation()}>
                <div className="flex items-center gap-3">
                    <FontAwesomeIcon icon={faUtensils} className="bg-yellow-500/20
                    text-sm sm:text-3xl md:text-3xl p-2.5 rounded-xl text-yellow-500"/>
                    <p className="text-lg md:text-xl font-extrabold text-(--color-text-primary)">Menu Information</p>
                    <hr className="flex-1 border-t-px border-white "/>
                </div>
                <div className='flex flex-col justify-center'>
                    <div className="flex flex-row items-center mt-3 ml-2 gap-3">
                        <div className="bg-amber-400 w-1 h-6 md:w-1.5 md:h-10"></div>
                        <div><h2 className='text-xl md:text-3xl font-bold text-(--color-brand-secondary)'>{nameMenu}</h2></div>
                    </div>
                    <div className="flex justify-center mx-8 my-3 md:my-5"><img src={imageUrl} alt={nameMenu} className='rounded-lg md:rounded-2xl'/></div>
                    <hr className='my-5 mx-3'/>
                    <div className="mx-3"><p className="text-xs text-(--color-brand-secondary)">
                        <span className="text-(--color-brand-primary)">Description</span> : 
                        {descMenu}</p></div>
                </div>

                <div className="flex items-center gap-2 justify-end mx-3 my-4">
                    <FontAwesomeIcon icon={faCircle} className={`text-xs ${statusMenu ? "text-(--color-state-success)" : "text-(--color-brand-primary)"}`}/>
                    <h4 className="text-xs md:sm font-bold">Status : {statusMenu ? "Available for sale" : "Unavailable for sale"}</h4>
                </div>
                
            </div>
        </div>
    )
}
export default ModalAvailable