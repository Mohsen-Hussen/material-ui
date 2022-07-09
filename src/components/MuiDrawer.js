import React, { useState } from "react";
import { Drawer, Box, Typography, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const MuiDrawer = () => {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);
	return (
		<>
			<IconButton
				onClick={() => setIsDrawerOpen(true)}
				aria-label="logo"
				size="large"
				color="inherit"
				edge="start"
			>
				<MenuIcon />
			</IconButton>
			<Drawer
				anchor="left"
				open={isDrawerOpen}
				onClose={() => setIsDrawerOpen(false)}
			>
				<Box p={2} width="250px" textAlign="center" role="presentation">
					<Typography variant="h6" component="div">
						Drawer
					</Typography>
				</Box>
			</Drawer>
		</>
	);
};

export default MuiDrawer;
