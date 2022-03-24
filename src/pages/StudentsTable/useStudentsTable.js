import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  selectPerPage,
  selectStudent,
  selectTotalPages,
  selectPage,
} from "./../../store/students/select";
import {
  setPerPage,
  setPage,
  setAllSelectedStudents,
} from "../../store/students/reducer";
import { endpoints } from "./../../constants/endpoints";
import { fetchStudent } from "./../../store/students/actions";
import { Row } from "./Row";

export const useStudentsTable = () => {
  const dispatch = useDispatch();

  const [sortModel, setSortModel] = useState([]);
  const [sortDir, setSortDir] = useState(-1);
  const students = useSelector(selectStudent);
  const perPage = useSelector(selectPerPage);
  const totalPages = useSelector(selectTotalPages);
  const page = useSelector(selectPage);

  const handleSortModelChange = (e) => {
    setSortModel(e);
    setSortDir((prev) => prev * -1);
  };

  useEffect(() => {
    dispatch(
      fetchStudent(
        endpoints.studentsList({
          page: page,
          size: perPage,
          sortBy: sortModel[0]?.field,
          sortDir: sortDir,
        })
      )
    );
  }, [dispatch, perPage, sortModel, sortDir, page]);

  const studentsWithKey = useMemo(() => students.map((student, i) => ({
    ...student,
    id: i,
  })), [students]);


  const onSelectionModelChange = (selectionModel) => {
    if (selectionModel.length) {
      dispatch(setAllSelectedStudents(studentsWithKey));
    } else {
      dispatch(setAllSelectedStudents([]));
    }
  };

  const onPageChange = (page) => dispatch(setPage(page + 1));

  const onPageSizeChange = (pageSize) => dispatch(setPerPage(pageSize));

  const customRow = (rowData) => {
    return <Row rowData={rowData} />;
  };

  return {
    customRow,
    onPageSizeChange,
    onPageChange,
    sortModel,
    students,
    totalPages,
    handleSortModelChange,
    studentsWithKey,
    onSelectionModelChange
  };
};

