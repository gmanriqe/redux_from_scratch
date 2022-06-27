import TitleMovie from "./TitleMovie"
import RaitingMovie from "./RaitingContainer"

const RightContainer = ({
    movieTitle,
    movieRating
}) => {
    return (
        <div className="w-2/3 flex flex-col items-start justify-center my-16 overflow-y-auto">
            <TitleMovie title={movieTitle} />
            <RaitingMovie rating={movieRating} />
        </div>
    )
}

export default RightContainer