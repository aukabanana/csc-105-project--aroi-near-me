export default function ConfirmBtn () {
    return (
        <div>
            <button className='
            border border-(--color-state-success) bg-[rgba(var(--rgb-state-success)/0.15)] text-(--color-state-success) rounded-full font-sans cursor-pointer
            hover:bg-(--color-state-success) hover:text-(--color-text-primary) duration-300
            text-[9px] px-3
            md:text-[12px]
            lg:text-[20px]
            '>Confirm</button>
        </div>
    )
}