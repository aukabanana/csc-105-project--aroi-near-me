import { useNavigate } from "react-router-dom"
import cover from '../../assets/images/cover.png'

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
                <h1 className="text-(--color-text-primary) text-3xl [font-family:var(--font-accent)] md:text-6xl lg:text-8xl">Aroi Near Me</h1>
                <p className="text-(--color-text-primary) text-[12px] font-bold [font-family:var(--font-alt)] md:text-[22px] lg:text-[28px]">Click to enter the website</p>
                <div className="w-full h-full flex flex-row justify-center items-center gap-7.5">
                    <button className="text-xs md:text-lg lg:text-2xl bg-[rgba(var(--rgb-brand-primary)/0.15)] w-16 h-8 md:w-28 lg:w-32 md:h-12 lg:h-14 lg:rounded-4xl
                    rounded-3xl md:rounded-3xl border border-(--color-brand-primary) text-(--color-brand-primary)
                    hover:bg-(--color-brand-primary) hover:text-(--color-text-primary) cursor-pointer transform-transition duration-300" onClick={handleAdmin}>Admin</button>
                    <button className="text-xs md:text-lg lg:text-2xl bg-[rgba(var(--rgb-brand-secondary)/0.15)] w-16 h-8 md:w-28 lg:w-32 md:h-12 lg:h-14 lg:rounded-4xl
                    rounded-3xl md:rounded-3xl border border-(--color-brand-secondary) text-(--color-brand-secondary)
                    hover:bg-(--color-brand-secondary) hover:text-(--color-text-primary) cursor-pointer transform-transition duration-300" onClick={()=> navigate('/MainPage')}>User</button>
                </div>
            </div>
        </div>
    )
}
export default LandingPage