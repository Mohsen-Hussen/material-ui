import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";

const MuiTimeline = () => {
	return (
		<Timeline position="alternate">
			<TimelineItem>
				<TimelineOppositeContent color="text.secondary">
					09:30 am
				</TimelineOppositeContent>
				<TimelineSeparator>
					<TimelineDot color="secondary" />
					<TimelineConnector />
				</TimelineSeparator>
				<TimelineContent>Eat</TimelineContent>
			</TimelineItem>
			<TimelineItem>
				<TimelineOppositeContent color="text.secondary">
					10:30 am
				</TimelineOppositeContent>
				<TimelineSeparator>
					<TimelineDot color="success" variant="outlined" />
					<TimelineConnector />
				</TimelineSeparator>
				<TimelineContent>Code</TimelineContent>
			</TimelineItem>
			<TimelineItem>
				<TimelineOppositeContent color="text.secondary">
					11:30 am
				</TimelineOppositeContent>
				<TimelineSeparator>
					<TimelineDot color="error" />
				</TimelineSeparator>
				<TimelineContent>Sleep</TimelineContent>
			</TimelineItem>
		</Timeline>
	);
};

export default MuiTimeline;
