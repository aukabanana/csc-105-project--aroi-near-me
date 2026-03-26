import divider from '../../assets/images/divider1.png'
import end from '../../assets/images/end.png'
export default function Logo() {
    return(
        <div className='flex flex-row justify-center items-center gap-1'>
            <div className="flex flex-row gap-2 justify-center items-center font-['Tapestry']">
                <h1 className='text-3xl  md:text-6xl lg:text-8xl'>Aroi</h1>
                <img src={divider} alt="logo1" className='w-3 md:w-8 md:mx-1.5' />
                <h1 className='text-3xl md:text-6xl lg:text-8xl'>Near Me</h1>
            </div>
            <img src={end} alt="logo2" className='w-8 md:w-20'/>
        </div>
    )
} 