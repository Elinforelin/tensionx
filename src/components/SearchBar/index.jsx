import TextField from "@mui/material/TextField";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton, InputAdornment } from "@mui/material";

import classes from "./style.module.css";
import { useSearchBar } from "./useSearchBar";

const SearchBar = () => {
	const { onChange, onClick, CSVDownloader, Type, selectedStudents } =
		useSearchBar();

	return (
		<div className={classes.wrapper}>
			<div className={classes.students}>STUDENTS</div>
			<TextField
				onChange={onChange}
				className={classes.search}
				size="small"
				label="Enter Student Name, Parent or ID here"
				InputProps={{
					endAdornment: (
						<InputAdornment onClick={onClick}>
							<IconButton>
								<SearchIcon />
							</IconButton>
						</InputAdornment>
					),
				}}
			/>
			<CSVDownloader
				className={!selectedStudents.length ? classes.csvDisabled : classes.csv}
				type={Type.Button}
				filename={"filename"}
				bom={true}
				config={{
					delimiter: ";",
				}}
				data={selectedStudents}
			>
				<IconButton
					className={classes.csvIcon}
					disabled={!selectedStudents.length ? true : ""}
				>
					<FileUploadIcon className={classes.csvIcon} />
					EXPORT SCV
				</IconButton>
			</CSVDownloader>
		</div>
	);
};

export default SearchBar;
