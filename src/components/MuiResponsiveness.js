import React from "react";
import { Box } from "@mui/material";

const MuiResponsiveness = () => {
	return (
		<Box
			sx={{
				width: {
					xs: "100", // 0 to 600
					sm: "200", // 600 to 900
					md: "300", // 900 to 1200
					lg: "400", // 1200 to 1536
					xl: "500", // 1536
				},
				height: "300px",
				bgcolor: "secondary.main",
			}}
		></Box>
	);
};

export default MuiResponsiveness;
