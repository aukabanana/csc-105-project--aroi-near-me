import UpdateBtn from "../ui/UpdateBtn";
import DeleteBtn from "../ui/DeleteBtn";

export type RestCardProps = {
    image: string;
    restName: string;
    desc: string;
    admin?: boolean;
}

export default function RestaurantCard ({image,restName,desc,admin}:RestCardProps) {
    return (

      <div className="aspect-auto relative w-full min-h-50 h-auto bg-(--color-bg-surface) [box-shadow:0_0_1px_0_var(--color-text-primary)] rounded-[10px] flex flex-col cursor-pointer
        hover:[box-shadow:0_6px_24px_-8px_var(--color-brand-primary)] duration-300
        md:rounded-2xl lg:rounded-[20px] xl:rounded-3xl
        md:min-h-62.5 lg:min-h-125">

        <div className="relative rounded-[10px] h-[70%] md:rounded-2xl lg:rounded-[20px] xl:rounded-3xl">
            <img src={image} alt="" className="rounded-t-[10px] w-full h-full object-cover md:rounded-2xl lg:rounded-[20px] xl:rounded-3xl" />
            <div className="absolute inset-0 pointer-events-none rounded-t-[10px] [box-shadow:inset_0_-52px_24px_-24px_var(--color-bg-surface)]"></div>
        </div>

        <div className="h-full flex flex-col gap-2 justify-between p-1.5 text-[7px] font-light text-(--color-brand-secondary)
        md:gap-3 lg:gap-4 xl:gap-5 md:p-3 md:text-[10px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px]">
            <div className="flex flex-col gap-1.5 min-h-15 md:min-h-32.5 lg:min-h-40">
                <div>
                    <h1 className="text-(--color-text-primary) font-bold text-[9px]
                    md:text-[12px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px]"><b>{restName}</b></h1>
                </div>
                <div>
                    <p>{desc}</p>
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