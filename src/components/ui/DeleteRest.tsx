import React from "react"
type DeleteRestProps = {
  onDeleteRest: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function DeleteRest ({ onDeleteRest } : DeleteRestProps) {
    return (
        <div>
            <button className='
            border-[0.5px] border-(--color-brand-primary) bg-[rgba(var(--rgb-brand-primary)/0.15)] text-(--color-brand-primary) rounded-full font-sans cursor-pointer
            hover:bg-(--color-brand-primary) hover:text-(--color-text-primary) duration-300
            text-[9px] px-3
            md:text-[12px]
            md:border
            lg:text-[20px]
            ' onClick={onDeleteRest}>Delete</button>
        </div>
    )
}