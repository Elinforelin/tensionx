import { useState } from "react";
import {
  selectPerPage,
  selectCheckedStudents,
} from "./../../store/students/select";
import { useSelector, useDispatch } from "react-redux";
import { fetchStudent } from "./../../store/students/actions";
import { endpoints } from "./../../constants/endpoints";
import { useCSVDownloader } from "react-papaparse";

export const useSearchBar = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const perPage = useSelector(selectPerPage);
  const { CSVDownloader, Type } = useCSVDownloader();
  const selectedStudents = useSelector(selectCheckedStudents);

  const onChange = (e) => {
    setSearch(e.target.value);
  };
  const onClick = () => {
    dispatch(
      fetchStudent(
        endpoints.studentsList({
          page: 1,
          size: perPage,
          search: search,
        })
      )
    );
  };

  return { onChange, onClick, CSVDownloader, Type, selectedStudents }
}