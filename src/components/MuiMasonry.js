import React from "react";
import { Box, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import Masonry from "@mui/lab/Masonry";

const heights = [
	150, 30, 90, 70, 110, 150, 130, 80, 50, 90, 100, 150, 30, 50, 80,
];

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
	...theme.typography.body2,
	padding: theme.spacing(0.5),
	textAlign: "center",
	color: theme.palette.text.secondary,
}));

const MuiMasonry = () => {
	return (
		<Box sx={{ width: 500, minHeight: 400, marignTop: "1rem" }}>
			<Masonry columns={4} spacing={2}>
				{heights.map((height, index) => (
					<Item key={index} sx={{ height }}>
						{index + 1}
					</Item>
				))}
			</Masonry>
		</Box>
	);
};

export default MuiMasonry;
