export default function normaliseName <T extends string> (name: T) {
    return name[0].toUpperCase() + name.slice(1) as Capitalize<typeof name>;
}