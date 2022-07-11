import React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

const MuiAvatar = () => {
	return (
		<Stack direction="row" spacing={4}>
			<Avatar
				alt="Remy Sharp"
				src="../../public/assets/avatar-1.jpg"
				sx={{ bgcolor: "primary.light" }}
			/>
			<Avatar
				alt="Travis Howard"
				src="../../public/assets/avatar-2.jpg"
				sx={{ bgcolor: "success.light" }}
			/>
		</Stack>
	);
};

export default MuiAvatar;
