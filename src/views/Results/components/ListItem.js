const ListItem = ({ id, primaryImage, titleText, onListItemClick}) => {
    const handleListItemClick = () => {
        onListItemClick(id);
    }
    return (
        <div key={id} style={{ minWidth: 650 }} className="flex flex-row w-full mt-16">
            <div className="w-1/6">
                <div>
                    {/* optional chaining JS ? */}
                    <img src={primaryImage?.url ?? `https://www.placecage.com/640/360`} alt={titleText.text} className="w-32" />
                    {/* <img
                    src={movie.primaryImage ? movie.primaryImage.url : `https://www.placecage.com/640/360`}
                    alt={movie.titleText.text} /> */}
                </div>
            </div>
            <div className="w-5/6 flex flex-col items-start py-1 px-5">
                <p className="font-lato text-3xl">{titleText.text ?? "Sin título"}</p>
                <div className="flex h-full items-end">
                    <button 
                        className="border-2 border-rose rounded-md w-48 h-10 text-xl text-rose hover:bg-rose hover:text-white"
                        onClick={handleListItemClick}
                        >Ver más</button>
                </div>
            </div>
        </div>
    )
}

export default ListItem