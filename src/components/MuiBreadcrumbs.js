import React from "react";
import { Typography, Breadcrumbs, Link, Box } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const MuiBreadcrumbs = () => {
	function handleClick(e) {
		e.preventDefault();
		console.info("You clicked a breadcrumb.");
	}

	return (
		<Box m={2} role="presentation" onClick={handleClick}>
			<Breadcrumbs
				aria-label="breadcrumb"
				separator={<NavigateNextIcon fontSize="small" />}
			>
				<Link underline="hover" color="inherit" href="/">
					MUI
				</Link>
				<Link
					underline="hover"
					color="inherit"
					href="/material-ui/getting-started/installation/"
				>
					Core
				</Link>
				<Typography color="text.primary">Breadcrumbs</Typography>
			</Breadcrumbs>
		</Box>
	);
};

export default MuiBreadcrumbs;
