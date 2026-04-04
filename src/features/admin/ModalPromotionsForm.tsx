import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUtensils } from "@fortawesome/free-solid-svg-icons"
import { useState } from 'react'



function ModalPromotionsForm({ onClose }: { onClose: () => void }) {
    const [preview, setPreview] = useState<string | null>(null)
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => { //get element from input type and use event of react
        const file = e.target.files?.[0]
        if (file) {
            setPreview(URL.createObjectURL(file))
        }
    }

    return (

        <div className="fixed inset-0 z-50 bg-white/20 flex justify-center items-center" onClick={onClose}>
            <div className='absolute z-1 w-full backdrop-blur-xs bg-(--color-text-primary)/0.1'></div>
            <div className="relative z-2 bg-(--color-bg-default) p-3 m-4 rounded-2xl
            max-h-[90vh] overflow-y-auto scrollbar-hide" onClick={(e) => e.stopPropagation()}>
                <div className="flex items-center gap-3 w-[clamp(200px,70vw,800px)]">
                    <FontAwesomeIcon icon={faUtensils} className="bg-yellow-500/20
                    text-sm sm:text-3xl md:text-3xl p-2.5 rounded-xl text-yellow-500"/>
                    <p className="text-sm  sm:text-lg md:text-xl font-extrabold text-yellow-500">Create Promotion Menu</p>
                    <hr className="flex-1 border-t-px border-white " />
                </div>
                <form className="flex flex-col gap-2">
                    <div className="flex flex-col md:flex-row justify-between gap-2">
                        <div className="flex flex-col gap-[clamp(2px,2.5vw,4px)] w-full md:flex-2">
                            <label htmlFor="restName">Menu Name</label>
                            <input type="text" id="restName" className="border border-(--color-brand-secondary) rounded-md
                            p-[clamp(10px,2.5vw,20px)] text-sm md:4xl h-10 md:h-12 outline-none focus:outline-none"
                                required placeholder="Restaurant Name" />
                        </div>

                        <div className="flex flex-col gap-[clamp(2px,2.5vw,4px)] w-full md:flex-1">
                            <label htmlFor="time" className="font-medium">Promotion Time</label>

                            <div className="flex flex-row items-center justify-between
                            border border-(--color-brand-secondary) rounded-md
                            px-3 py-2 h-10 md:h-12">

                                <div className="flex flex-col items-start">
                                    <span className="text-[10px] text-(--color-brand-secondary)">Start</span>
                                    <input
                                        type="time"
                                        className="outline-none focus:outline-none text-sm
                                        apper"
                                        id="timeStart"
                                    />
                                </div>

                                <span className="text-(--color-brand-secondary)">–</span>


                                <div className="flex flex-col items-start">
                                    <span className="text-[10px] text-(--color-brand-secondary)">End</span>
                                    <input
                                        type="time"
                                        className="w-fit min-w-0 bg-transparent outline-none text-sm"/>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[clamp(2px,2.5vw,4px)] w-full">
                            <label htmlFor="restName">Price</label>
                            <input type="number" id="restName" className="border border-(--color-brand-secondary) rounded-md
                            p-[clamp(10px,2.5vw,20px)] text-sm md:4xl h-10 md:h-12 outline-none focus:outline-none"
                                required placeholder="Price (numeric only)" />
                    </div>
                    <div className="flex flex-col gap-[clamp(2px,2.5vw,4px)] w-full">
                            <label htmlFor="restName">Discount Price</label>
                            <input type="number" id="restName" className="border border-(--color-brand-secondary) rounded-md
                            p-[clamp(10px,2.5vw,20px)] text-sm md:4xl h-10 md:h-12 outline-none focus:outline-none"
                                required placeholder="Discounted Price (numeric only)" />
                    </div>
                    <div className="flex flex-col gap-[clamp(2px,2.5vw,4px)] w-full">
                            <label htmlFor="restName">Description</label>
                            <input type="text" id="restName" className="border border-(--color-brand-secondary) rounded-md
                            p-[clamp(10px,2.5vw,20px)] text-sm md:4xl h-10 md:h-12 outline-none focus:outline-none"
                                required placeholder="Description" />
                    </div>
                </form>

                <form>
                    <label className="relative flex flex-col items-center justify-center w-full mt-6 p-5 rounded-md border-2 border-dashed border-(--color-brand-secondary)">
                        {preview ? (
                            <img src={preview} alt="Preview" className='box-border h-60' />
                        ) : (
                            <span className='text-(--color-brand-secondary) text-lg md:text-xl h-40 md:h-60 flex justify-center items-center'>Click to add image</span>
                        )}

                        <div className=''>
                            <input type="file"
                                className='hidden cursor-pointer'
                                accept='image/*'
                                onChange={handleFileChange}
                            />
                        </div>
                    </label>
                    {preview && (
                        <button className='border border-(--color-brand-primary)
                        px-4 py-1 rounded-full mt-5 text-(--color-brand-primary)
                        font-bold cursor-pointer hover:text-(--color-text-primary)
                        duration-300 bg-(' onClick={() => setPreview(null)}>Remove Image</button>
                    )}
                </form>
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
                    duration-300 cursor-pointer" onClick={(e) => {
                            e.preventDefault()
                            onClose()
                        }}>Create</button>
                </div>
            </div>
        </div>
    )
}
export default ModalPromotionsForm
