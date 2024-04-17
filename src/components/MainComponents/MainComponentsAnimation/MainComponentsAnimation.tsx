import bag from '../../../assets/bag.svg'
import kid from '../../../assets/kid.svg'
import men from '../../../assets/men 1.svg'
import shoes from '../../../assets/shoes.svg'
import women from '../../../assets/women 1.svg'
import './MainComponentsAnimation.scss'

const MainComponentsAnimation = () => {
	return (
		<div id='MainComponentsAnimation'>
			<div className='container'>
				<div className='MainComponentsAnimation'>
					<div className='MainComponentsAnimationCards'>
						<div className='MainComponentsAnimationCard'>
							<div className='MainComponentsAnimationCardInform'>
								<div className='MainComponentsAnimationCardInformName'>
									<h3>ЖЕНСКАЯ </h3>
									<h4>ОДЕЖДА</h4>
								</div>
								<h5>от 899 сом</h5>
								<button>КУПИТЬ</button>
							</div>
							<img src={women} alt='' />
						</div>
						<div className='MainComponentsAnimationCardSecond'>
							<img src={men} alt='' />
							<div className='MainComponentsAnimationCardInform'>
								<div className='MainComponentsAnimationCardInformName'>
									<h3>МУЖСКАЯ </h3>
									<h4>ОДЕЖДА</h4>
								</div>
								<h5>от 899 сом</h5>
								<button>КУПИТЬ</button>
							</div>
						</div>
						<div className='MainComponentsAnimationCardThird'>
							<div className='MainComponentsAnimationCardInform'>
								<div className='MainComponentsAnimationCardInformName'>
									<h3>ДЕТСКАЯ </h3>
									<h4>ОДЕЖДА</h4>
								</div>
								<h5>от 899 сом</h5>
								<button>КУПИТЬ</button>
							</div>
							<img src={kid} alt='' />
						</div>
					</div>
					<div className='MainComponentsAnimationCards2'>
						<div className='MainComponentsAnimationCard'>
							<div className='MainComponentsAnimationCardInform'>
								<div className='MainComponentsAnimationCardInformName'>
									<h3>ОБУВЬ </h3>
								</div>
								<h5>от 899 сом</h5>
								<button>КУПИТЬ</button>
							</div>
							<img src={shoes} alt='' />
						</div>
						<div className='MainComponentsAnimationCardSecond2'>
							<div className='MainComponentsAnimationCardInform'>
								<div className='MainComponentsAnimationCardInformName'>
									<h3>СУМКИ </h3>
								</div>
								<h5>от 899 сом</h5>
								<button>КУПИТЬ</button>
							</div>
							<img src={bag} alt='' />
						</div>
						<div className='MainComponentsAnimationCardThird3'>
							<img src={kid} alt='' />
							<div className='MainComponentsAnimationCardInform'>
								<div className='MainComponentsAnimationCardInformName'>
									<h3>СПЕЦ </h3>
									<h4>ОДЕЖДА</h4>
								</div>
								<h5>от 899 сом</h5>
								<button>КУПИТЬ</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default MainComponentsAnimation
