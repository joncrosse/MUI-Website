import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'
import { MoreVert, Favorite, Share, FavoriteBorder } from '@mui/icons-material'

import React from 'react'

const Posts = () => {
	return (
		<Card sx={{margin: 5}}>
			<CardHeader
				avatar={
					<Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
						J
					</Avatar>
				}
				action={
					<IconButton aria-label="settings">
						<MoreVert />
					</IconButton>
				}
				title="Jon Crosse"
				subheader="July 5, 2022"
			/>
			<CardMedia
				component="img"
				height="20%"
				image="https://images.freeimages.com/images/large-previews/da0/diwali-1179941.jpg"
				alt="Paella dish"
			/>
			<CardContent>
				<Typography variant="body2" color="text.secondary">
					Forth of July was a great day!
				</Typography>
			</CardContent>
			<CardActions disableSpacing>
				<IconButton aria-label="add to favorites">
					<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: 'red' }} />} />
				</IconButton>
				<IconButton aria-label="share">
					<Share />
				</IconButton>
			</CardActions>
		</Card>
		
	)
}

export default Posts