import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons"
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"
import cover2 from '../../assets/images/bcover.png'


const adminSchema = z.object({
    username: z.string().min(1),
    pass: z.string()
}).refine((data) => data.username == 'AroiNearMe' && data.pass == 'aroidAdmin',{
    message: "Invalid username or password",
    path: ['pass'],
})

type UsernameData = z.infer<typeof adminSchema>

function LoginPage() {
    const navigate = useNavigate()
    
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<UsernameData>({
        resolver: zodResolver(adminSchema)
    })

    const submitForm = (admin: UsernameData) => {
        console.log("Logged in successful", admin)
        navigate('/MainPage')
    }

    return(
        <div className="w-full min-h-screen relative overflow-hidden">
            <img 
                src={cover2}
                alt="background"
                className="absolute inset-0 
                w-full h-full
                object-cover
                object-[35%_50%]"
                md:object-center
            />

            <div className="relative z-10 flex flex-col justify-center items-center min-h-screen">

                <div className="w-[80%] max-w-90 md:w-[40%] md:max-w-130 flex flex-col justify-center gap-2">
                    <div className="max-w-90 flex justify-start items-center gap-1.5 text-[12px] text-(--color-text-primary) [font-family:var(--font-alt)] 
                    hover:hover:text-(--color-brand-secondary) transition duration-300">
                        <FontAwesomeIcon icon = {faChevronLeft} size="xl" />
                        <Link to='/Landing' className="text-[16px] font-bold md:text-[20px]">Go back</Link>
                    </div>
                    <div className="flex flex-col justify-center items-center bg-[rgba(var(--rgb-bg-surface)/0.9)] rounded-2xl md:rounded-3xl px-6 md:px-10 py-6 md:py-10 gap-3">
                        <h2 className="pb-4 md:pb-8 text-2xl md:text-5xl text-(--color-text-primary)">
                            Login
                        </h2>

                        <form onSubmit={handleSubmit(submitForm)} className="w-full flex flex-col gap-5">


                            <div className="w-full flex gap-2 border border-(--color-brand-secondary) rounded-2xl px-3 items-center">
                                <FontAwesomeIcon icon={faUser} className="text-(--color-brand-secondary) text-lg" />
                                <input
                                    type="text"
                                    placeholder="Enter username"
                                    {...register('username')}
                                    className="w-full py-2 outline-none bg-transparent text-(--color-brand-secondary)"
                                />
                            </div>
                            { errors.username && <span className="text-(--color-brand-primary)">{errors.username.message}</span>}


                            <div className="w-full flex gap-2 border border-(--color-brand-secondary) rounded-2xl px-3 items-center">
                                <FontAwesomeIcon icon={faLock} className="text-(--color-brand-secondary) text-lg" />
                                <input 
                                    type="password"
                                    placeholder="Enter password"
                                    {...register('pass')}
                                    className="w-full py-2 outline-none bg-transparent text-(--color-brand-secondary)"
                                />
                            </div>
                            { errors.pass && <span className="text-(--color-brand-primary)">{errors.pass.message}</span>}


                            <div className="pt-5 flex justify-center">
                                <button 
                                    type="submit" 
                                    className="
                                        border border-(--color-brand-secondary) 
                                        bg-(--color-brand-secondary)/15 
                                        text-(--color-brand-secondary) 
                                        px-6 md:px-8 py-1
                                        text-sm md:text-xl 
                                        rounded-2xl md:rounded-4xl
                                        hover:bg-(--color-brand-secondary) 
                                        hover:text-(--color-text-primary) 
                                        transition duration-300 
                                        cursor-pointer
                                    ">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LoginPage