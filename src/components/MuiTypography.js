import React from "react";
import { Typography } from "@mui/material";

const MuiTypography = () => {
	return (
		<div>
			<Typography variant="h1">h1 Heading</Typography>
			<Typography variant="h2">h2 Heading</Typography>
			<Typography variant="h3">h3 Heading</Typography>
			<Typography variant="h4" component="h1" gutterBottom>
				h4 Heading
			</Typography>
			<Typography variant="h5">h5 Heading</Typography>
			<Typography variant="h6">h6 Heading</Typography>
			<Typography variant="subtitle1">subtitle one</Typography>
			<Typography variant="subtitle2">subtitle two</Typography>
			<Typography variant="body1" gutterBottom>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci iste
				recusandae ab perferendis alias facere beatae, consectetur, voluptates
				officiis aliquid sint odio atque? Necessitatibus magnam explicabo,
				assumenda inventore debitis quia.
			</Typography>
			<Typography variant="body2">
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto,
				sed! Ipsa quos eaque ab ipsam debitis blanditiis quas, consectetur modi.
				Ex doloribus reprehenderit minima pariatur praesentium voluptatem
				commodi eligendi tempore.
			</Typography>
		</div>
	);
};

export default MuiTypography;
