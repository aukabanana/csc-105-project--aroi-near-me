import { useNavigate } from "react-router-dom"
import cover from '../../assets/images/cover.png'
import Logo from '../../components/layouts/Logo'

function LandingPage() {
    const navigate = useNavigate()

    const handleAdmin = () => {
        navigate('/LoginPage')
    }
    return(
        <div className="w-full min-h-screen flex flex-col justify-center items-center 
        bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${cover})`}}>
            <div className="absolute inset-0 bg-black/60"></div>
            <div className="relative w-[80%] h-full flex flex-col justify-center items-center gap-4.5">
                <div className='text-(--color-text-primary) text-xl'><Logo /></div>
                <div className="w-full h-full flex flex-row justify-center items-center gap-7.5">
                    <button className="text-xs sm:text-lg md:text-lg lg:text-2xl hover:bg-red-400/25 w-16 h-8 sm:w-24 sm:h-12 md:w-28 lg:w-32 md:h-12 lg:h-14 lg:rounded-4xl
                    rounded-3xl sm:rounded-3xl md:rounded-3xl border border-[#C9372F] hover:text-[#C9372F]
                    bg-[#C9372F] text-white cursor-pointer transform-transition duration-300" onClick={handleAdmin}>Admin</button>
                    <button className="text-xs sm:text-lg md:text-lg lg:text-2xl hover:bg-yellow-400/25 w-16 h-8 sm:w-24 sm:h-12 md:w-28 lg:w-32 md:h-12 lg:h-14 lg:rounded-4xl
                    rounded-3xl sm:rounded-3xl md:rounded-3xl border border-[#B79768] hover:text-[#B79768]
                    bg-[#B79768] text-white cursor-pointer transform-transition duration-300" onClick={()=> navigate('/MainPage')}>User</button>
                </div>
            </div>
        </div>
    )
}
export default LandingPage