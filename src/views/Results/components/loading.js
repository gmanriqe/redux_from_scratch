const Loading = () => {
    return (
        <div className="flex justify-center items-center flex-col h-full">
            <div
                style={{ borderTopColor: "transparent" }}
                className="w-16 h-16 border-4 border-red-400 border-solid rounded-full animate-spin" />
            <p className="mt-3">Buscando películas...</p>
        </div>
    )
}

export default Loading;