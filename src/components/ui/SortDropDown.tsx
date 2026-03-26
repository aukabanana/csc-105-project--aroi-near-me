import { useState, useRef, useEffect } from "react";

type Props = {
  options: string[];
  value: string;
  onChange: (val: string) => void;
};

export default function SortDropDown({
  options,
  value,
  onChange,
}: Props) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative shrink-0">

      {/* Button */}
      <div
        onClick={() => setOpen(!open)}
        className="
        bg-[#2a2a2a] text-gray-300
        px-3 py-1.5 md:px-4 md:py-2
        rounded-full border border-gray-600 cursor-pointer 
        flex items-center justify-between gap-2
        min-w-[120px] md:min-w-[160px]
        text-xs md:text-sm
        transition-all duration-200
        hover:border-orange-400
        "
      >
        <span>{value}</span>

        <span
          className={`text-xs transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        >
          ▼
        </span>
      </div>

      {/* Dropdown */}
      <div
        className={`absolute right-0 top-full mt-2 
          w-[140px] md:w-44
          max-w-[calc(100vw-16px)]
          bg-[#2a2a2a] border border-gray-600 
          rounded-2xl shadow-xl overflow-hidden
          z-[999]
          transition duration-150
          ${
            open
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-1 pointer-events-none"
          }`}
      >
        {options.map((item) => (
          <div
            key={item}
            onClick={() => {
              onChange(item);
              setOpen(false);
            }}
            className={`px-3 py-2 md:px-4
              text-xs md:text-sm
              cursor-pointer transition
              ${
                value === item
                  ? "bg-gray-500/30 text-white"
                  : "text-gray-300 hover:bg-gray-500/20"
              }`}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}