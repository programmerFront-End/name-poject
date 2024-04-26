import React from 'react'
import { SlCheck } from 'react-icons/sl'

import './FooterMainComponents.scss'

const FooterMainComponents: React.FC = () => {
	return (
		<footer id='footerMain'>
			<div className='container'>
				<div className='footerMain'>
					<div className='footerMainBlock'>
						<div className='footerMain1'>
							<h4>Информации</h4>
							<h5>Список продавцов</h5>
							<h5>Доставка</h5>
							<h5>О магазине</h5>
							<h5>Оплата</h5>
							<h5>Условия соглашения</h5>
							<h5>Контакты</h5>
							<h5>Возврат товара</h5>
							<h5>Производители</h5>
							<h5>Подарочные сертификаты</h5>
							<h5>Акции</h5>
						</div>
						<div className='footerMain1'>
							<h4>Контакты</h4>
							<h5>Список продавцов</h5>
							<h5>Доставка</h5>
							<h5>О магазине</h5>
							<h5>Оплата</h5>
							<h5>Условия соглашения</h5>
							<h5>Контакты</h5>
							<h5>Возврат товара</h5>
							<h5>Производители</h5>
							<h5>Подарочные сертификаты</h5>
							<h5>Акции</h5>
						</div>
					</div>
					<div className='footerMainBlock Desktop'>
						<div className='footerMainBlock'>
							<div className='footerMain1'>
								<h4>Время работы</h4>
								<h5>Пн-Пт: с 9 до 18</h5>
								<h5>Сб: с 10 до 17</h5>
								<h5>Вс: с 11 до 16</h5>
							</div>
							<div className='footerMain1'>
								<h4>Контакты</h4>
								<h5>Список продавцов</h5>
								<h5>Доставка</h5>
								<h5>О магазине</h5>
								<h5>Оплата</h5>
								<h5>Условия соглашения</h5>
								<h5>Контакты</h5>
								<h5>Возврат товара</h5>
							</div>
						</div>
						<h4>
							{' '}
							<SlCheck /> Я прочитал Условия соглашения и согласен с условиями
						</h4>
					</div>
				</div>
			</div>
			<hr className='hr' />
			<div className='container'>
				<div className='footerMainEnd'>
					<div className='footerMainEndBlock'>
						<h3>Работает на OpenCart "Русская сборка"</h3>
						<h3>dordoi-online.ru © 2024</h3>
					</div>
					<div className='footerMainEndBlock'>
						<h3>Работает на OpenCart "Русская сборка"</h3>
						<h3>dordoi-online.ru © 2024</h3>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default FooterMainComponents
