type PillSortProps = {
  selectedTypes: string[]
  setSelectedTypes: React.Dispatch<React.SetStateAction<string[]>>
}

export default function PillSort({
  selectedTypes,
  setSelectedTypes
}: PillSortProps) {

  const handleTypeClicked = (type: string) => {
    if (type === 'ALL') {
      setSelectedTypes([])
      return
    }

    if (selectedTypes.includes(type)) {
      setSelectedTypes(
        selectedTypes.filter((item) => item!==type)
      )
    } else (
      setSelectedTypes([...selectedTypes, type])
    )
    
  }

  const active = "bg-(--color-brand-primary) text-(--color-text-primary) border-transparent cursor-pointer transition duration-400";
  const inactive = "border-(--color-brand-secondary) text-(--color-brand-secondary) hover:bg-(--color-brand-primary) hover:text-(--color-text-primary) hover:border-transparent cursor-pointer transition duration-400";

  return (
    <div className="w-full overflow-x-auto">
      <div className="flex gap-3 mt-[clamp(2rem,2.5vw,10rem)] mb-6 md:mb-10 text-xs md:text-xl flex-nowrap md:flex-wrap w-max md:w-full px-4 md:px-0 justify-center items-center">

      <button
        onClick={() => handleTypeClicked("ALL")}
        className={`px-4 py-2 rounded-full border ${
          selectedTypes.length === 0 ? active : inactive
        }`}
      >
        🍱 All
      </button>

        <button
          onClick={() => handleTypeClicked("SUSHI")}
          className={`px-4 py-2 rounded-full border ${
            selectedTypes.includes("SUSHI") ? active : inactive
          }`}
        >
          🍣 Sushi
        </button>

        <button
          onClick={() => handleTypeClicked('DONBURI')}
          className={`px-4 py-2 rounded-full border ${
            selectedTypes.includes("DONBURI") ? active : inactive
          }`}
        >
          🍛 Donburi
        </button>

        <button
          onClick={() => handleTypeClicked('RAMEN')}
          className={`px-4 py-2 rounded-full border ${
            selectedTypes.includes("RAMEN") ? active : inactive
          }`}
        >
          🍜 Ramen
        </button>

        <button
          onClick={() => handleTypeClicked('SNACK')}
          className={`px-4 py-2 rounded-full border ${
            selectedTypes.includes("SNACK") ? active : inactive
          }`}
        >
          🥠 Snack
        </button>

        <button
          onClick={() => handleTypeClicked('DRINK')}
          className={`px-4 py-2 rounded-full border ${
            selectedTypes.includes("DRINK") ? active : inactive
          }`}
        >
          🍵 Drink
        </button>

      </div>
    </div>
  );
}