import Inform1 from '../../../assets/Inform1.svg'
import Inform2 from '../../../assets/Inform2.svg'
import Inform3 from '../../../assets/Inform3.svg'
import MainComponentsPage from '../../../Pages/MainComponentsPage'
import './MainComponentsInform.scss'

const MainComponentsInform = () => {
	return (
		<div id='MainComponentsInform'>
			<div className='container'>
				<div className='MainComponentsInform'>
					<div className='MainComponentsInformFirst'>
						<img src={Inform1} alt='' />
						<div className='MainComponentsTexts'>
							<h4>Мы первые!</h4>
							<h4>Первый маркетплейс рынка дордой</h4>
						</div>
					</div>
					<div className='MainComponentsInformFirst'>
						<img src={Inform2} alt='' />
						<div className='MainComponentsTexts'>
							<h4>Мы первые!</h4>
							<h4>Первый маркетплейс рынка дордой</h4>
						</div>
					</div>
					<div className='MainComponentsInformFirst'>
						<img src={Inform3} alt='' />
						<div className='MainComponentsTexts'>
							<h4>Мы первые!</h4>
							<h4>Первый маркетплейс рынка дордой</h4>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default MainComponentsInform
