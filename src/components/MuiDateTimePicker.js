import React, { useState } from "react";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { Stack, TextField } from "@mui/material";
import {
	TimePicker,
	DateTimePicker,
	DesktopDatePicker,
	MobileDatePicker,
} from "@mui/x-date-pickers";

const MuiDateTimePicker = () => {
	const [value, setValue] = useState(new Date("2014-08-18T21:11:54"));

	const handleChange = (newValue) => {
		setValue(newValue);
	};

	console.log("final date is :", { value: value && value.toLocaleString() });
	return (
		<LocalizationProvider dateAdapter={AdapterDateFns}>
			<Stack spacing={4} sx={{ width: "250px", marginTop: "1rem" }}>
				<DesktopDatePicker
					label="Date desktop"
					inputFormat="MM/dd/yyyy"
					value={value}
					onChange={handleChange}
					renderInput={(params) => <TextField {...params} />}
				/>
				<MobileDatePicker
					label="Date mobile"
					inputFormat="MM/dd/yyyy"
					value={value}
					onChange={handleChange}
					renderInput={(params) => <TextField {...params} />}
				/>
				<TimePicker
					label="Time"
					value={value}
					onChange={handleChange}
					renderInput={(params) => <TextField {...params} />}
				/>
				<DateTimePicker
					label="Date & Time picker"
					value={value}
					onChange={handleChange}
					renderInput={(params) => <TextField {...params} />}
				/>
			</Stack>
		</LocalizationProvider>
	);
};

export default MuiDateTimePicker;
