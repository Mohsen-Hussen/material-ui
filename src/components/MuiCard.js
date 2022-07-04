import React from "react";
import {
	Box,
	Card,
	CardActions,
	CardContent,
	Button,
	Typography,
	CardMedia,
	Grid,
} from "@mui/material";

const MuiCard = () => {
	return (
		<Grid container spacing={3}>
			<Grid item xs={12} sm={6} lg={3}>
				<Box>
					<Card>
						<CardMedia
							component="img"
							height="194"
							image="https://source.unsplash.com/random"
							alt="Paella dish"
						/>
						<CardContent>
							<Typography variant="h5" component="div" gutterBottom>
								React
							</Typography>
							<Typography variant="body2" color="text.secondary">
								React makes it painless to create interactive UIs. Design simple
								views for each state in your application, and React will
								efficiently update and render just the right components when
								your data changes.
							</Typography>
						</CardContent>
						<CardActions>
							<Button size="small">Share</Button>
							<Button size="small">Learn More</Button>
						</CardActions>
					</Card>
				</Box>
			</Grid>
			<Grid item xs={12} sm={6} lg={3}>
				<Box>
					<Card>
						<CardMedia
							component="img"
							height="194"
							image="https://source.unsplash.com/random"
							alt="Paella dish"
						/>
						<CardContent>
							<Typography variant="h5" component="div" gutterBottom>
								React
							</Typography>
							<Typography variant="body2" color="text.secondary">
								React makes it painless to create interactive UIs. Design simple
								views for each state in your application, and React will
								efficiently update and render just the right components when
								your data changes.
							</Typography>
						</CardContent>
						<CardActions>
							<Button size="small">Share</Button>
							<Button size="small">Learn More</Button>
						</CardActions>
					</Card>
				</Box>
			</Grid>
			<Grid item xs={12} sm={6} lg={3}>
				<Box>
					<Card>
						<CardMedia
							component="img"
							height="194"
							image="https://source.unsplash.com/random"
							alt="Paella dish"
						/>
						<CardContent>
							<Typography variant="h5" component="div" gutterBottom>
								React
							</Typography>
							<Typography variant="body2" color="text.secondary">
								React makes it painless to create interactive UIs. Design simple
								views for each state in your application, and React will
								efficiently update and render just the right components when
								your data changes.
							</Typography>
						</CardContent>
						<CardActions>
							<Button size="small">Share</Button>
							<Button size="small">Learn More</Button>
						</CardActions>
					</Card>
				</Box>
			</Grid>
			<Grid item xs={12} sm={6} lg={3}>
				<Box>
					<Card>
						<CardMedia
							component="img"
							height="194"
							image="https://source.unsplash.com/random"
							alt="Paella dish"
						/>
						<CardContent>
							<Typography variant="h5" component="div" gutterBottom>
								React
							</Typography>
							<Typography variant="body2" color="text.secondary">
								React makes it painless to create interactive UIs. Design simple
								views for each state in your application, and React will
								efficiently update and render just the right components when
								your data changes.
							</Typography>
						</CardContent>
						<CardActions>
							<Button size="small">Share</Button>
							<Button size="small">Learn More</Button>
						</CardActions>
					</Card>
				</Box>
			</Grid>
		</Grid>
	);
};

export default MuiCard;
