import React, { useState } from "react";
import {
	Box,
	Switch,
	FormControl,
	FormLabel,
	FormControlLabel,
} from "@mui/material";

const MuiSwitch = () => {
	const [checked, setChecked] = useState(false);
	const handleSwitch = (e) => {
		setChecked(e.target.checked);
	};
	console.log(checked);
	return (
		<Box>
			<FormControlLabel
				label="Dark Mode"
				control={
					<Switch checked={checked} onChange={handleSwitch} color="success" />
				}
			/>
		</Box>
	);
};

export default MuiSwitch;
