import React from 'react'
import SearchIcon from '@mui/icons-material/Search'
import { IconButton } from '@mui/material'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined'
import './HeaderMainComponents.scss'

const HeaderMainComponents: React.FC = () => {
	return (
		<header id='headerMain'>
			<div className='container'>
				<div className='headerMain'>
					<div className='headerMainNav'>
						<h1>
							d<span>o</span>rd<span>o</span>i
						</h1>
						<h2>market</h2>
					</div>
					<div className='headerMainSelect'>
						<select>
							<option>USD</option>
							<option>USD</option>
							<option>USD</option>
						</select>
					</div>
					<div className='headerMainInput'>
						<input type='search' placeholder='Искать товары' />
						<div className='headerMainInputSearch'>
							<IconButton>
								<SearchIcon />
							</IconButton>
						</div>
					</div>
					<div className='headerMainIcons'>
						<div className='headerMainUser'>
							<IconButton>
								<PersonOutlinedIcon />
							</IconButton>
						</div>
						<div className='headerMainBag'>
							<h5>2</h5>
							<IconButton>
								<ShoppingBagOutlinedIcon />
							</IconButton>
						</div>
					</div>
				</div>
				<div className='container'>
					<div className='headerMainInput s'>
						{' '}
						<input type='search' placeholder='Искать товары' />
						<div className='headerMainInputSearch'>
							{' '}
							<IconButton>
								<SearchIcon />{' '}
							</IconButton>
						</div>{' '}
					</div>
				</div>
			</div>
		</header>
	)
}

export default HeaderMainComponents
