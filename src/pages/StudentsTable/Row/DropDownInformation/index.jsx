import { DatePicker, LocalizationProvider } from "@mui/lab";
import { Checkbox, TextField } from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";

import classes from "./style.module.css";
import { useDropDownInformation } from "./useDropDownInformation";

export const DropDownInformation = ({ rowData }) => {
	const { selectedColor } = useDropDownInformation();
	return (
		<div>
			<div className={classes.dropDown}>
				<span>
					STUDENT: <span className={classes.name}>{rowData.row.name}</span>
				</span>
				<span>
					ID: <span className={classes.name}>{rowData.row.id}</span>
				</span>
				<div>
					<span>
						<select className={classes.select}>
							<option>All concepts</option>
						</select>
					</span>
					<span>
						<select className={classes.select}>
							<option>All score</option>
						</select>
					</span>
					<span>
						<select className={classes.select}>
							<option>All speed</option>
						</select>
					</span>
					<LocalizationProvider dateAdapter={AdapterDateFns}>
						<DatePicker
							label="SELECT PERIOD"
							value={null}
							renderInput={(params) => (
								<TextField
									variant="standard"
									classes={{
										root: classes.root,
									}}
									{...params}
								/>
							)}
						/>
					</LocalizationProvider>
				</div>
				<hr />
				<div>
					<div>
						<span className={classes.scoreAndSpeed}>score </span>
						<span className={classes.blueScoreAndSpeed}>
							<span className={classes.roundBlue}>ffr</span>90%+ accuracy
						</span>
						<span className={classes.greenScoreAndSpeed}>
							<span className={classes.roundGreen}>ffr</span>80 - 89% accuracy
						</span>
						<span className={classes.yellowScoreAndSpeed}>
							<span className={classes.roundYellow}>ffr</span>50 - 79% accuracy
						</span>
						<span className={classes.redScoreAndSpeed}>
							<span className={classes.roundRed}>ffr</span>below 50% accuracy
						</span>
					</div>
					<div className={classes.scoreAndSpeed}>
						<span className={classes.scoreAndSpeed}>speed </span>
						<span className={classes.blueScoreAndSpeed}>
							<span className={classes.roundBlue}>ffr</span>above expected
						</span>
						<span className={classes.greenScoreAndSpeed}>
							<span className={classes.roundGreen}>ffr</span>as expected
						</span>
						<span className={classes.redScoreAndSpeed}>
							<span className={classes.roundRed}>ffr</span>below expected
						</span>
					</div>
				</div>
				<div>
					<table className={classes.table}>
						<tr>
							<th>#</th>
							<th>Test Label</th>
							<th>Score</th>
							<th>Speed</th>
							<th>Total Q-ns</th>
							<th>Exp. Speed</th>
							<th>Date</th>
							<th>Absent</th>
						</tr>
						{rowData.row.tests.map((data, i) => {
							return (
								<tr key={i}>
									<td>{i + 1}</td>
									<td>Finding {data.label}</td>
									<td>{data.score === null ? "NIL" : data.score}</td>
									<td>{data.speed === null ? "NIL" : data.speed}</td>
									<td>{data.total}</td>
									<td>{data.expSpeed}</td>
									<td>{data.date}</td>
									<td>
										<Checkbox
											classes={{
												colorPrimary: classes.colorPrimary,
											}}
											checked={data.absent}
											inputProps={{ "aria-label": "Checkbox" }}
											size="medium"
										/>
									</td>
								</tr>
							);
						})}
					</table>
					<hr className={classes.hr} />
					<div className={classes.footer}>
						<div className={classes.avarage}>AVARAGE</div>
						<div className={selectedColor(rowData.row.score)}>
							{rowData.row.score}
						</div>
						<div className={selectedColor(rowData.row.score)}>
							{rowData.row.speed}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
