export default function DeleteBtn ({ onDelete } : { onDelete : (e : React.MouseEvent)=> void}) {
    return (
        <div>
            <button className='
            border-[0.5px] border-(--color-brand-primary) bg-[rgba(var(--rgb-brand-primary)/0.15)] text-(--color-brand-primary) rounded-full font-sans cursor-pointer
            hover:bg-(--color-brand-primary) hover:text-(--color-text-primary) duration-300
            text-[9px] px-3
            md:text-[12px]
            md:border
            lg:text-[20px]
            ' onClick={(e) => {
                e.stopPropagation()
                onDelete(e)}}>Delete</button>
        </div>
    )
}