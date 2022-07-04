import React, { useState } from "react";
import {
	Stack,
	Button,
	IconButton,
	ButtonGroup,
	ToggleButtonGroup,
	ToggleButton,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";

const MuiButton = () => {
	const [formats, setFormats] = useState([]);
	console.log(formats);
	const handleFormat = (event, newFormats) => {
		setFormats(newFormats);
	};
	return (
		<Stack spacing={4}>
			<Stack spacing={2} direction="row">
				<Button variant="text" href="https://www.google.com/" target="_blank">
					Text
				</Button>
				<Button variant="contained">Contained</Button>
				<Button variant="outlined">Outlined</Button>
			</Stack>
			<Stack spacing={2} direction="row">
				<Button variant="contained" color="primary">
					Primary
				</Button>
				<Button variant="test" color="secondary">
					Secondary
				</Button>
				<Button variant="outlined" color="error">
					Error
				</Button>
				<Button variant="contained" color="warning">
					Warning
				</Button>
				<Button variant="contained" color="info">
					Info
				</Button>
				<Button variant="contained" color="success">
					Success
				</Button>
			</Stack>
			<Stack spacing={2} direction="row" display="block">
				<Button variant="contained" color="primary" size="small">
					Small
				</Button>
				<Button variant="contained" color="secondary" size="medium">
					Meduim
				</Button>
				<Button variant="contained" color="warning" size="large">
					Warning
				</Button>
			</Stack>
			<Stack spacing={2} direction="row">
				<Button
					variant="contained"
					color="error"
					endIcon={<SendIcon />}
					disableElevation
					disableRipple
					onClick={() => console.log("clicked")}
				>
					Send
				</Button>
				<IconButton color="warning" size="large">
					<SendIcon />
				</IconButton>
			</Stack>
			<Stack direction="row">
				<ButtonGroup variant="outlined" color="error">
					<Button>Left</Button>
					<Button>Center</Button>
					<Button>Right</Button>
				</ButtonGroup>
				<ButtonGroup
					variant="contained"
					color="warning"
					orientation="vertical"
					size="small"
				>
					<Button>Left</Button>
					<Button>Center</Button>
					<Button>Right</Button>
				</ButtonGroup>
			</Stack>
			<Stack direction="row">
				<ToggleButtonGroup
					value={formats}
					onChange={handleFormat}
					aria-label="text formatting"
					size="small"
					color="success"
					orientation="vertical"
					exclusive
				>
					<ToggleButton value="bold" aria-label="bold">
						<FormatBoldIcon />
					</ToggleButton>
					<ToggleButton value="italic" aria-label="italic">
						<FormatItalicIcon />
					</ToggleButton>
					<ToggleButton value="underlined" aria-label="underlined">
						<FormatUnderlinedIcon />
					</ToggleButton>
				</ToggleButtonGroup>
			</Stack>
		</Stack>
	);
};

export default MuiButton;
