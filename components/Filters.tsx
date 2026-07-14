import { selectStyle } from "@/styles/myStyles"

type FiltersProps = {
    selectedType: string
    selectedWeakness: string
    types: string[]
    weaknesses: string[]
    onTypeChange: (value: string) => void
    onWeaknessChange: (value: string) => void
}

export function Filters({
    selectedType,
    selectedWeakness,
    types,
    weaknesses,
    onTypeChange,
    onWeaknessChange,
}: FiltersProps) {
    return (
        <>
            <select
            className={selectStyle}
                value={selectedType}
                onChange={(e) => onTypeChange(e.target.value)}
            >
                <option value="">All Types</option>

                {types.map((type) => (
                <option
                    key={type}
                    value={type}
                >
                    {type}
                </option>
                ))}
            </select>

            <select
            className={selectStyle}
                value={selectedWeakness}
                onChange={(e) => onWeaknessChange(e.target.value)}
            >
                <option value="">All Weakness</option>

                {weaknesses.map((weakness) => (
                <option
                    key={weakness}
                    value={weakness}
                >
                    {weakness}
                </option>
                ))}
            </select>
        </>
    )
}