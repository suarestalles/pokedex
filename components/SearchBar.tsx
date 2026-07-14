type SearchBarProps = {
    value: string,
    onChange: (value: string) => void
}

export function SearchBar({
    value, onChange
}: SearchBarProps) {
    return (
        <input
            className="w-full rounded-lg border border-white px-4 py-2 text-gray-300 outline-none transition focus:border-red-500 focus:ring-blue-200"
            type="text"
            placeholder="Search Pokémon..."
            value={value}
            onChange={(e) => onChange(e.target.value)}
        />
    )
}