import React, { useState } from "react";
import { InputAdornment, TextField, Stack } from "@mui/material";

const MuiTextField = () => {
	const [value, setValue] = useState("");
	return (
		<Stack spacing={4}>
			<Stack spacing={2} direction="row">
				<TextField
					id="outlined-basic"
					label="Outlined"
					variant="outlined"
					size="small"
					color="secondary"
					value={value}
					onChange={(e) => setValue(e.target.value)}
					required
					error={!value}
					helperText={
						!value
							? "This is a required field"
							: "Don't Share Your Password With Anyone"
					}
				/>
				<TextField id="filled-basic" label="Filled" variant="filled" disabled />
				<TextField
					id="filled-basic"
					label="Filled"
					variant="filled"
					helperText="Don't Share Your Password With Anyone"
				/>
				<TextField id="standard-basic" label="Standard" variant="standard" />
			</Stack>
			<Stack spacing={2} direction="row">
				<TextField label="Password" variant="standard" type="password" />
				<TextField
					label="Read Only"
					variant="outlined"
					InputProps={{ readOnly: true }}
					value="Read Only text"
				/>
			</Stack>
			<Stack spacing={2} direction="row">
				<TextField
					label="Amount"
					variant="outlined"
					InputProps={{
						startAdornment: <InputAdornment position="start">$</InputAdornment>,
					}}
				/>
				<TextField
					label="Weight"
					variant="outlined"
					InputProps={{
						endAdornment: <InputAdornment position="end">kg</InputAdornment>,
					}}
				/>
			</Stack>
		</Stack>
	);
};

export default MuiTextField;
