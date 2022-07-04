import React, { useState } from "react";
import { Stack, Rating } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const MuiRating = () => {
	const [value, setValue] = useState(null);
	const handleRate = (e, newValue) => {
		setValue(newValue);
	};
	console.log({ value });
	return (
		<Stack spacing={2}>
			<Rating value={value} onChange={handleRate} precision={0.5} />
			<Rating
				value={value}
				onChange={handleRate}
				precision={0.5}
				icon={<FavoriteIcon fontSize="inherit" color="error" />}
				emptyIcon={<FavoriteBorderIcon fontSize="inherit" color="error" />}
			/>
		</Stack>
	);
};

export default MuiRating;
