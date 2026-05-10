import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUtensils } from "@fortawesome/free-solid-svg-icons"
import { useState } from 'react'
import SortType from "../../components/ui/SortType"
import { createMenu,getErrorMessage } from "../../api/aroi"

type ModalPromotionsFormProps = {
    onClose: () => void
    restaurantId: string
    onSuccess?: () => void
}

function ModalPromotionsForm({
    onClose, restaurantId, onSuccess    
 }: ModalPromotionsFormProps) {
    const [preview, setPreview] = useState<string | null>(null)
    const [type, setType] = useState("ALL")
    const [name, setName] = useState("")
    const [desc, setDesc] = useState("")
    const [imageFile, setImageFile] = useState<File | null>(null)
    const [timer, setTimer] = useState("")
    const [price, setPrice] = useState("")
    const [discount, setDiscount] = useState("")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]

        if (file) {
            setPreview(URL.createObjectURL(file))
            setImageFile(file)
        }
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        try {
            setError("")
            setLoading(true)

            const formData = new FormData()
            formData.append("name", name)
            formData.append("desc", desc)
            formData.append("price", price)
            formData.append("type", type)
            formData.append("restaurant_id", restaurantId)

            if (discount) {
                formData.append("discount", discount)
            }

            if (timer) {
                formData.append("timer", timer)
            }

            if (imageFile) {
                formData.append("image", imageFile)
            }

            await createMenu(formData)

            onSuccess?.()
            onClose()
        } catch (err) {
            setError(getErrorMessage(err))
        } finally {
            setLoading(false)
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
                    <p className="text-sm  sm:text-lg md:text-xl font-extrabold text-yellow-500">Create Menu</p>
                    <hr className="flex-1 border-t-px border-white " />
                </div>
                <form onSubmit={handleSubmit} encType="multipart/form-data" className="flex flex-col gap-2">
                    <div className="flex flex-row gap-5">
                        <label htmlFor="restType" className="text-white">Type</label>
                        <SortType 
                            options={['ALL','SUSHI','DONBURI','RAMEN','SNACK','DRINK']}
                            value={type}
                            onChange={setType}
                        />
                    </div>

                    <div className="flex flex-col md:flex-row justify-between gap-2">
                        <div className="flex flex-col gap-[clamp(2px,2.5vw,4px)] w-full md:flex-2">
                            <label htmlFor="menuName" className="text-white">Menu Name</label>
                            <input type="text" id="menuName"
                            className="border border-(--color-brand-secondary) rounded-md
                            p-[clamp(10px,2.5vw,20px)] text-sm md:4xl h-10 md:h-12 outline-none focus:outline-none"
                            required placeholder="Menu Name"
                            value={name}
                            onChange={(e)=> setName(e.target.value)} />
                        </div>

                        <div className="flex flex-col gap-[clamp(2px,2.5vw,4px)] w-full md:flex-1">
                            <label htmlFor="time" className="font-medium text-white">Promotion Time (Optional)</label>

                            <div className="flex flex-row items-center justify-between
                            border border-(--color-brand-secondary) rounded-md
                            px-3 py-2 h-10 md:h-12">

                                <div className="flex flex-col items-start">
                                    <span className="text-[10px] text-(--color-brand-secondary)">Start</span>
                                    <input
                                        type="time"
                                        id="time"
                                        className="outline-none focus:outline-none text-sm"
                                        value={timer}
                                        onChange={(e)=>setTimer(e.target.value)}
                                    />
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[clamp(2px,2.5vw,4px)] w-full">
                            <label htmlFor="price" className="text-white">Price</label>
                            <input type="number" id="price" 
                            className="border border-(--color-brand-secondary) rounded-md
                            p-[clamp(10px,2.5vw,20px)] text-sm md:4xl h-10 md:h-12 outline-none focus:outline-none"
                            required placeholder="Price (number only)"
                            value={price}
                            onChange={(e)=>setPrice(e.target.value)} />
                    </div>
                    <div className="flex flex-col gap-[clamp(2px,2.5vw,4px)] w-full">
                            <label htmlFor="discount" className="text-white">Discount Price (Optional)</label>
                            <input type="number" id="discount"
                            className="border border-(--color-brand-secondary) rounded-md
                            p-[clamp(10px,2.5vw,20px)] text-sm md:4xl h-10 md:h-12 outline-none focus:outline-none"
                            placeholder="Discounted Price (number only)"
                            value={discount}
                            onChange={(e)=>setDiscount(e.target.value)} />
                    </div>
                    <div className="flex flex-col gap-[clamp(2px,2.5vw,4px)] w-full">
                            <label htmlFor="description" className="text-white">Description</label>
                            <input type="text" id="description"
                            className="border border-(--color-brand-secondary) rounded-md
                            p-[clamp(10px,2.5vw,20px)] text-sm md:4xl h-10 md:h-12 outline-none focus:outline-none"
                            required placeholder="Description"
                            value={desc}
                            onChange={(e)=> setDesc(e.target.value)} />
                    </div>

                    <div>
                        <label className="relative flex flex-col items-center justify-center w-full mt-6 p-5 rounded-md border-2 border-dashed border-(--color-brand-secondary)">
                            {preview ? (
                                <img src={preview} alt="Preview" className='box-border h-60' />
                            ) : (
                                <span className='text-(--color-brand-secondary) text-lg md:text-xl h-40 md:h-60 flex justify-center items-center'>Click to add image</span>
                            )}

                            <div className=''>
                                <input 
                                    type="file"
                                    name="image"
                                    className='hidden cursor-pointer'
                                    accept='image/*'
                                    onChange={handleFileChange}
                                />
                            </div>
                        </label>
                        {preview && (
                            <button type="button" className='border border-(--color-brand-primary)
                            px-4 py-1 rounded-full mt-5 text-(--color-brand-primary)
                            font-bold cursor-pointer hover:text-(--color-text-primary)
                            duration-300 bg-(' 
                            onClick={() => {
                                setPreview(null)
                                setImageFile(null)
                            }}>Remove Image</button>
                        )}

                        {error && (
                            <p className="mt-4 text-(--color-brand-primary) font-bold">{error}</p>
                        )}

                        <div className='flex flex-row mt-5 md:mt-7 mb-5 md:mb-7 gap-5 float-end'>
                            <button className="border border-(--color-brand-primary) text-(--color-brand-primary) 
                            text-sm md:text-lg px-[clamp(9px,2.5vw,18px)] py-[clamp(3px,2.5vw,6px)] rounded-full 
                            bg-(--color-brand-primary)/20 hover:text-(--color-text-primary) hover:bg-(--color-brand-primary)
                            duration-300 cursor-pointer" 
                            onClick={onClose}
                            type="button">Cencel</button>

                            <button className="border border-(--color-state-success) text-(--color-state-success)
                            text-sm md:text-lg px-[clamp(9px,2.5vw,18px)] py-[clamp(3px,2.5vw,6px)] rounded-full 
                            bg-(--color-state-success)/20 hover:text-(--color-text-primary) hover:bg-(--color-state-success)
                            duration-300 cursor-pointer" disabled={loading} type="submit">Create</button>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    )
}
export default ModalPromotionsForm
