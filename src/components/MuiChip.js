import React, { useState } from "react";
import { Chip, Stack } from "@mui/material";
import FaceIcon from "@mui/icons-material/Face";

const MuiChip = () => {
	const [chips, setChips] = useState(["chip 1", "chip 2", "chip 3"]);
	const handleDelete = () => {
		console.log("delete");
	};
	return (
		<Stack direction="row" spacing={1}>
			<Chip label="Chip Filled" />
			<Chip label="Chip Outlined" variant="outlined" />
			<Chip
				color="secondary"
				size="small"
				onDelete={handleDelete}
				icon={<FaceIcon />}
				label="Save Child"
			/>
			{chips.map((chip, index) => {
				return (
					<Chip
						key={index}
						label={chip}
						onDelete={() => {
							setChips(chips.filter((c, i) => i !== index));
						}}
					/>
				);
			})}
		</Stack>
	);
};

export default MuiChip;
