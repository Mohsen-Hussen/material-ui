import React from "react";
import {
	Box,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Divider,
	Avatar,
	ListItemAvatar,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";

const MuiList = () => {
	return (
		<Box
			sx={{
				width: "100%",
				maxWidth: 360,
				bgcolor: "background.paper",
				marginTop: "1rem",
			}}
		>
			<nav aria-label="main mailbox folders">
				<List>
					<ListItem disablePadding>
						<ListItemButton>
							<ListItemIcon>
								<ListItemAvatar>
									<Avatar>
										<InboxIcon />
									</Avatar>
								</ListItemAvatar>
							</ListItemIcon>
							<ListItemText primary="Inbox" secondary="secondary text" />
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton>
							<ListItemIcon>
								<ListItemAvatar>
									<Avatar>
										<DraftsIcon />
									</Avatar>
								</ListItemAvatar>
							</ListItemIcon>
							<ListItemText primary="Drafts" secondary="secondary text" />
						</ListItemButton>
					</ListItem>
				</List>
			</nav>
			<Divider />
			<nav aria-label="secondary mailbox folders">
				<List>
					<ListItem disablePadding>
						<ListItemButton>
							<ListItemText primary="Trash" />
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton component="a" href="#simple-list">
							<ListItemText primary="Spam" />
						</ListItemButton>
					</ListItem>
				</List>
			</nav>
		</Box>
	);
};

export default MuiList;
