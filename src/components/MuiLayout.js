import React from "react";
import { Box, Stack, Divider, Grid, Paper } from "@mui/material";

const MuiLayout = () => {
	return (
		<Paper sx={{ padding: "32px" }} elevation={4}>
			<Stack
				sx={{ border: "1px solid red" }}
				direction="row"
				justifyContent="space-between"
				divider={<Divider orientation="vertical" flexItem />}
			>
				<Box
					sx={{
						backgroundColor: "primary.main",
						color: "white",
						height: "100px",
						width: "100px",
						padding: "16px",
						transition: "all 0.5s ease-in-out",
						borderRadius: "5px",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						"&:hover": {
							backgroundColor: "primary.light",
							cursor: "pointer",
						},
					}}
				>
					MuiLayout 1
				</Box>
				<Box
					display="flex"
					p={2}
					bgcolor="success.light"
					width="100px"
					height="100px"
					justifyContent="center"
					alignItems="center"
					color="white"
					borderRadius="5px"
				>
					MuiLayout 2
				</Box>
			</Stack>
			<Grid container my={2} rowSpacing={2} columnSpacing={2}>
				<Grid item xs={6}>
					<Box bgcolor="secondary.light" p={2}>
						Item 1
					</Box>
				</Grid>
				<Grid item xs={6}>
					<Box bgcolor="primary.light" p={2}>
						Item 2
					</Box>
				</Grid>
				<Grid item xs={6}>
					<Box bgcolor="success.light" p={2}>
						Item 3
					</Box>
				</Grid>
				<Grid item xs={6}>
					<Box bgcolor="warning.light" p={2}>
						Item 4
					</Box>
				</Grid>
			</Grid>
		</Paper>
	);
};

export default MuiLayout;
