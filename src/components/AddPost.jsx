import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, styled, TextField, Tooltip, Typography } from '@mui/material'
import { Add, EmojiEmotions, Collections, CameraAlt, Send } from '@mui/icons-material'
import React from 'react'


const StyledModal = styled(Modal)({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
})
const UserBox = styled(Box)({
	display: 'flex',
	alignItems: 'center',
	gap: '10px',
	mb: '10px',
})

const AddPost = () => {
	const [open, setOpen] = React.useState(false)

	return (
		<>
			<Tooltip onClick={e => setOpen(true)} title="Add Post" sx={{ position: 'fixed', bottom: 20, left: { xs: "calc(50% - 25px)", md: 30 } }}>
				<Fab color="primary" aria-label="add">
					<Add />
				</Fab>
			</Tooltip>
			<StyledModal
				open={open}
				onClose={e => setOpen(false)}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box width={500} height={300} bgcolor={'background.default'} color={'text.primary'} p={3} borderRadius={5}>
					<Typography variant='h6' color='gray' textAlign='center'>Create Post</Typography>
					<UserBox>
						<Avatar alt="Jon Crosse" src="/static/images/avatar/1.jpg" sx={{ width: 30, height: 30 }} />
						<Typography fontWeight={500} variant='span'>Jon Crosse</Typography>
					</UserBox>
					<TextField
						sx={{ width: '100%' }}
						id="standard-multiline-static"
						multiline
						rows={4}
						placeholder="Add post here"
						variant="standard"
					/>
					<Stack direction="row" gap={1} mt={2} mb={3}>
						<EmojiEmotions color='primary' />
						<Collections color='error' />
						<CameraAlt color='secondary' />
					</Stack>
					<ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group">
						<Button><Send color='white' /></Button>
					</ButtonGroup>
				</Box>
			</StyledModal>
		</>
	)
}

export default AddPost