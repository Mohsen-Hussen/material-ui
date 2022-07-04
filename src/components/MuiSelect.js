import React, { useState } from "react";
import { Box, TextField, MenuItem } from "@mui/material";

const MuiSelect = () => {
	const [countries, setCountries] = useState([]);
	console.log({ countries });
	const handleSelect = (e) => {
		const countryName = e.target.value;
		setCountries(
			typeof countryName === "string" ? countryName.split(",") : countryName
		);
	};
	return (
		<Box width="250px">
			<TextField
				select
				label="Select countries"
				value={countries}
				onChange={handleSelect}
				fullWidth
				color="secondary"
				size="large"
			>
				<MenuItem value="EGY">Egypt</MenuItem>
				<MenuItem value="LEB">Lebanon</MenuItem>
				<MenuItem value="KSA">Saudi Arabia</MenuItem>
			</TextField>
		</Box>
	);
};

export default MuiSelect;
