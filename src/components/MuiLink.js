import React from "react";
import { Stack, Link, Typography } from "@mui/material";

const MuiLink = () => {
	return (
		<Stack spacing={2} m={4} direction="row">
			<Link
				href="https://mui.com/material-ui/react-link/"
				target="_blank"
				variant="body2"
			>
				Link
			</Link>
			<Typography variant="h6">
				<Link
					href="https://mui.com/material-ui/react-link/"
					target="_blank"
					color="secondary"
					underline="none"
				>
					Link
				</Link>
			</Typography>
		</Stack>
	);
};

export default MuiLink;
