import React from 'react'
import MainComponentsAnimation from '../components/MainComponents/MainComponentsAnimation/MainComponentsAnimation'
import MainComponentsInform from '../components/MainComponents/MainComponentsInform/MainComponentsInform'
import MainComponentsProducts from '../components/MainComponents/MainComponentsProducts/MainComponentsProducts'
import MainComponentsProductsSecond from '../components/MainComponents/MainComponentsProductsSecond/MainComponentsProducts'

const MainComponentsPage: React.FC = () => {
	return (
		<div>
			<MainComponentsInform />
			<MainComponentsProducts />
			<MainComponentsAnimation />
			<MainComponentsProductsSecond />
		</div>
	)
}

export default MainComponentsPage
