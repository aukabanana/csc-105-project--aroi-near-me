import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStore } from "@fortawesome/free-solid-svg-icons"
import { useState } from 'react'
import { createRestaurant, updateRestaurant, getErrorMessage } from "../../api/aroi"

type RestaurantFormValues = {
    name: string;
    banner: string;
    address: string;
}

type ModalRestaurantFormProps = {
    onClose: () => void;
    mode?: "create" | "update";
    restaurantId?: string;
    defaultValues?: RestaurantFormValues;
    onSuccess?: () => void;
}

function ModalRestaurantForm({
    onClose,
    mode = "create",
    restaurantId,
    defaultValues,
    onSuccess
}: ModalRestaurantFormProps) {
    const [preview, setPreview] = useState<string | null>(null)
    const [name, setName] = useState(defaultValues?.name ?? "")
    const [address, setAddress] = useState(defaultValues?.address ?? "")
    const [banner, setBanner] = useState(defaultValues?.banner ?? "")
    const [imageFile, setImageFile] = useState<File | null>(null)
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]

        if (file) {
            const previewUrl = URL.createObjectURL(file)
            setPreview(previewUrl)
            setImageFile(file)
        }
    }

    const handleSubmitRestaurant = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        try {
            setError("")
            setLoading(true)

            const formData = new FormData()
            formData.append("name", name)
            formData.append("address", address)

            if (imageFile) {
                formData.append("image", imageFile)
            }

            if (mode === "update") {
                if (!restaurantId) {
                    throw new Error("Restaurant ID is required")
                }

                await updateRestaurant(restaurantId, formData)
            } else {
                await createRestaurant(formData)
            }

            onSuccess?.()
            onClose()
            window.location.reload()
        } catch (err) {
            setError(getErrorMessage(err))
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="fixed inset-0 z-99 bg-white/20 flex justify-center items-center"
         onClick={onClose}>
            <div className='absolute z-1 w-full backdrop-blur-xs bg-(--color-text-primary)/0.1'></div>
            <div className="z-2 overflow-y-auto max-h-[90vh] scrollbar-hide bg-(--color-bg-default) p-3 m-4 rounded-2xl" onClick={(e) => e.stopPropagation()}>
                <div className="flex items-center gap-3 w-[clamp(200px,70vw,800px)]">
                    <FontAwesomeIcon icon={faStore} className="bg-yellow-500/20
                    text-sm sm:text-3xl md:text-3xl p-2.5 rounded-xl text-yellow-500"/>
                    <p className="text-sm  sm:text-lg md:text-xl font-extrabold text-yellow-500">
                        {mode === "update" ? "Update Restaurant" : "Create Restaurant"}
                    </p>
                    <hr className="flex-1 border-t-px border-white"/>
                </div>

                <form onSubmit={handleSubmitRestaurant} encType="multipart/form-data">
                    <div className="flex flex-col gap-[clamp(2px,2.5vw,4px)]">
                        <label htmlFor="restName">Restaurant Name</label>
                        <input 
                        type="text" 
                        id="restName" 
                        className="border border-(--color-brand-secondary) rounded-md
                        p-[clamp(10px,2.5vw,20px)] text-sm md:4xl h-10 md:h-12 outline-none focus:outline-none" 
                        required placeholder="Restaurant Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div className="flex flex-col gap-[clamp(2px,2.5vw,4px)]">
                        <label htmlFor="addressRest">Address</label>
                        <textarea
                        name="addressRest"
                        id="addressRest"
                        className="border border-(--color-brand-secondary) rounded-md
                        p-[clamp(10px,2.5vw,20px)] text-sm md:4xl h-22 md:h-26 outline-none focus:outline-none" 
                        required placeholder="Address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}>
                        </textarea>
                    </div>

                    <label className="relative flex flex-col items-center justify-center w-full mt-6 p-5 rounded-md border-2 border-dashed border-(--color-brand-secondary)">
                        {preview || banner ? (
                            <img src={preview ?? banner} alt="Preview" className='box-border h-60'/>
                        ) : (
                            <span className='text-(--color-brand-secondary) text-lg md:text-xl h-40 md:h-60 flex justify-center items-center'>Click to add image</span>
                        )}

                        <div className=''>
                            <input type="file" name="image"
                            className='hidden cursor-pointer'
                            accept='image/*'
                            onChange={handleFileChange}
                            />
                        </div> 
                    </label>
                    {(preview || banner) && (
                        <button
                        type="button"
                        className='border border-(--color-brand-primary)
                        px-4 py-1 rounded-full mt-5 text-(--color-brand-primary)
                        font-bold cursor-pointer hover:text-(--color-text-primary)
                        duration-300'
                        onClick={() => {
                            setPreview(null)
                            setBanner("")
                        }}
                        >Remove Image</button>
                    )}
                    
                    {error && (
                    <p className="mt-4 text-(--color-brand-primary) font-bold">{error}</p>
                    )}

                    <div className='flex flex-row mt-5 md:mt-7 mb-5 md:mb-7 gap-5 float-end'>
                        <button 
                        className="border border-(--color-brand-primary) text-(--color-brand-primary) 
                        text-sm md:text-lg px-[clamp(9px,2.5vw,18px)] py-[clamp(3px,2.5vw,6px)] rounded-full 
                        bg-(--color-brand-primary)/20 hover:text-(--color-text-primary) hover:bg-(--color-brand-primary)
                        duration-300 cursor-pointer" 
                        onClick={onClose}
                        type="button"
                        >Cancel</button>

                        <button 
                        className="border border-(--color-state-success) text-(--color-state-success)
                        text-sm md:text-lg px-[clamp(9px,2.5vw,18px)] py-[clamp(3px,2.5vw,6px)] rounded-full 
                        bg-(--color-state-success)/20 hover:text-(--color-text-primary) hover:bg-(--color-state-success)
                        duration-300 cursor-pointer" 
                        disabled={loading}
                        type="submit">
                            {loading 
                                ? mode === 'update' ? 'Updating...' : 'Creating...'
                                : mode === 'update' ? 'Update' : 'Create' 
                            }
                        </button>
                    </div>
                </form>
                
            </div>
        </div>
    )
}
export default ModalRestaurantForm
