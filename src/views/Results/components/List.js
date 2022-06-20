import ListItem from "./ListItem";

const List = ({ data }) => {
    return data?.map(movie => <ListItem key={movie.id} {...movie}/> );
}

export default List;