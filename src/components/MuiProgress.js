import React, { useState, useEffect } from "react";
import { Stack, CircularProgress } from "@mui/material";

const MuiProgress = () => {
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			setProgress((prevProgress) =>
				prevProgress >= 100 ? 0 : prevProgress + 10
			);
		}, 800);

		return () => {
			clearInterval(timer);
		};
	}, []);

	return (
		<Stack
			sx={{ color: "grey.500", marginTop: "1rem" }}
			spacing={2}
			direction="row"
		>
			<CircularProgress />
			<CircularProgress color="secondary" />
			<CircularProgress color="success" />
			<CircularProgress color="inherit" />
			<CircularProgress color="error" />
			<CircularProgress
				variant="determinate"
				value={progress}
				color="secondary"
			/>
		</Stack>
	);
};

export default MuiProgress;
