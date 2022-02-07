import ListItem from "../../UI/List/ListItem/ListItem";

const CourseGoalItem = (props) => {
  // const [deleteText, setDeleteText] = useState('');

  const deleteHandler = () => {
    // setDeleteText('(Deleted!)');
    props.onDelete(props.id);
  };

  return <ListItem onClick={deleteHandler}>{props.children}</ListItem>;
};

export default CourseGoalItem;
