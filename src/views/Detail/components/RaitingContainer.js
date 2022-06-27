import starImage from "../../../assets/images/star.png"
const RaitingMovie = ({rating}) => {
    return (
        <div className="flex flex-row items-center my-1">
            <span className="text-xl font-bold w-full">{rating}</span>
            <figure>
                <img src={starImage} className="ml-1 w-6 h-6" alt="rating-star" />
            </figure>
        </div>
    )
}

export default RaitingMovie