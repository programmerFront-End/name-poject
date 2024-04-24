import React from 'react'
import { RxDashboard } from 'react-icons/rx'
import './MainComponentsheader2.scss'

const MainComponentsheader2: React.FC = () => {
	return (
		<div id='MainComponentsheader2'>
			<div className='container'>
				<div className='MainComponentsheader2'>
					<div className='MainComponentsheader2categori'>
						<select className='select'>
							<option>все категории</option>
							<option>Обувь</option>
							<option>Рубашку</option>
							<option>Рубашку</option>
							<option>Рубашку</option>
						</select>
					</div>
					<div className='MainComponentsheader2sozdait'>
						<button>
							Создать новую карточку
							<RxDashboard className='sozdat' />
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default MainComponentsheader2
