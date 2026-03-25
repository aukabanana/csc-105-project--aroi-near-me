import NavBar from '../../components/layouts/NavBar'
import Footer from '../../components/layouts/Footer'

export default function MainPage() {
  return (
    <div className="bg-black text-white min-h-screen">

      {/* Navbar */}
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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div className='flex flex-col'>
                <div className="h-60 bg-gray-700"></div>
                <div className='h-40 bg-gray-900 p-3 flex flex-col gap-3'>
                    <div className='gap-2 flex flex-col'>
                        <h4 className='text-extrabold text-xl text-white'>Salmon Sushi set</h4>
                        <p className='text-gray-400'>Happy Birthday, Enjoy your meal!</p>
                    </div>
                    <div className='w-full flex gap-3 justify-end'>
                        <button className='border border-(--color-brand-primary) text-(--color-brand-primary) px-4 py-2 rounded-full'>delete</button>
                        <button className='border border-(--color-brand-secondary) text-(--color-brand-secondary) px-4 py-2 rounded-full'>delete</button>
                    </div>
                </div>
            </div>

            <div className='flex flex-col'>
                <div className="h-60 bg-gray-700"></div>
                <div className='h-40 bg-gray-900 p-3 flex flex-col gap-3'>
                    <div className='gap-2 flex flex-col'>
                        <h4 className='text-extrabold text-xl text-white'>Salmon Sushi set</h4>
                        <p className='text-gray-400'>Happy Birthday, Enjoy your meal!</p>
                    </div>
                    <div className='w-full flex gap-3 justify-end'>
                        <button className='border border-(--color-brand-primary) text-(--color-brand-primary) px-4 py-2 rounded-full'>delete</button>
                        <button className='border border-(--color-brand-secondary) text-(--color-brand-secondary) px-4 py-2 rounded-full'>delete</button>
                    </div>
                </div>
            </div>

            <div className='flex flex-col'>
                <div className="h-60 bg-gray-700"></div>
                <div className='h-40 bg-gray-900 p-3 flex flex-col gap-3'>
                    <div className='gap-2 flex flex-col'>
                        <h4 className='text-extrabold text-xl text-white'>Salmon Sushi set</h4>
                        <p className='text-gray-400'>Happy Birthday, Enjoy your meal!</p>
                    </div>
                    <div className='w-full flex gap-3 justify-end'>
                        <button className='border border-(--color-brand-primary) text-(--color-brand-primary) px-4 py-2 rounded-full'>delete</button>
                        <button className='border border-(--color-brand-secondary) text-(--color-brand-secondary) px-4 py-2 rounded-full'>delete</button>
                    </div>
                </div>
            </div>

            <div className='flex flex-col'>
                <div className="h-60 bg-gray-700"></div>
                <div className='h-40 bg-gray-900 p-3 flex flex-col gap-3'>
                    <div className='gap-2 flex flex-col'>
                        <h4 className='text-extrabold text-xl text-white'>Salmon Sushi set</h4>
                        <p className='text-gray-400'>Happy Birthday, Enjoy your meal!</p>
                    </div>
                    <div className='w-full flex gap-3 justify-end'>
                        <button className='border border-(--color-brand-primary) text-(--color-brand-primary) px-4 py-2 rounded-full'>delete</button>
                        <button className='border border-(--color-brand-secondary) text-(--color-brand-secondary) px-4 py-2 rounded-full'>delete</button>
                    </div>
                </div>
            </div>
        </div>
      </section>

      <section className="mt-12 px-6">

        <h2 className="text-lg font-semibold mb-4">
          Restaurant
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div className='flex flex-col'>
                <div className="h-60 bg-gray-700"></div>
                <div className='h-40 bg-gray-900 p-3 flex flex-col gap-3'>
                    <div className='gap-2 flex flex-col'>
                        <h4 className='text-extrabold text-xl text-white'>Salmon Sushi set</h4>
                        <p className='text-gray-400'>Happy Birthday, Enjoy your meal!</p>
                    </div>
                    <div className='w-full flex gap-3 justify-end'>
                        <button className='border border-(--color-brand-primary) text-(--color-brand-primary) px-4 py-2 rounded-full'>delete</button>
                        <button className='border border-(--color-brand-secondary) text-(--color-brand-secondary) px-4 py-2 rounded-full'>delete</button>
                    </div>
                </div>
            </div>

            <div className='flex flex-col'>
                <div className="h-60 bg-gray-700"></div>
                <div className='h-40 bg-gray-900 p-3 flex flex-col gap-3'>
                    <div className='gap-2 flex flex-col'>
                        <h4 className='text-extrabold text-xl text-white'>Salmon Sushi set</h4>
                        <p className='text-gray-400'>Happy Birthday, Enjoy your meal!</p>
                    </div>
                    <div className='w-full flex gap-3 justify-end'>
                        <button className='border border-(--color-brand-primary) text-(--color-brand-primary) px-4 py-2 rounded-full'>delete</button>
                        <button className='border border-(--color-brand-secondary) text-(--color-brand-secondary) px-4 py-2 rounded-full'>delete</button>
                    </div>
                </div>
            </div>

            <div className='flex flex-col'>
                <div className="h-60 bg-gray-700"></div>
                <div className='h-40 bg-gray-900 p-3 flex flex-col gap-3'>
                    <div className='gap-2 flex flex-col'>
                        <h4 className='text-extrabold text-xl text-white'>Salmon Sushi set</h4>
                        <p className='text-gray-400'>Happy Birthday, Enjoy your meal!</p>
                    </div>
                    <div className='w-full flex gap-3 justify-end'>
                        <button className='border border-(--color-brand-primary) text-(--color-brand-primary) px-4 py-2 rounded-full'>delete</button>
                        <button className='border border-(--color-brand-secondary) text-(--color-brand-secondary) px-4 py-2 rounded-full'>delete</button>
                    </div>
                </div>
            </div>

            <div className='flex flex-col'>
                <div className="h-60 bg-gray-700"></div>
                <div className='h-40 bg-gray-900 p-3 flex flex-col gap-3'>
                    <div className='gap-2 flex flex-col'>
                        <h4 className='text-extrabold text-xl text-white'>Salmon Sushi set</h4>
                        <p className='text-gray-400'>Happy Birthday, Enjoy your meal!</p>
                    </div>
                    <div className='w-full flex gap-3 justify-end'>
                        <button className='border border-(--color-brand-primary) text-(--color-brand-primary) px-4 py-2 rounded-full'>delete</button>
                        <button className='border border-(--color-brand-secondary) text-(--color-brand-secondary) px-4 py-2 rounded-full'>delete</button>
                    </div>
                </div>
            </div>
        </div>
      </section>
      
        <Footer/>

    </div>
  )
}