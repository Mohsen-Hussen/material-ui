import React, { useState } from "react";
import { Stack, Autocomplete, TextField } from "@mui/material";

const skills = [
	"C++",
	"Java",
	"Python",
	"JavaScript",
	"C#",
	"PHP",
	"Swift",
	"Ruby",
	"Go",
	"TypeScript",
];
const MuiAutocomplete = () => {
	const [value, setValue] = useState(null);
	const handleAutoComplete = (e, newValue) => {
		setValue(newValue);
	};
	console.log({ value });
	return (
		<Stack spacing={2} width="300px">
			<Autocomplete
				options={skills}
				renderInput={(params) => <TextField {...params} label="Skills" />}
				value={value}
				onChange={handleAutoComplete}
				freeSolo
			/>
		</Stack>
	);
};

export default MuiAutocomplete;
