export default function DeleteBtn () {
    return (
        <div>
            <button className='
            border border-(--color-brand-primary) bg-[rgba(var(--rgb-brand-primary)/0.15)] text-(--color-brand-primary) rounded-full font-sans cursor-pointer
            hover:bg-(--color-brand-primary) hover:text-(--color-text-primary) duration-300
            text-[9px] px-3
            md:text-[12px]
            lg:text-[20px]
            '>Delete</button>
        </div>
    )
}