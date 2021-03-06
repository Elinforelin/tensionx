import { IconButton } from "@mui/material";
import { useCSVDownloader } from "react-papaparse";
import FileUploadIcon from "@mui/icons-material/FileUpload";

import classes from "./style.module.css";
import { useSelectedStudentsHeader } from "./useSelectedStudentsHeader";
import { ReactComponent as ArchivedIcon } from "../../assets/img/archivedIcon.svg";

export const SelectedStudentsHeader = () => {
	const { CSVDownloader, Type } = useCSVDownloader();
	const { selectedStudents, onCancelClick } = useSelectedStudentsHeader();

	return (
		<div className={classes.wrap}>
			<div className={classes.selected}>
				{selectedStudents.length === 1
					? `${selectedStudents.length} STUDENT `
					: `${selectedStudents.length} STUDENTS `}
				SELECTED
			</div>
			<div className={classes.wrapper}>
				<div>
					<button onClick={onCancelClick} className={classes.cancelBtn}>
						X CANCEL SELECTION
					</button>
				</div>
				<div>
					<CSVDownloader
						className={classes.csv}
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

				<div className={classes.archive}>
					<ArchivedIcon />
					ARCHIVE SELECTED
				</div>
			</div>
		</div>
	);
};
