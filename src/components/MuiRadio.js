import React, { useState } from "react";
import {
	Box,
	Radio,
	FormControl,
	FormLabel,
	RadioGroup,
	FormControlLabel,
} from "@mui/material";

const MuiRadio = () => {
	const [value, setValue] = useState("");
	const handleRadio = (e) => {
		setValue(e.target.value);
	};
	console.log({ value });
	return (
		<Box width="500px">
			<FormControl>
				<FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
				<RadioGroup
					aria-labelledby="demo-radio-buttons-group-label"
					defaultValue="female"
					name="radio-buttons-group"
					value={value}
					onChange={handleRadio}
					row
				>
					<FormControlLabel value="female" control={<Radio />} label="Female" />
					<FormControlLabel value="male" control={<Radio />} label="Male" />
					<FormControlLabel value="other" control={<Radio />} label="Other" />
				</RadioGroup>
			</FormControl>
		</Box>
	);
};

export default MuiRadio;
