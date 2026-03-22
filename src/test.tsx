function Test() {

  return (
    <div className='grid grid-cols-3'>
      <section>
        <h1 className='text-7xl underline decoration-6'>Color</h1>
        <h1 className='text-[48px] text-(--color-text-primary) text-shadow-lg/50'>Color</h1>
        <h1 className='text-[48px] text-(--color-bg-default)'>Color</h1>
        <h1 className='text-[48px] text-(--color-bg-surface)'>Color</h1>
        <h1 className='text-[48px] text-(--color-brand-primary)'>Color</h1>
        <h1 className='text-[48px] text-(--color-brand-accent)'>Color</h1>
        <h1 className='text-[48px] text-(--color-brand-secondary)'>Color</h1>
        <h1 className='text-[48px] text-(--color-state-success)'>Color</h1>
      </section>
      <section>
        <h1 className='text-7xl underline decoration-6'>Opacity</h1>
        <h1 className='text-[48px] text-[rgba(var(--rgb-bg-surface)/1)]'>Color Opacity</h1>
        <h1 className='text-[48px] text-[rgba(var(--rgb-bg-surface)/0.9)]'>Color Opacity</h1>
        <h1 className='text-[48px] text-[rgba(var(--rgb-bg-surface)/0.8)]'>Color Opacity</h1>
        <h1 className='text-[48px] text-[rgba(var(--rgb-bg-surface)/0.7)]'>Color Opacity</h1>
        <h1 className='text-[48px] text-[rgba(var(--rgb-bg-surface)/0.6)]'>Color Opacity</h1>
        <h1 className='text-[48px] text-[rgba(var(--rgb-bg-surface)/0.5)]'>Color Opacity</h1>
        <h1 className='text-[48px] text-[rgba(var(--rgb-bg-surface)/0.4)]'>Color Opacity</h1>
        <h1 className='text-[48px] text-[rgba(var(--rgb-bg-surface)/0.3)]'>Color Opacity</h1>
        <h1 className='text-[48px] text-[rgba(var(--rgb-bg-surface)/0.2)]'>Color Opacity</h1>
        <h1 className='text-[48px] text-[rgba(var(--rgb-bg-surface)/0.1)]'>Color Opacity</h1>
        <h1 className='text-[48px] text-[rgba(var(--rgb-bg-surface)/0)]'>Color Opacity</h1>
      </section>
      <section>
        <h1 className='text-7xl underline decoration-6'>Font Family</h1>
        <h1 className='text-[48px] font-sans'>Droid Sans</h1>
        <h1 className='text-[48px] [font-family:var(--font-display)]'>Dongle</h1>
        <h1 className='text-[48px] [font-family:var(--font-alt)]'>Tai Heritage Pro</h1>
        <h1 className='text-[48px] [font-family:var(--font-accent)]'>Tapestry</h1>
      </section>
    </div>
  )
}

export default Test
