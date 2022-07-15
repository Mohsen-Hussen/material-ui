import React, { useState } from "react";
import { Box, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import PhoneIcon from "@mui/icons-material/Phone";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonPinIcon from "@mui/icons-material/PersonPin";

const MuiTabs = () => {
	const [value, setValue] = useState("1");

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<Box sx={{ width: "100%", typography: "body1", marginTop: "1rem" }}>
			<TabContext value={value}>
				<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
					<TabList
						onChange={handleChange}
						aria-label="lab API tabs example"
						textColor="secondary"
						indicatorColor="secondary"
						centered
					>
						<Tab
							icon={<PhoneIcon />}
							aria-label="phone"
							label="Item One"
							value="1"
							iconPosition="start"
						/>
						<Tab
							icon={<FavoriteIcon />}
							aria-label="favorite"
							label="Item Two"
							value="2"
							iconPosition="bottom"
						/>
						<Tab
							icon={<PersonPinIcon />}
							aria-label="person"
							label="Item Three"
							value="3"
							iconPosition="end"
						/>
					</TabList>
				</Box>
				<TabPanel value="1">Item One</TabPanel>
				<TabPanel value="2">Item Two</TabPanel>
				<TabPanel value="3">Item Three</TabPanel>
			</TabContext>
		</Box>
	);
};

export default MuiTabs;
