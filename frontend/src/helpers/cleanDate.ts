export default function getCleanDate(val: string): string {
    
    let date: Date;
    try {
        date = new Date(val);
    } catch {
        return "error parsing date";
    }
    return date.toLocaleString("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit"
        }
    )
}