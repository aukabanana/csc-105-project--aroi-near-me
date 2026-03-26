import NavBar from '../../components/layouts/NavBar'
import Footer from '../../components/layouts/Footer'
import Logo from '../../components/layouts/Logo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import PillSort from '../../components/ui/PillSort'
import mainCover from '../../assets/images/Main.png'

import MenuCard, { type MenuCardProps } from '../../components/cards/MenuCards';
import PromotionCard, {type ProCardProps}   from '../../components/cards/PromotionCard';
import RestaurantCard, { type RestCardProps} from '../../components/cards/RestaurantCard';
//Mock data section
import sushi from '../../assets/img/mockCardImage/sushi.jpg';
import dishSushi from '../../assets/img/mockCardImage/dish-sushi.jpg';
import restJapan from '../../assets/img/background/restJapan.jpg';

const proMenuCard: ProCardProps[] = [
  {
    image: sushi,
    name: "Tonkotsu Ramen",
    restName: "Sakura Kitchen",
    desc: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
    price: 139,
    originalPrice: 29,
    discount: 78,
    type: "Ramen",
    timer: "11:42:12",
    status: true,
    admin: true
  },
  {
    image: dishSushi,
    name: "Takoyaki",
    restName: "Sakura",
    desc: "lorem lorem lorem lorem lorem lorem lorem",
    price: 220,
    originalPrice:0,
    discount: 0,
    type: "Sushi",
    timer: "",
    status: true,
    admin: true
  },
  {
    image: sushi,
    name: "Salmon Nigiri",
    restName: "Sakura Japanese Kitchen",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's . Lorem Ipsum has been the industry's. Lorem Ipsum has been the industry's",
    price: 129,
    originalPrice: 180,
    discount: 26,
    type: "Sushi",
    timer: "12:11:04",
    status: true,
    admin: false
  },
  {
    image: dishSushi,
    name: "Nigiri",
    restName: "Sakura Kitchen",
    desc: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
    price: 220,
    originalPrice: 0,
    discount: 0,
    type: "Sushi",
    timer: "",
    status: false,
    admin: false
  },
]

const menuCard: MenuCardProps[] = [
  {
    image: sushi,
    name: "Salmon Nigiri",
    restName: "Sakura Japanese Kitchen",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
    price: 129,
    originalPrice: 0,
    discount: 0,
    type: "Sushi",
    timer: "",
    status: true,
    admin: true
  },
  {
    image: dishSushi,
    name: "Nigiri",
    restName: "Sakura Kitchen",
    desc: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
    price: 220,
    originalPrice: 0,
    discount: 0,
    type: "Sushi",
    timer: "",
    status: true,
    admin: true
  },
  {
    image: sushi,
    name: "Tonkotsu Ramen",
    restName: "Sakura Kitchen",
    desc: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
    price: 139,
    originalPrice: 0,
    discount: 0,
    type: "Ramen",
    timer: "",
    status: true,
    admin: false
  },
  {
    image: dishSushi,
    name: "Takoyaki",
    restName: "Sakura",
    desc: "lorem lorem lorem lorem lorem lorem lorem",
    price: 220,
    originalPrice:0,
    discount: 0,
    type: "Sushi",
    timer: "",
    status: false,
    admin: false
  },
]

const restCard: RestCardProps[] = [
  {
    image: restJapan,
    restName: "Japung Restau",
    desc: "lorem lorem lorem lorem lorem lorem lorem lorem ",
    admin: true,
  },
  {
    image: restJapan,
    restName: "Japung Restau",
    desc: "lorem lorem lorem lorem lorem lorem lorem lorem ",
    admin: true,
  },
  {
    image: restJapan,
    restName: "Japung Restau",
    desc: "lorem lorem lorem lorem lorem lorem lorem lorem ",
    admin: false,
  },
  {
    image: restJapan,
    restName: "Japung Restau",
    desc: "lorem lorem lorem lorem lorem lorem lorem lorem ",
    admin: false,
  },
]
 
export default function MainPage() {
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
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold">
                        Today's Promotion
                    </h2>
                    <div className="text-sm bg-gray-800 px-3 py-1 rounded-full">
                        Default
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-3 lg:grid-cols-4 lg:gap-8">

                  {proMenuCard.map((menu, i) => (
                  <PromotionCard key={i} {...menu} />
                  ))}

                </div>
            </section>

            <section className="mt-12 px-6">

                <h2 className="text-lg font-semibold mb-4">
                    Restaurant
                </h2>

              <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-3 lg:grid-cols-4 lg:gap-8">

                {menuCard.map((menu, i) => (
                  <MenuCard key={i} {...menu} />
                ))}

              </div>
              
            </section>

            <Footer/>
        </div>      

  )
}