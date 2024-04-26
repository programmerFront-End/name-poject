import './MainComponentsHeader.scss'
import { IoMdArrowBack } from 'react-icons/io'
import admin from "../../../assets/Administration.svg"

const MainComponentsHeader: React.FC = () => {
	return (
		<div id='Header'>
			<div className='container'>
				<div className='header'>
					<button>
						<IoMdArrowBack />
					</button>
					<div className='Administration'>
						<div className='Admin'>
							<h3>Асанов Адилет</h3>
							<p>администратор</p>
						</div>
						<img src={admin} alt="" />
					</div>
				</div>
			</div>
		</div>
	)
}

export default MainComponentsHeader
