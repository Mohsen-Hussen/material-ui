import React, { useState, useEffect } from "react";
import { Stack, Skeleton, Alert } from "@mui/material";

const MuiSkeleton = () => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 5000);
	}, []);
	return (
		<Stack spacing={1} width="250px" sx={{ marginTop: "1rem" }}>
			{loading ? (
				<>
					<Skeleton variant="text" animation="wave" />
					<Skeleton variant="circular" width={40} height={40} />
					<Skeleton variant="rectangular" width={210} height={118} />
				</>
			) : (
				<Alert variant="filled" severity="success">
					This is a success alert — check it out!
				</Alert>
			)}
		</Stack>
	);
};

export default MuiSkeleton;
