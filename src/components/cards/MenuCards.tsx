import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

import UpdateBtn from "../ui/UpdateBtn";
import DeleteBtn from "../ui/DeleteBtn";

export type MenuCardProps = {
    image: string;
    name: string;
    restName: string;
    desc: string;
    price?: number;
    originalPrice?: number;
    discount?: number;
    type: string;
    timer?: string;
    status: boolean;
    admin?: boolean;
}

export default function MenuCard ({image,name,restName,desc,price,originalPrice,discount,type,timer,status,admin}:MenuCardProps) {
    return (

      <div className="aspect-auto relative w-full min-h-50 h-auto bg-(--color-bg-surface) [box-shadow:0_0_1px_0_var(--color-text-primary)] rounded-[10px] flex flex-col cursor-pointer
        hover:[box-shadow:0_6px_24px_-8px_var(--color-brand-primary)] duration-300
        md:rounded-2xl lg:rounded-[20px] xl:rounded-3xl
        md:min-h-62.5 lg:min-h-125">

        {!status && <div className="absolute z-2 w-full h-full flex justify-center items-center bg-[rgba(var(--rgb-bg-default)/0.75)] rounded-[10px] text-(--color-text-primary) font-bold text-[9px]
        md:text-[12px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px]
        md:rounded-2xl lg:rounded-[20px] xl:rounded-2xl
        ">Out of stock</div>}

        <div className="absolute w-full z-1 p-1.5 text-[8px] font-bold flex flex-row justify-between items-center
        md:p-3 md:text-[10px] lg:text-[14px] xl:text-[18px] 2xl:text-[20px]">
            <div>
                {timer && <div className="flex flex-row justify-center items-center gap-1 px-1 py-px bg-(--color-brand-primary) rounded-full">
                    <FontAwesomeIcon icon={faClock}/>    
                    {timer}
                </div>}
            </div>
            {type && <div className="px-2 py-px bg-[rgba(var(--rgb-bg-default)/0.5)] rounded-full float-end">{type}</div>}
        </div>

        <div className="relative rounded-[10px] h-[70%] md:rounded-2xl lg:rounded-[20px] xl:rounded-3xl">
            <img src={image} alt="" className="rounded-t-[10px] w-full h-full object-cover md:rounded-2xl lg:rounded-[20px] xl:rounded-3xl" />
            <div className="absolute inset-0 pointer-events-none rounded-t-[10px] [box-shadow:inset_0_-52px_24px_-24px_var(--color-bg-surface)]"></div>
        </div>

        <div className="h-full flex flex-col gap-2 justify-between p-1.5 text-[7px] font-light text-(--color-brand-secondary)
        md:gap-3 lg:gap-4 xl:gap-5 md:p-3 md:text-[10px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px]">
            <div className="flex flex-col gap-1.5 min-h-15 md:min-h-32.5 lg:min-h-40">
                <div>
                    <h1 className="text-(--color-text-primary) font-bold text-[9px]
                    md:text-[12px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px]"><b>{name}</b></h1>
                    <p>{restName}</p>
                </div>
                <div>
                    <p className="line-clamp-3">{desc}</p>
                </div>
            </div>

            <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row justify-start items-center gap-1 lg:gap-3">
                    {price && <p className="text-[8px] font-bold text-(--color-brand-primary)
                    md:text-[10px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px]">฿{price}</p>}
                    {originalPrice > 0 && <p className="text-[8px] font-bold text-(--color-brand-scondary) line-through
                    md:text-[8px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px]">฿{originalPrice}</p>}
                </div>
                <div className="px-1 bg-[rgba(var(--rgb-brand-primary)/0.15)] rounded-full font-bold text-[8px] text-(--color-brand-primary)
                md:text-[10px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px]">
                    {discount > 0 && <p>-{discount}%</p>}
                </div>
            </div>

            {admin &&
                <div className="flex flex-row justify-end items-center">
                    <div className="flex flex-row justify-start items-center gap-1 lg:gap-3">
                        <UpdateBtn />
                        <DeleteBtn />
                    </div>
                </div>
            }

        </div>

      </div>

  );

}