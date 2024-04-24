import { IconButton } from '@mui/material'
import { HiArrowLeft } from 'react-icons/hi'
import { IoSearch } from 'react-icons/io5'
// import { RiAccountCircleFill } from 'react-icons/ri'
import Man from '../../../assets/man.svg'
import './MainComoponentsReportCom.scss'
const MainComoponentsReportCom: React.FC = () => {
	return (
		<div>
			<div id='MainComoponentsReportCom'>
				<div className='container'>
					<div className='MainComoponentsReportCom'>
						<div className='MainComoponentsReportComicon'>
							<HiArrowLeft />
						</div>
						<div className='headerMainInput'>
							<input type='text' placeholder='Поиск...' />
							<div className='headerMainInputSearch'>
								<IconButton>
									<IoSearch />
								</IconButton>
							</div>
						</div>
						<div className='MainComoponentsReportCommanfoto'>
							<div className='MainComoponentsReportComman'>
								<h2>Турсумаматов Баястан</h2>
								<h2>администратор</h2>
							</div>
							<img src={Man} alt="" />
							{/* <RiAccountCircleFill className='MainComoponentsReportCommanicon' /> */}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default MainComoponentsReportCom
