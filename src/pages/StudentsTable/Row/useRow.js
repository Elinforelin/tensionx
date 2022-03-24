import { useDispatch, useSelector } from "react-redux";

import classes from "./style.module.css";
import {
  deleteSelectedStudent,
  setSelectedStudent,
} from "../../../store/students/reducer";
import { selectCheckedStudents } from "../../../store/students/select";


export const useRow = ({ rowData }) => {
  const score = parseInt(rowData.row.score);
  const dispatch = useDispatch();
  const selectedStudents = useSelector(selectCheckedStudents);

  function selectedColor(field) {
    if (
      (field === "speed" && rowData.row.speed.startsWith("Below")) ||
      (field === "score" && score < 50)
    ) {
      return classes.red;
    } else if (
      (field === "speed" && rowData.row.speed.startsWith("As")) ||
      (field === "score" && score <= 89 && score >= 80)
    ) {
      return classes.green;
    } else if (
      (field === "speed" && rowData.row.speed.startsWith("Above")) ||
      (field === "score" && score >= 90)
    ) {
      return classes.blue;
    } else if (field === "score" && score <= 79 && score >= 50)
      return classes.yellow;
  }

  const onChange = (_, checked) => {
    if (checked) {
      dispatch(setSelectedStudent([rowData.row]));
    } else {
      dispatch(deleteSelectedStudent(rowData.row.id));
    }
  };

  return {
    selectedColor,
    onChange,
    selectedStudents
  }

};
