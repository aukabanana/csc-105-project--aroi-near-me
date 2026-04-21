import MenuHeader from '../../components/sections/MenuHeader'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import MenuCard from '../../components/cards/MenuCards';
import { useParams } from 'react-router-dom';
import { restaurantData } from './RestaurantType'
import ModalPromotionsForm from '../../features/admin/ModalPromotionsForm'
import { useState } from 'react';

function RestaurantPage() {
    const [open, setOpen] = useState(false)

    const { id } = useParams()
    const restDetail = restaurantData.find(r => r.id === id)
    if (!restDetail) { //wait for use Backend (code status)
        return <div className="text-white">Restaurant not found</div>
    }

    return (
        <div className='relative px-[clamp(20px,2.5vw,40px)] py-10 text-white min-h-screen bg-black'>
            <div className='flex flex-col gap-5'>
                <div className="max-w-90 flex justify-start items-center text-lg md:text-2xl text-(--color-text-primary) [font-family:var(--font-alt)] 
                hover:hover:text-(--color-brand-secondary) transition duration-300">
                    <FontAwesomeIcon icon = {faChevronLeft} />
                    <Link to='/MainPage'>Go back</Link>
                </div>
                <div id='HeaderOfRes' className='flex flex-col gap-3 mb-5'>
                    <div className='flex flex-row items-center gap-3'>
                        <h1 className='text-3xl md:text-5xl font-extrabold'>{restDetail.name}</h1>
                        <hr className="flex-1 h-0.5 bg-gray-600 border-0 mx-2 md:mx-4" />

                        <button className="rounded-3xl text-(--color-brand-secondary) hover:text-white font-bold bg-(--color-brand-secondary)/20 border-2 hover:bg-(--color-brand-secondary)
                    border-(--color-brand-secondary) px-[clamp(3px,2.5vw,8px)] py-1 transition-colors duration-300 cursor-pointer text-xs md:text-xl"
                        onClick={()=> setOpen(true)}>+ Menu</button>
                        {open && <ModalPromotionsForm onClose={()=> setOpen(false)}/>}

                    </div>
            
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                        <div className='flex flex-col min-w-0 gap-3'>
                            <h1 className='text-lg text-yellow-400 border-transparent 
                            px-[clamp(4px,2.5vw,8px)] py-[clamp(2px,2.5vw,3px)] 
                            w-fit rounded-xl bg-yellow-400/20'>Location</h1>
                            <p className='text-xs md:text-lg text-(--color-brand-secondary)'>{restDetail.address}</p>
                        </div>
                        <div className='flex justify-end'>
                            <img
                            src={restDetail.banner}
                            alt={restDetail.name}
                            className='max-w-full md:w-100 lg:w-150 h-auto object-contain rounded-2xl'
                            />
                        </div>
                    </div>
                </div>
            </div>
            <MenuHeader />
            <div className='grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-6 lg:grid-cols-4 lg:gap-8'>
                {restDetail.menu.map((item, index) => (
                <MenuCard key={index} {...item}
                />
                ))}
            </div>
        </div>
    )
}
export default RestaurantPage

