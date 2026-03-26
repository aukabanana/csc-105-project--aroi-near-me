import NavBar from '../../components/layouts/NavBar';
import MenuCard, { type MenuCardProps } from '../../components/cards/MenuCards';
import PromotionCard, {type ProCardProps}   from '../../components/cards/PromotionCard';
import RestaurantCard, { type RestCardProps} from '../../components/cards/RestaurantCard';

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
    <div className="bg-(--color-bg-default) text-(--color-text-primary) min-h-screen">

      <NavBar />

      <section className="flex flex-col items-center text-center mt-6 px-4">
        <div className="w-full max-w-5xl h-56 md:h-72 bg-gray-700 rounded-xl" />
        <h1 className="text-3xl md:text-5xl mt-6 font-serif">
          Aroi Near Me
        </h1>

        <p className="text-red-500 mt-2 tracking-widest">
          JAPANESE FOOD
        </p>

        <div className="mt-6 w-full max-w-xl">
          <input
            placeholder="Search the menu"
            className="w-full bg-transparent border border-gray-600 rounded-full px-5 py-3 outline-none"
          />
        </div>
        <div className="flex gap-3 mt-6 flex-wrap justify-center">
            <button className='border border-white px-5 py-1 rounded-2xl '>All</button>
            <button className='border border-white px-5 py-1 rounded-2xl '>Sushi</button>
            <button className='border border-white px-5 py-1 rounded-2xl '>Donbuti</button>
            <button className='border border-white px-5 py-1 rounded-2xl '>Ramen</button>
            <button className='border border-white px-5 py-1 rounded-2xl '>Snack</button>
            <button className='border border-white px-5 py-1 rounded-2xl '>Drink</button>
        </div>
      </section>

      <section className="mt-10 px-6">
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
          Menu
        </h2>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-3 lg:grid-cols-4 lg:gap-8">
            
            {menuCard.map((menu, i) => (
              <MenuCard key={i} {...menu} />
            ))}

        </div>
      </section>

      <section className="mt-12 px-6">

        <h2 className="text-lg font-semibold mb-4">
          Restaurant
        </h2>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-3 lg:grid-cols-4 lg:gap-8">
            
            {restCard.map((menu, i) => (
              <RestaurantCard key={i} {...menu} />
            ))}

        </div>
      </section>

      <div className="mt-16 border-t border-gray-800 py-6 text-center text-gray-400">
        Footer
      </div>

    </div>
  )
}