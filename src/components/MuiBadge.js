import React from "react";
import { Badge, Box, Stack } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";

const MuiBadge = () => {
	return (
		<Stack sx={{ marginTop: "1rem" }} spacing={2} direction="row">
			<Box>
				<Badge badgeContent={4} color="primary">
					<MailIcon color="action" />
				</Badge>
			</Box>
			<Box>
				<Badge badgeContent={15} color="secondary">
					<MailIcon color="action" />
				</Badge>
			</Box>
			<Box>
				<Badge variant="dot" color="primary">
					<MailIcon color="action" />
				</Badge>
			</Box>
		</Stack>
	);
};

export default MuiBadge;
