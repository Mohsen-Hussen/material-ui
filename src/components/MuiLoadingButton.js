import React from "react";
import { Stack } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import SaveIcon from "@mui/icons-material/Save";

const MuiLoadingButton = () => {
	return (
		<Stack spacing={2} direction="row" sx={{ marginTop: "1rem" }}>
			<LoadingButton variant="outlined">Submit</LoadingButton>
			<LoadingButton loading variant="outlined">
				Sybmit with Loading
			</LoadingButton>

			<LoadingButton variant="outlined">Fetch Data</LoadingButton>
			<LoadingButton loading variant="outlined" loadingIndicator="Loading...">
				Fetch Data
			</LoadingButton>

			<LoadingButton
				variant="outlined"
				LoadingPosition="start"
				startIcon={<SaveIcon />}
			>
				Save
			</LoadingButton>
			<LoadingButton
				loading
				variant="outlined"
				LoadingPosition="start"
				startIcon={<SaveIcon />}
				loadingIndicator="Saveing..."
			>
				Save
			</LoadingButton>
		</Stack>
	);
};

export default MuiLoadingButton;
