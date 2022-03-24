import { Button } from "@mui/material";

import classes from "./style.module.css";

const SecondHeader = () => {
	return (
		<div className={classes.wrap}>
			<Button>SHOW ALL▼</Button>
			<Button>ALL GRADES▼</Button>
			<Button>ALL CLASSES▼</Button>
			<Button>AV. SCORE▼</Button>
			<Button>AV. SPEED▼</Button>
			<Button>ALL CLASSES▼</Button>
			<Button>X CLEAR ALL</Button>
		</div>
	);
};

export default SecondHeader;
