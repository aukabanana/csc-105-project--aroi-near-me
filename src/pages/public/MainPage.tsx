import NavBar from '../../components/layouts/NavBar'
import Logo from '../../components/layouts/Logo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import PillSort from '../../components/ui/PillSort'
import mainCover from '../../assets/images/Main.png'
 
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

            <div className="mt-16 border-t border-gray-800 py-6 text-center text-gray-400">
                Footer
            </div>
        </div>
    )
}