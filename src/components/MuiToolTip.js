import React from "react";
import { IconButton, Tooltip, Stack, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const MuiToolTip = () => {
	return (
		<Stack direction="row" spacing={2}>
			<Tooltip title="Delete" placement="right" arrow>
				<IconButton>
					<DeleteIcon />
				</IconButton>
			</Tooltip>
		</Stack>
	);
};

export default MuiToolTip;
