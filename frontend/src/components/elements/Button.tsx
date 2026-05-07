type Props = {
    text: string
}

export default function Button( { text }: Props) {
    return (
        <button className="py-2 px-4 bg-purple-700/50 hover:bg-purple-600 hover:scale-105 duration-100 rounded-lg">
            {text}
            </button>
    )
}