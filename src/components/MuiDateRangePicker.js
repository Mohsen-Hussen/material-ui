import React, { useState } from "react";
import { Box, TextField } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDateFns } from "@mui/x-date-pickers-pro/AdapterDateFns";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { StaticDateRangePicker } from "@mui/x-date-pickers-pro/StaticDateRangePicker";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
// import { DateRangePicker } from "@mui/x-date-pickers/DateRangePicker";

const MuiDateRangePicker = () => {
	const [value, setValue] = useState([null, null]);
	return (
		<LocalizationProvider
			dateAdapter={AdapterDateFns}
			localeText={{ start: "Check-in", end: "Check-out" }}
		>
			<DateRangePicker
				value={value}
				onChange={(newValue) => {
					setValue(newValue);
				}}
				renderInput={(startProps, endProps) => (
					<>
						<TextField {...startProps} />
						<Box sx={{ mx: 2 }}> to </Box>
						<TextField {...endProps} />
					</>
				)}
			/>
		</LocalizationProvider>
	);
};

export default MuiDateRangePicker;
