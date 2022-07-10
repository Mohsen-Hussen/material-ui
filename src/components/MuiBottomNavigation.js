import React, { useState } from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const MuiBottomNavigation = () => {
	const [value, setValue] = useState(0);
	return (
		<BottomNavigation
			sx={{
				width: "90%",
				position: "absolute",
				bottom: "0",
			}}
			value={value}
			onChange={(event, newValue) => setValue(newValue)}
			showLabels
		>
			<BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
			<BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
			<BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
		</BottomNavigation>
	);
};

export default MuiBottomNavigation;
