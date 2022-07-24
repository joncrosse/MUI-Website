import { Mail, Pets, Notifications } from '@mui/icons-material'
import { Badge, AppBar, Box, InputBase, styled, Toolbar, Typography, Avatar, MenuItem, Menu } from '@mui/material'
import React from 'react'


const StylesToolbar = styled(Toolbar)({
	display: 'flex',
	justifyContent: 'space-between',
})

const SearchBar = styled('div')(({ theme }) => ({
	backgroundColor: 'white',
	padding: "0 10px",
	borderRadius: theme.shape.borderRadius,
	width: '40%'
}))

const Icons = styled(Box)(({ theme }) => ({
	display: 'none',
	gap: '20px',
	alignItems: 'center',
	[theme.breakpoints.up('sm')]: {
		display: 'flex'
	}
}))

const UserBox = styled(Box)(({ theme }) => ({
	display: 'flex',
	gap: '10px',
	alignItems: 'center',
	[theme.breakpoints.up('sm')]: {
		display: 'none'
	}
}))

const Navbar = () => {
	const [open, setOpen] = React.useState(false)
	return (
		<AppBar position='sticky'>
			<StylesToolbar>
				<Typography variant='h6' sx={{ display: { xs: 'none', sm: 'block' } }}>
					BookFace
				</Typography>
				<Pets sx={{ display: { xs: 'block', sm: 'none' } }} />
				<SearchBar><InputBase placeholder='search...' /></SearchBar>
				<Icons>
					<Badge badgeContent={4} color="error">
						<Mail />
					</Badge>
					<Badge badgeContent={2} color="error">
						<Notifications />
					</Badge>
					<Avatar sx={{ width: 30, height: 30 }} alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" onClick={e => setOpen(true)}/>
					
				</Icons>
				<UserBox onClick={e => setOpen(true)}>
					<Avatar sx={{ width: 30, height: 30 }} alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
					<Typography variant='span'>Jon Crosse</Typography>
				</UserBox>
			</StylesToolbar>
			<Menu
				id="demo-positioned-menu"
				aria-labelledby="demo-positioned-button"
				open={open}
				onClose={(e) => setOpen(false)}
				anchorOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
			>
				<MenuItem >Profile</MenuItem>
				<MenuItem >My account</MenuItem>
				<MenuItem >Logout</MenuItem>
			</Menu>
		</AppBar>
	)
}

export default Navbar