// components
import CourseGoalItem from "../CourseGoalItem/CourseGoalItem";
import List from "../../UI/List/List";

const CourseGoalList = (props) => {
  return (
    <List>
      {props.items.map((goal) => (
        <CourseGoalItem
          key={goal.id}
          id={goal.id}
          onDelete={props.onDeleteItem}
        >
          {goal.text}
        </CourseGoalItem>
      ))}
    </List>
  );
};

export default CourseGoalList;
