import Button from "@mui/material/Button";
import { Avatar } from "@mui/material";

import img from "../../assets/img/m2.jpg";
import classes from "./style.module.css";

const Header = () => {
	return (
		<div className={classes.wrapper}>
			<Button className={classes.school} variant="text">
				SCHOOL 1 ▼
			</Button>
			<div className={classes.centerBtns}>
				<Button variant="text">ANALYTICS</Button>
				<Button variant="text">TEST</Button>
				<Button className={classes.activeStudents} variant="text">
					STUDENTS
				</Button>
				<Button variant="text">TEACHER</Button>
				<Button variant="text">GRADEBOOKS</Button>
				<Button variant="text">ARCHIVE</Button>
			</div>

			<div className={classes.avatar}>
				<Avatar src={img}></Avatar>
				<div>▼</div>
			</div>
		</div>
	);
};

export default Header;
