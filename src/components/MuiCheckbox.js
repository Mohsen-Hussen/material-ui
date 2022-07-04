import React, { useState } from "react";
import {
	Box,
	FormControlLabel,
	Checkbox,
	FormControl,
	FormLabel,
	FormGroup,
} from "@mui/material";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";

const MuiCheckbox = () => {
	const [acceptTnC, setAcceptTnC] = useState(false);
	const [skills, setSkills] = useState([]);

	const handleCheckbox = (e) => {
		setAcceptTnC(e.target.checked);
	};
	console.log({ acceptTnC });

	const handleSkills = (e) => {
		const index = skills.indexOf(e.target.value);
		// console.log({ index });
		if (index === -1) {
			setSkills([...skills, e.target.value]);
		} else {
			setSkills(skills.filter((skill) => skill !== e.target.value));
		}
	};
	console.log({ skills });
	return (
		<Box>
			<Box>
				<FormControlLabel
					control={<Checkbox checked={acceptTnC} onChange={handleCheckbox} />}
					label="I acceptthe terms and conditions"
				/>
			</Box>
			{/* <Box>
				<Checkbox
					icon={<BookmarkBorderIcon />}
					checkedIcon={<BookmarkIcon />}
					checked={acceptTnC}
					onChange={handleCheckbox}
				/>
			</Box> */}
			<Box>
				<FormControl>
					<FormLabel>Skills</FormLabel>
					<FormGroup row>
						<FormControlLabel
							control={
								<Checkbox
									value="html"
									checked={skills.includes("html")}
									onChange={handleSkills}
								/>
							}
							label="HTML"
						/>
						<FormControlLabel
							control={
								<Checkbox
									value="css"
									checked={skills.includes("css")}
									onChange={handleSkills}
								/>
							}
							label="CSS"
						/>
						<FormControlLabel
							control={
								<Checkbox
									value="js"
									checked={skills.includes("js")}
									onChange={handleSkills}
								/>
							}
							label="JavaScript"
						/>
					</FormGroup>
				</FormControl>
			</Box>
		</Box>
	);
};

export default MuiCheckbox;
