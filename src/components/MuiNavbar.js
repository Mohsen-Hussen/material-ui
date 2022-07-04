import React, { useState } from "react";
import {
	Box,
	AppBar,
	Toolbar,
	Typography,
	Button,
	Stack,
	Menu,
	MenuItem,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { CatchingPokemon } from "@mui/icons-material";
import KerboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const MuiNavbar = () => {
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static" color="secondary">
				<Toolbar>
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="menu"
					>
						<CatchingPokemon />
					</IconButton>
					<Typography variant="body2" component="div" sx={{ flexGrow: 1 }}>
						POKEMON APP
					</Typography>
					<Stack direction="row" spacing={2}>
						<Button color="inherit">Home</Button>
						<Button color="inherit">About</Button>
						<Button color="inherit">Contact</Button>
						<Button
							color="inherit"
							id="basic-button"
							aria-controls={open ? "basic-menu" : undefined}
							aria-haspopup="true"
							aria-expanded={open ? "true" : undefined}
							onClick={handleClick}
							endIcon={<KerboardArrowDownIcon />}
						>
							Dashboard
						</Button>
					</Stack>
					<Menu
						id="basic-menu"
						anchorEl={anchorEl}
						open={open}
						onClose={handleClose}
						MenuListProps={{
							"aria-labelledby": "basic-button",
						}}
						anchorOrigin={{
							vertical: "bottom",
							horizontal: "right",
						}}
						transformOrigin={{
							vertical: "top",
							horizontal: "right",
						}}
					>
						<MenuItem onClick={handleClose}>Profile</MenuItem>
						<MenuItem onClick={handleClose}>My account</MenuItem>
						<MenuItem onClick={handleClose}>Logout</MenuItem>
					</Menu>
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default MuiNavbar;
