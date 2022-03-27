import { useSelector } from "react-redux";

import classes from "./style.module.css";
import { ReactComponent as ParentsIcon } from "../../../../assets/img/exclamatory.svg";
import { ReactComponent as EditIcon } from "../../../../assets/img/edit.svg";
import { ReactComponent as RiseIcon } from "../../../../assets/img/rise.svg";
import { ReactComponent as UnarchiveIcon } from "../../../../assets/img/unarchiveBtn.svg";
import { selectCheckedStudents } from "./../../../../store/students/select";

export const Cell = ({ cell, index, selectedColor, rowData }) => {
	const selectedStudents = useSelector(selectCheckedStudents);

	return (
		<div
			className={`${selectedColor(cell.field)} ${
				index === 1 ? classes.nameCell : ""
			} ${rowData.row.archived ? classes.archived : ""}`}
			key={index}
			style={{
				width: cell.width,
			}}
		>
			{cell.field === "parents" ? (
				<div className={classes.parents}>
					<ParentsIcon className={classes.parentsIcon} />
					{rowData.row[cell.field].join(", ")}
				</div>
			) : (
				<div>
					{cell.fiels === "actions" &&
						!!selectedStudents.length &&
						!rowData.row.archived && (
							<div className={classes.actionsButton}>
								<EditIcon />
								<RiseIcon />
							</div>
						)}
					{cell.fiels === "actions" &&
						!!selectedStudents.length &&
						rowData.row.archived && (
							<div className={classes.actionsButtonArchived}>
								<UnarchiveIcon />
							</div>
						)}
					{rowData.row[cell.field]}
				</div>
			)}
		</div>
	);
};
