import React, { useState } from "react";
import { Stack, Button, Snackbar, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const MuiSnackBar = () => {
	const [open, setOpen] = useState(false);
	const handleClick = () => {
		setOpen(true);
	};

	const handleClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}
		setOpen(false);
	};

	const action = (
		<>
			<Button color="secondary" size="small" onClick={handleClose}>
				UNDO
			</Button>
			<IconButton
				size="small"
				aria-label="close"
				color="inherit"
				onClick={handleClose}
			>
				<CloseIcon fontSize="small" />
			</IconButton>
		</>
	);

	return (
		<Stack
			sx={{ justifyContent: "center", alignItems: "center", height: "10vh" }}
		>
			<div>
				<Button variant="outlined" onClick={handleClick}>
					Open simple snackbar
				</Button>
				<Snackbar
					open={open}
					autoHideDuration={6000}
					onClose={handleClose}
					message="Note archived"
					action={action}
					anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
				/>
			</div>
		</Stack>
	);
};

export default MuiSnackBar;
