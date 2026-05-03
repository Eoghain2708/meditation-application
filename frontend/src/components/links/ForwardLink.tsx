type Props = {
    text: string
}

export default function LinkText({ text }: Props) {
    return (
        <>
        <span className="text-xl font-bold">→</span><span className="text-purple-600 py-5"> {text}</span>
        </>
    )
}