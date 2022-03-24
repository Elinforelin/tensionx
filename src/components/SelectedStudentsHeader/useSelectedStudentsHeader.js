import { useDispatch, useSelector } from "react-redux";

import { selectCheckedStudents } from "../../store/students/select";
import { setAllSelectedStudents } from "../../store/students/reducer";

export const  useSelectedStudentsHeader =()=>{
	const dispatch = useDispatch();
  const selectedStudents = useSelector(selectCheckedStudents);

	const onCancelClick = () => {
		dispatch(setAllSelectedStudents([]));
	};

  return {selectedStudents, onCancelClick}
}