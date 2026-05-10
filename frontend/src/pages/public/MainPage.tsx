import NavBar from '../../components/layouts/NavBar'
import Footer from '../../components/layouts/Footer'
import Logo from '../../components/layouts/Logo'

import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

import PillSort from '../../components/ui/PillSort'
import mainCover from '../../assets/images/Main.png'
import PromotionHeader from '../../components/sections/PromotionHeader'
import RestaurantHeader from '../../components/sections/Restaurant'
import RestaurantCard from '../../components/cards/RestaurantCard';

import MenuCard from '../../components/cards/MenuCards'
import { getRestaurants, getPromotionMenus } from '../../api/aroi'
import type { Restaurant, Menu } from '../../types/aroi'

//Mock data section

export default function MainPage() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])
  const [restaurantError, setRestaurantError] = useState('')
  const [promotionMenus, setPromotionMenus] = useState<Menu[]>([])
  const [promotionError, setPromotionError] = useState('')

  useEffect(() => {
    async function fetchRestaurants() {
      try {
        const data = await getRestaurants()
        setRestaurants(data.filter((restaurant) => restaurant.is_active))
      } catch (err) {
        setRestaurantError(
          err instanceof Error ? err.message : 'Cannot fetch restaurants'
        )
      }
    }

    fetchRestaurants()
  }, [])

  useEffect(() => {
    async function fetchPromotionMenus() {
        try {
            const data = await getPromotionMenus()
            setPromotionMenus(data)
        } catch (err) {
            setPromotionError(
                err instanceof Error ? err.message : 'Cannot fetch promotion menus'
            )
        }
    }

    fetchPromotionMenus()
  }, [])

  //LocalStorage
  // localStorage.setItem()
    return (
        <div className='px-[clamp(20px,2.5vw,40px)] py-10 text-white min-h-screen bg-black'>

            <NavBar />
            
            <section className="relative flex flex-col items-center text-center px-4
            bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${mainCover})`}}>

                {/* Overlay Background */}
                <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-black"
                style={{background: "linear-gradient(to bottom, rgba(0,0,0,0.15) 20%, rgba(0,0,0,0.9) 100%)"}}></div>

                <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-black"
                style={{background: "radial-gradient(ellipse at center, rgba(0,0,0,0.15) 20%, rgba(0,0,0,0.9) 100%)"}}></div>

                <div className='relative z-20 flex flex-col items-center w-full'>
                    <div className='flex flex-col justify-center'>
                        <div className='mt-30 md:mt-40 lg:80'><Logo /></div>
                        <p className="text-red-500 mt-2 tracking-widest text-sm md:text-lg font-['Tai_Heritage_Pro'] text-extrabold">
                            JAPANESE FOOD
                        </p>
                    </div>

                    <div className="flex flex-row gap-4 justify-center items-center 
                    mt-8 border-[0.5px] w-45 md:w-85 lg:115 border-(--color-brand-secondary) rounded-lg md:rounded-xl px-[clamp(12px,2.5vw,20px)] py-[clamp(3px,1.5vw,9px)] text-xs bg-(--color-bg-surface)
                    outline-none text-md md:text-xl">
                        <FontAwesomeIcon icon={faMagnifyingGlass} className='text-(--color-brand-secondary)'/>
                        <input
                            placeholder="Search the menu"
                            className="w-full
                            outline-none focus:outline-none
                            focus:border-transparent
                            transition duration-200
                            text-(--color-brand-secondary)
                            cursor-type"
                        />
                    </div>
                    <div className='w-full overflow-x-auto whitespace-nowrap no-scrollbar py-3'><PillSort /></div>
                </div>
            </section>

            <section className="mt-10 px-4 md:px-8">
                <div><PromotionHeader /></div>

                <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-3 lg:grid-cols-4 lg:gap-8">

                  {promotionError && (
                    <p className="col-span-full text-sm text-red-400">
                        {promotionError}
                    </p>
                )}

                {!promotionError && promotionMenus.length === 0 && (
                    <p className="col-span-full text-sm text-(--color-brand-secondary)">
                        No promotion menus found.
                    </p>
                )}

                {!promotionError && promotionMenus.map((item) => (
                    <MenuCard
                        key={item.id}
                        id={item.id}
                        restaurantId={item.restaurant_id}
                        image={item.image}
                        name={item.name}
                        restName=""
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
            </section>

            <section className="mt-12 px-6">

              <RestaurantHeader />

              <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-3 lg:grid-cols-4 lg:gap-8">

                {restaurantError && (
                  <p className="col-span-full text-sm text-red-400">
                    {restaurantError}
                  </p>
                )}

                {!restaurantError && restaurants.length === 0 && (
                  <p className="col-span-full text-sm text-(--color-brand-secondary)">
                    No restaurants found.
                  </p>
                )}

                {!restaurantError && restaurants.map((rest) => (
                  <RestaurantCard
                    key={rest.id}
                    id={rest.id}
                    image={rest.banner}
                    restName={rest.name}
                    desc={rest.address}
                    admin
                  />
                ))}

              </div>
              
            </section>
      
            <Footer/>
        </div>
  )
}
