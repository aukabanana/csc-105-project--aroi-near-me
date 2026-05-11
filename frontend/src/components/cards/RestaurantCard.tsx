import DeleteRest from "../ui/DeleteRest";
import { useNavigate } from "react-router-dom";
import ModalRestaurantForm from "../../features/admin/ModalRestaurantForm";

import { useState } from "react";
import ModalConfirm from "../../features/admin/ModalConfirm";
import UpdateRest from "../ui/UpdateRest"

import { isAdminUser } from "../../features/auth/auth";
import { deleteRestaurant,getErrorMessage} from "../../api/aroi";

export type RestCardProps = {
    id: string;
    image: string;
    restName: string;
    desc: string;
    admin?: boolean;
}

export default function RestaurantCard ({id,image,restName,desc,admin}:RestCardProps) {

    const API_URL = "http://localhost:3000"

    const imageUrl = image.startsWith("http") ? image : `${API_URL}${image}`

    const [openDel, setOpenDel] = useState(false)
    const [openRest, setOpenRest] = useState(false)
    const [deleting, setDeleting] = useState(false)
    const navigate = useNavigate()

    const handleDeleteRestaurant = async () => {
        try {
            setDeleting(true);

            await deleteRestaurant(id);

            setOpenDel(false);
            window.location.reload();
        } catch (err) {
            console.log(getErrorMessage(err));
        } finally {
            setDeleting(false);
        }
    };

    return (

      <div className="aspect-auto relative w-full min-h-50 h-auto bg-(--color-bg-surface) [box-shadow:0_0_1px_0_var(--color-text-primary)] rounded-[10px] flex flex-col cursor-pointer
        hover:[box-shadow:0_6px_24px_-8px_var(--color-brand-primary)] duration-300
        md:rounded-2xl lg:rounded-[20px] xl:rounded-3xl
        md:min-h-62.5 lg:min-h-125"
        onClick={()=> navigate(`/restaurant/${id}`)}>

        <div className="relative rounded-[10px] h-[70%] max-h-[300px] md:rounded-2xl lg:rounded-[20px] xl:rounded-3xl">
            <img src={imageUrl} alt={restName} className="rounded-t-[10px] w-full h-full object-cover md:rounded-2xl lg:rounded-[20px] xl:rounded-3xl" />
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

            {admin && isAdminUser() &&
                <div className="flex flex-row justify-end items-center">
                    <div className="flex flex-row justify-start items-center gap-1 lg:gap-3">

                        <UpdateRest 
                        onUpdateRest={(e) => {
                            setOpenRest(true)
                            e.stopPropagation()}}/>
                        {openRest && (
                            <ModalRestaurantForm
                                mode="update"
                                restaurantId={id}
                                defaultValues={{
                                    name: restName,
                                    banner: imageUrl,
                                    address: desc,
                                }}
                                onClose={() => setOpenRest(false)}
                                onSuccess={() => {
                                    window.location.reload()
                                }}
                            />
                        )}
                        
                        <DeleteRest onDeleteRest={(e) => {
                            setOpenDel(true)
                            e.stopPropagation()}}/>
                        {openDel && 
                            <ModalConfirm 
                                onClose={()=> setOpenDel(false)}
                                onConfirm={handleDeleteRestaurant}
                                loading={deleting}    
                            />}
                    </div>
                </div>
            }

        </div>

      </div>

  );

}