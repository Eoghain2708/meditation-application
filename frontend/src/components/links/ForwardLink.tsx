type Props = {
    text: string
}

export default function LinkText({ text }: Props) {
    return (
        <>
        <span className="text-xl font-bold text-purple-400">→</span><span className="text-purple-400 py-5"> {text}</span>
        </>
    )
}