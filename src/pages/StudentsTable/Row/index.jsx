import Accordion from "@mui/material/Accordion";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { AccordionDetails, AccordionSummary, Checkbox } from "@mui/material";

import { useRow } from "./useRow";
import classes from "./style.module.css";
import { DropDownInformation } from "./DropDownInformation/index";
import { Cell } from "./Cell/index";

export const Row = ({ rowData }) => {
	const { selectedColor, onChange, selectedStudents } = useRow({
		rowData,
	});

	return (
		<div className={classes.row}>
			<Accordion>
				<AccordionSummary
					classes={{
						root: classes.summaryRoot,
						content: `${classes.summaryContent} ${
							rowData.row.archived ? classes.summaryContentArchived : ""
						}`,
					}}
					className={`${rowData.rowId % 2 === 0 ? classes.rowEven : ""} ${
						selectedStudents.some(({ id }) => id === rowData.rowId)
							? classes.selectedStudents
							: ""
					}`}
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1bh-content"
				>
					{rowData.row.archived && (
						<div className={classes.archivedTitle}>ARCHIVED</div>
					)}
					{rowData?.renderedColumns.map((cell, index) => {
						return cell.field === "__check__" ? (
							<Checkbox
								classes={{
									colorPrimary: classes.colorPrimary,
								}}
								onChange={onChange}
								checked={selectedStudents.some(
									(st) => st.id === rowData.row.id
								)}
								onClick={(event) => event.stopPropagation()}
								key={index}
								inputProps={{ "aria-label": "Checkbox" }}
								size="medium"
							/>
						) : (
							<Cell
								cell={cell}
								index={index}
								selectedColor={selectedColor}
								rowData={rowData}
							/>
						);
					})}
				</AccordionSummary>
				<AccordionDetails
					classes={{
						root: classes.root,
					}}
				>
					<DropDownInformation rowData={rowData} />
				</AccordionDetails>
			</Accordion>
		</div>
	);
};
