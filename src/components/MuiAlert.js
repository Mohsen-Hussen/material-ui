import React from "react";
import { Stack, Alert, AlertTitle } from "@mui/material";

const MuiAlert = () => {
	return (
		<Stack sx={{ width: "100%", marginTop: "1rem" }} spacing={2}>
			<Alert severity="error">This is an error alert — check it out!</Alert>
			<Alert severity="warning">This is a warning alert — check it out!</Alert>
			<Alert severity="info">This is an info alert — check it out!</Alert>
			<Alert severity="success">This is a success alert — check it out!</Alert>

			<Alert variant="outlined" severity="error">
				This is an error alert — check it out!
			</Alert>
			<Alert variant="outlined" severity="warning">
				This is a warning alert — check it out!
			</Alert>
			<Alert variant="outlined" severity="info">
				This is an info alert — check it out!
			</Alert>
			<Alert variant="outlined" severity="success">
				This is a success alert — check it out!
			</Alert>

			<Alert variant="filled" severity="error">
				This is an error alert — check it out!
			</Alert>
			<Alert variant="filled" severity="warning">
				This is a warning alert — check it out!
			</Alert>
			<Alert variant="filled" severity="info">
				This is an info alert — check it out!
			</Alert>
			<Alert variant="filled" severity="success">
				This is a success alert — check it out!
			</Alert>

			<Alert variant="outlined" severity="error">
				<AlertTitle>Error</AlertTitle>
				This is an error alert — check it out!
			</Alert>
			<Alert variant="outlined" severity="warning">
				<AlertTitle>Warning</AlertTitle>
				This is a warning alert — check it out!
			</Alert>
			<Alert variant="outlined" severity="info">
				<AlertTitle>Info</AlertTitle>
				This is an info alert — check it out!
			</Alert>
			<Alert variant="outlined" severity="success">
				<AlertTitle>Success</AlertTitle>
				This is a success alert — check it out!
			</Alert>
		</Stack>
	);
};

export default MuiAlert;
