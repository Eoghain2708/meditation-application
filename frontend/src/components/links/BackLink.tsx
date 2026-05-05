type Props = {
    text: string
}

export default function LinkText({ text }: Props) {
    return (
        <>
        <span className="text-lg font-bold text-purple-500">←</span><span className="text-purple-500 py-5"> {text}</span>
        </>
    )
}