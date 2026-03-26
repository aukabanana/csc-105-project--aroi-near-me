// export default function PillSort() {
//   return (
//     <div className="w-full overflow-x-auto">
//       <div className="flex gap-3 mt-[clamp(2rem,2.5vw,10rem)] mb-6 md:mb-10 text-xs md:text-xl 
//                       flex-nowrap md:flex-wrap
//                       w-max md:w-full 
//                       px-4 md:px-0 justify-center items-center">
//         <button className=' border-[0.5px] border-(--color-brand-secondary) px-[clamp(10px,2.5vw,20px)] py-[clamp(3px,2.5vw,6px)] 
//         rounded-full text-(--color-brand-secondary) hover:bg-(--color-brand-primary) hover:text-(--color-text-primary) hover:border-none duration-400 cursor-pointer'>🍱  All</button>
//         <button className='border-[0.5px] border-(--color-brand-secondary) px-[clamp(10px,2.5vw,20px)] py-[clamp(3px,2.5vw,6px)] 
//         rounded-full text-(--color-brand-secondary) hover:bg-(--color-brand-primary) hover:text-(--color-text-primary) hover:border-none duration-400 cursor-pointer'>🍣 Sushi</button>
//         <button className='border-[0.5px] border-(--color-brand-secondary) px-[clamp(10px,2.5vw,20px)] py-[clamp(3px,2.5vw,6px)] 
//         rounded-full text-(--color-brand-secondary) hover:bg-(--color-brand-primary) hover:text-(--color-text-primary) hover:border-none duration-400 cursor-pointer'>🍛 Donburi</button>
//         <button className='border-[0.5px] border-(--color-brand-secondary) px-[clamp(10px,2.5vw,20px)] py-[clamp(3px,2.5vw,6px)] 
//         rounded-full text-(--color-brand-secondary) hover:bg-(--color-brand-primary) hover:text-(--color-text-primary) hover:border-none duration-400 cursor-pointer'>🍜 Ramen</button>
//         <button className='border-[0.5px] border-(--color-brand-secondary) px-[clamp(10px,2.5vw,20px)] py-[clamp(3px,2.5vw,6px)] 
//         rounded-full text-(--color-brand-secondary) hover:bg-(--color-brand-primary) hover:text-(--color-text-primary) hover:border-none duration-400 cursor-pointer'>🥠 Snack</button>
//         <button className='border-[0.5px] border-(--color-brand-secondary) px-[clamp(10px,2.5vw,20px)] py-[clamp(3px,2.5vw,6px)] 
//         rounded-full text-(--color-brand-secondary) hover:bg-(--color-brand-primary) hover:text-(--color-text-primary) hover:border-none duration-400 cursor-pointer'>🍵 Drink</button>
//       </div>
//     </div>
//   );
// }
import { useState } from "react";

export default function PillSort() {
  const [all, setAll] = useState(false);
  const [sushi, setSushi] = useState(false);
  const [don, setDon] = useState(false);
  const [ramen, setRamen] = useState(false);
  const [snack, setSnack] = useState(false);
  const [drink, setDrink] = useState(false);

  const active = "bg-(--color-brand-primary) text-(--color-text-primary) border-transparent cursor-pointer transition duration-400";
  const inactive = "border-(--color-brand-secondary) text-(--color-brand-secondary) hover:bg-(--color-brand-primary) hover:text-(--color-text-primary) hover:border-transparent cursor-pointer transition duration-400";

  return (
    <div className="w-full overflow-x-auto">
      <div className="flex gap-3 mt-[clamp(2rem,2.5vw,10rem)] mb-6 md:mb-10 text-xs md:text-xl flex-nowrap md:flex-wrap w-max md:w-full px-4 md:px-0 justify-center items-center">

        <button
          onClick={() => setAll(!all)}
          className={`px-4 py-2 rounded-full border ${all ? active : inactive}`}
        >
          🍱 All
        </button>

        <button
          onClick={() => setSushi(!sushi)}
          className={`px-4 py-2 rounded-full border ${sushi ? active : inactive}`}
        >
          🍣 Sushi
        </button>

        <button
          onClick={() => setDon(!don)}
          className={`px-4 py-2 rounded-full border ${don ? active : inactive}`}
        >
          🍛 Donburi
        </button>

        <button
          onClick={() => setRamen(!ramen)}
          className={`px-4 py-2 rounded-full border ${ramen ? active : inactive}`}
        >
          🍜 Ramen
        </button>

        <button
          onClick={() => setSnack(!snack)}
          className={`px-4 py-2 rounded-full border ${snack ? active : inactive}`}
        >
          🥠 Snack
        </button>

        <button
          onClick={() => setDrink(!drink)}
          className={`px-4 py-2 rounded-full border ${drink ? active : inactive}`}
        >
          🍵 Drink
        </button>

      </div>
    </div>
  );
}