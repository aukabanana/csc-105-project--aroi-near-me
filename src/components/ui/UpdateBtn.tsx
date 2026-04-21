export default function UpdateBtn ({ onUpdate } : {onUpdate : () => void}) {
    return (
        <div>
            <button className='
            border border-(--color-brand-secondary) bg-[rgba(var(--rgb-brand-secondary)/0.15)] text-(--color-brand-secondary) rounded-full font-sans cursor-pointer
            hover:bg-(--color-brand-secondary) hover:text-(--color-text-primary) duration-300
            text-[9px] px-3
            md:text-[12px]
            lg:text-[20px]
            ' onClick={(e) => {
                e.stopPropagation()
                onUpdate()}}>Update</button>
        </div>
    )
}