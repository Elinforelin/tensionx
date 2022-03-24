import Accordion from "@mui/material/Accordion";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { AccordionDetails, AccordionSummary, Checkbox } from "@mui/material";

import { useRow } from "./useRow";
import classes from "./style.module.css";
import { DropDownInformation } from "./DropDownInformation/index";

export const Row = ({ rowData }) => {
	const { selectedColor, onChange, selectedStudents } = useRow({
		rowData,
	});

	return (
		<div className={classes.row}>
			<Accordion>
				<AccordionSummary
					classes={{
						content: classes.summaryContent,
					}}
					className={rowData.rowId % 2 === 0 ? classes.rowEven : ""}
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1bh-content"
				>
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
							<div
								className={`${selectedColor(cell.field)} ${
									index === 1 ? classes.nameCell : ""
								}`}
								key={index}
								style={{
									width: cell.width,
								}}
							>
								{rowData.row[cell.field]}
							</div>
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
