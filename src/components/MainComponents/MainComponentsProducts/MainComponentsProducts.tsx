import { useState } from 'react'
import { FaRegHeart } from 'react-icons/fa6'
import star from '../../../assets/star (1) .svg'
import '../../MainComponents/MainComponentsProducts/MainComponentsProducts.scss'

const MainComponentsProducts = () => {
	const [isInCart, setIsInCart] = useState<boolean>(false)

	function handleAddToCart() {
		if (isInCart) {
			setIsInCart(false)
		} else {
			setIsInCart(true)
		}
	}

	return (
		<div id='MainComponentsProducts'>
			<div className='container'>
				<div className='MainComponentsProducts'>
					<div className='MainComponentsProductsCards'>
						<div className='MainComponentsProductsCard'>
							<div className='MainComponentsProductsCardImg'>
								<img
									src='https://images.teemill.com/30k8ake9itoiwls8g6wa6tvfxqwjsieyvpuhscj4wacd4sna.png.png?w=1080&h=auto'
									alt=''
								/>
								<button className='heart'>
									<FaRegHeart />
								</button>
							</div>
							<div className='MainComponentsProductsCardInform'>
								<h3>Футболка красная</h3>
								<div className='MainComponentsProductsCardInformPrice'>
									<h3>799 с</h3>
									<h3 className='secondPrice'>799 с</h3>
								</div>
								<div className='MainComponentsProductsCardInformEvaluation'>
									<img className='star' src={star} alt='' />
									<h5>4.7 </h5>
									<h5>• 550 оценок</h5>
								</div>
								{isInCart ? (
									<button className='basket'>Уже в корзине</button>
								) : (
									<button className='addToInBasket' onClick={handleAddToCart}>
										Добавить в корзину
									</button>
								)}
							</div>
						</div>
						<div className='MainComponentsProductsCard'>
							<div className='MainComponentsProductsCardImg'>
								<img
									src='https://images.teemill.com/30k8ake9itoiwls8g6wa6tvfxqwjsieyvpuhscj4wacd4sna.png.png?w=1080&h=auto'
									alt=''
								/>
								<button className='heart'>
									<FaRegHeart />
								</button>
							</div>
							<div className='MainComponentsProductsCardInform'>
								<h3>Футболка красная</h3>
								<div className='MainComponentsProductsCardInformPrice'>
									<h3>799 с</h3>
									<h3 className='secondPrice'>799 с</h3>
								</div>
								<div className='MainComponentsProductsCardInformEvaluation'>
									<img className='star' src={star} alt='' />
									<h5>4.7 </h5>
									<h5>• 550 оценок</h5>
								</div>
								{isInCart ? (
									<button className='basket'>Уже в корзине</button>
								) : (
									<button className='addToInBasket' onClick={handleAddToCart}>
										Добавить в корзину
									</button>
								)}
							</div>
						</div>
						<div className='MainComponentsProductsCard'>
							<div className='MainComponentsProductsCardImg'>
								<img
									src='https://images.teemill.com/30k8ake9itoiwls8g6wa6tvfxqwjsieyvpuhscj4wacd4sna.png.png?w=1080&h=auto'
									alt=''
								/>
								<button className='heart'>
									<FaRegHeart />
								</button>
							</div>
							<div className='MainComponentsProductsCardInform'>
								<h3>Футболка красная</h3>
								<div className='MainComponentsProductsCardInformPrice'>
									<h3>799 с</h3>
									<h3 className='secondPrice'>799 с</h3>
								</div>
								<div className='MainComponentsProductsCardInformEvaluation'>
									<img className='star' src={star} alt='' />
									<h5>4.7 </h5>
									<h5>• 550 оценок</h5>
								</div>
								{isInCart ? (
									<button className='basket'>Уже в корзине</button>
								) : (
									<button className='addToInBasket' onClick={handleAddToCart}>
										Добавить в корзину
									</button>
								)}
							</div>
						</div>
						<div className='MainComponentsProductsCard'>
							<div className='MainComponentsProductsCardImg'>
								<img
									src='https://images.teemill.com/30k8ake9itoiwls8g6wa6tvfxqwjsieyvpuhscj4wacd4sna.png.png?w=1080&h=auto'
									alt=''
								/>
								<button className='heart'>
									<FaRegHeart />
								</button>
							</div>
							<div className='MainComponentsProductsCardInform'>
								<h3>Футболка красная</h3>
								<div className='MainComponentsProductsCardInformPrice'>
									<h3>799 с</h3>
									<h3 className='secondPrice'>799 с</h3>
								</div>
								<div className='MainComponentsProductsCardInformEvaluation'>
									<img className='star' src={star} alt='' />
									<h5>4.7 </h5>
									<h5>• 550 оценок</h5>
								</div>
								{isInCart ? (
									<button className='basket'>Уже в корзине</button>
								) : (
									<button className='addToInBasket' onClick={handleAddToCart}>
										Добавить в корзину
									</button>
								)}
							</div>
						</div>
						<div className='MainComponentsProductsCard'>
							<div className='MainComponentsProductsCardImg'>
								<img
									src='https://images.teemill.com/30k8ake9itoiwls8g6wa6tvfxqwjsieyvpuhscj4wacd4sna.png.png?w=1080&h=auto'
									alt=''
								/>
								<button className='heart'>
									<FaRegHeart />
								</button>
							</div>
							<div className='MainComponentsProductsCardInform'>
								<h3>Футболка красная</h3>
								<div className='MainComponentsProductsCardInformPrice'>
									<h3>799 с</h3>
									<h3 className='secondPrice'>799 с</h3>
								</div>
								<div className='MainComponentsProductsCardInformEvaluation'>
									<img className='star' src={star} alt='' />
									<h5>4.7 </h5>
									<h5>• 550 оценок</h5>
								</div>
								{isInCart ? (
									<button className='basket'>Уже в корзине</button>
								) : (
									<button className='addToInBasket' onClick={handleAddToCart}>
										Добавить в корзину
									</button>
								)}
							</div>
						</div>
						<div className='MainComponentsProductsCard'>
							<div className='MainComponentsProductsCardImg'>
								<img
									src='https://images.teemill.com/30k8ake9itoiwls8g6wa6tvfxqwjsieyvpuhscj4wacd4sna.png.png?w=1080&h=auto'
									alt=''
								/>
								<button className='heart'>
									<FaRegHeart />
								</button>
							</div>
							<div className='MainComponentsProductsCardInform'>
								<h3>Футболка красная</h3>
								<div className='MainComponentsProductsCardInformPrice'>
									<h3>799 с</h3>
									<h3 className='secondPrice'>799 с</h3>
								</div>
								<div className='MainComponentsProductsCardInformEvaluation'>
									<img className='star' src={star} alt='' />
									<h5>4.7 </h5>
									<h5>• 550 оценок</h5>
								</div>
								{isInCart ? (
									<button className='basket'>Уже в корзине</button>
								) : (
									<button className='addToInBasket' onClick={handleAddToCart}>
										Добавить в корзину
									</button>
								)}
							</div>
						</div>
						<div className='MainComponentsProductsCard'>
							<div className='MainComponentsProductsCardImg'>
								<img
									src='https://images.teemill.com/30k8ake9itoiwls8g6wa6tvfxqwjsieyvpuhscj4wacd4sna.png.png?w=1080&h=auto'
									alt=''
								/>
								<button className='heart'>
									<FaRegHeart />
								</button>
							</div>
							<div className='MainComponentsProductsCardInform'>
								<h3>Футболка красная</h3>
								<div className='MainComponentsProductsCardInformPrice'>
									<h3>799 с</h3>
									<h3 className='secondPrice'>799 с</h3>
								</div>
								<div className='MainComponentsProductsCardInformEvaluation'>
									<img className='star' src={star} alt='' />
									<h5>4.7 </h5>
									<h5>• 550 оценок</h5>
								</div>
								{isInCart ? (
									<button className='basket'>Уже в корзине</button>
								) : (
									<button className='addToInBasket' onClick={handleAddToCart}>
										Добавить в корзину
									</button>
								)}
							</div>
						</div>
						<div className='MainComponentsProductsCard'>
							<div className='MainComponentsProductsCardImg'>
								<img
									src='https://images.teemill.com/30k8ake9itoiwls8g6wa6tvfxqwjsieyvpuhscj4wacd4sna.png.png?w=1080&h=auto'
									alt=''
								/>
								<button className='heart'>
									<FaRegHeart />
								</button>
							</div>
							<div className='MainComponentsProductsCardInform'>
								<h3>Футболка красная</h3>
								<div className='MainComponentsProductsCardInformPrice'>
									<h3>799 с</h3>
									<h3 className='secondPrice'>799 с</h3>
								</div>
								<div className='MainComponentsProductsCardInformEvaluation'>
									<img className='star' src={star} alt='' />
									<h5>4.7 </h5>
									<h5>• 550 оценок</h5>
								</div>
								{isInCart ? (
									<button className='basket'>Уже в корзине</button>
								) : (
									<button className='addToInBasket' onClick={handleAddToCart}>
										Добавить в корзину
									</button>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default MainComponentsProducts
