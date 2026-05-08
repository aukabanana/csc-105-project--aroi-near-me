import MenuHeader from '../../components/sections/MenuHeader'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import MenuCard from '../../components/cards/MenuCards';
import { useParams } from 'react-router-dom';
import ModalPromotionsForm from '../../features/admin/ModalPromotionsForm'
import { useEffect, useState } from 'react';
import { getMenus, getRestaurants } from '../../api/aroi';
import type { Menu, Restaurant } from '../../types/aroi';

function RestaurantPage() {
    const [open, setOpen] = useState(false)
    const [restaurant, setRestaurant] = useState<Restaurant | null>(null)
    const [menus, setMenus] = useState<Menu[]>([])
    const [errorMessage, setErrorMessage] = useState('')

    const { id } = useParams()

    useEffect(() => {
        async function fetchRestaurantPageData() {
            if (!id) {
                setErrorMessage('Restaurant not found')
                return
            }

            try {
                const [restaurantData, menuData] = await Promise.all([
                    getRestaurants(),
                    getMenus(),
                ])
                const currentRestaurant = restaurantData.find((item) => item.id === id) ?? null

                setRestaurant(currentRestaurant)
                setMenus(
                    menuData.filter(
                        (menu) => menu.restaurant_id === id
                    )
                )
            } catch (err) {
                setErrorMessage(
                    err instanceof Error ? err.message : 'Cannot fetch restaurant data'
                )
            }
        }

        fetchRestaurantPageData()
    }, [id])

    if (errorMessage || !restaurant) {
        return (
            <div className='relative px-[clamp(20px,2.5vw,40px)] py-10 text-white min-h-screen bg-black'>
                <div className="max-w-90 flex justify-start items-center text-lg md:text-2xl text-(--color-text-primary) [font-family:var(--font-alt)] 
                hover:hover:text-(--color-brand-secondary) transition duration-300">
                    <FontAwesomeIcon icon = {faChevronLeft} />
                    <Link to='/MainPage'>Go back</Link>
                </div>
                <p className='mt-8 text-red-400'>{errorMessage || 'Restaurant not found'}</p>
            </div>
        )
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
                        <h1 className='text-3xl md:text-5xl font-extrabold'>{restaurant.name}</h1>
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
                            <p className='text-xs md:text-lg text-(--color-brand-secondary)'>{restaurant.address}</p>
                        </div>
                        <div className='flex justify-end'>
                            <img
                            src={restaurant.banner}
                            alt={restaurant.name}
                            className='max-w-full md:w-100 lg:w-150 h-auto object-contain rounded-2xl'
                            />
                        </div>
                    </div>
                </div>
            </div>
            <MenuHeader />
            <div className='grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-6 lg:grid-cols-4 lg:gap-8'>
                {menus.length === 0 && (
                    <p className='col-span-full text-sm text-(--color-brand-secondary)'>
                        No menus found.
                    </p>
                )}

                {menus.map((item) => (
                <MenuCard
                    key={item.id}
                    image={item.image}
                    name={item.name}
                    restName={restaurant.name}
                    desc={item.desc}
                    price={item.price}
                    originalPrice={0}
                    discount={item.discount ?? 0}
                    type={item.type}
                    timer={item.timer ?? undefined}
                    status={item.status}
                    admin
                />
                ))}
            </div>
        </div>
    )
}
export default RestaurantPage
