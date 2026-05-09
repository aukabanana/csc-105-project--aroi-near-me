import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from '@fortawesome/free-solid-svg-icons' 

type ModalConfirmProps = {
    onClose: () => void
    onConfirm: () => void
    loading?: boolean
}

function ModalConfirm({onClose, onConfirm, loading = false}: ModalConfirmProps) {
    return (
        <div className="fixed inset-0 z-40 bg-white/20 flex justify-center items-center"
         onClick={onClose}>
            <div className='absolute z-1 w-full backdrop-blur-xs bg-(--color-text-primary)/0.1'></div>
            <div className="flex flex-col z-2 overflow-y-auto max-h-[90vh] scrollbar-hide bg-(--color-bg-default) 
            px-[clamp(25px,5.5vw,70px)] pt-[clamp(40px,4vw,80px)] pb-[clamp(10px,1.5vw,15px)] m-4 rounded-2xl md:rounded-4xl" onClick={(e) => e.stopPropagation()}>
                <div className="flex flex-col gap-6 md:gap-7">
                    <div className='flex justify-center'>
                        <div className='flex items-center justify-center 
                        bg-(--color-brand-primary)/15 
                        aspect-square 
                        w-20 h-20 md:w-25 md:h-25 lg:w-30 lg:h-30
                        rounded-full'>
                        <FontAwesomeIcon icon={faXmark} className='p-5 text-5xl md:text-7xl text-(--color-brand-primary)'/></div>
                    </div>
                    <div className='flex flex-col items-center justify-center md:gap-2 text-(--color-text-primary)'>
                        <p className="text-lg md:text-2xl font-extrabold">Are you sure?</p>
                        <p className="text-sm md:text-lg font-thin">Do you really want to delete this?</p>
                    </div>
                </div>
                <div className='flex flex-row mt-5 md:mt-7 mb-5 md:mb-7 gap-5 justify-between'>
                    <button className="border border-(--color-brand-primary) text-(--color-brand-primary) 
                    text-sm md:text-lg px-[clamp(9px,2.5vw,18px)] py-[clamp(3px,2.5vw,6px)] rounded-full 
                    bg-(--color-brand-primary)/20 hover:text-(--color-text-primary) hover:bg-(--color-brand-primary)
                    duration-300 cursor-pointer" onClick={(e) => {
                        e.preventDefault()
                        onClose()
                    }}>Cancel</button>

                    <button 
                    disabled={loading} 
                    className="border border-(--color-state-success) text-(--color-state-success)
                    text-sm md:text-lg px-[clamp(9px,2.5vw,18px)] py-[clamp(3px,2.5vw,6px)] rounded-full 
                    bg-(--color-state-success)/20 hover:text-(--color-text-primary) hover:bg-(--color-state-success)
                    duration-300 cursor-pointer" 
                    onClick={(e)=> {
                        e.preventDefault()
                        onConfirm()
                    }}>
                        {loading ? 'Deleting' : 'Confirm'}
                    </button>
                </div>
            </div>
        </div>
    )
}
export default ModalConfirm


