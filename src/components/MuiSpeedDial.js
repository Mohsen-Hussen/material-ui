import React from "react";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";
import EditIcon from "@mui/icons-material/Edit";

const MuiSpeedDial = () => {
	return (
		<SpeedDial
			ariaLabel="Navigation Speed dial"
			icon={<SpeedDialIcon openIcon={<EditIcon />} />}
			sx={{ position: "absolute", bottom: "16px", right: "16px" }}
		>
			<SpeedDialAction icon={<FileCopyIcon />} tooltipTitle="Copy" />
			<SpeedDialAction icon={<SaveIcon />} tooltipTitle="Save" />
			<SpeedDialAction icon={<PrintIcon />} tooltipTitle="Print" />
			<SpeedDialAction icon={<ShareIcon />} tooltipTitle="Share" />
		</SpeedDial>
	);
};

export default MuiSpeedDial;
