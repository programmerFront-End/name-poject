import React, { useState } from 'react'
import { GrFormNext } from 'react-icons/gr'
import { IoChevronBackSharp } from 'react-icons/io5'
import { LuPencilLine } from 'react-icons/lu'
import './MainComponentsAddition.scss'

interface AValues {
	name: string
	price: number
	category: string
	sale: number
	size: string[]
	description: string
	images: string[]
}

const MainComponentsAddition: React.FC = () => {
	const [buttonStates, setButtonStates] = useState({
		XS: false,
		S: false,
		M: false,
		L: false,
		XL: false,
		XXL: false,
		XXXL: false
	})

	const [valuesProduct, setValuesProduct] = useState<AValues>({
		name: '',
		price: 0,
		category: '',
		sale: 0,
		size: [],
		description: '',
		images: []
	})

	const [firstSetImages, setFirstSetImages] = useState<string[]>([])
	const [secondSetImages, setSecondSetImages] = useState<string[]>([])
	const [thirdSetImages, setThirdSetImages] = useState<string[]>([])

	const [images, setImages] = useState<string[]>([])

	const handleSizeClick = (size: string) => {
		setButtonStates(prevStates => ({
			...prevStates,
			[size]: !prevStates[size]
		}))
	}

	const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files) {
			const filesArray = Array.from(e.target.files).map(file =>
				URL.createObjectURL(file)
			)
			setImages(filesArray)
			setImages([...images, ...filesArray]) // Update images state
		}
	}

	const handleImageUploadFirst = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files) {
			const filesArray = Array.from(e.target.files).map(file =>
				URL.createObjectURL(file)
			)
			setFirstSetImages(filesArray)
			setFirstSetImages([...firstSetImages, ...filesArray]) // Update images state
		}
	}

	const handleImageUploadSecond = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files) {
			const filesArray = Array.from(e.target.files).map(file =>
				URL.createObjectURL(file)
			)
			setSecondSetImages(filesArray)
			setSecondSetImages([...secondSetImages, ...filesArray]) // Update images state
		}
	}

	const handleImageUploadThird = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files) {
			const filesArray = Array.from(e.target.files).map(file =>
				URL.createObjectURL(file)
			)
			setThirdSetImages(filesArray)
			setThirdSetImages([...thirdSetImages, ...filesArray]) // Update images state
		}
	}

	const handleCreateClick = () => {
		// Получение значений из всех полей формы
		const name =
			document.querySelector<HTMLInputElement>('#productName')?.value || ''
		const price = parseFloat(
			document.querySelector<HTMLInputElement>('#productPrice')?.value || '0'
		)
		const category =
			document.querySelector<HTMLSelectElement>('#productCategory')?.value || ''
		const sale = parseFloat(
			document.querySelector<HTMLSelectElement>('#productSale')?.value || '0'
		)
		const size = Object.keys(buttonStates).filter(key => buttonStates[key])
		const description =
			document.querySelector<HTMLTextAreaElement>('#productDescription')
				?.value || ''

		// Используйте полученные значения по вашему усмотрению
		console.log('Name:', name)
		console.log('Price:', price)
		console.log('Category:', category)
		console.log('Sale:', sale)
		console.log('Size:', size)
		console.log('Description:', description)
		console.log('Images:', images)
	}

	return (
		<div id='Add'>
			<div className='container'>
				<div className='add'>
					<div className='MainComAddPhotoGeneral'>
						<div className='MainComAddPhotos'>
							<h2>Создание новой карточки</h2>
							<div className='MainComAddPhoto'>
								<button className='next'>
									<GrFormNext />
								</button>
								<div className='MainComAddPhotoArea'>
									{images.length > 0 ? (
										<div className='uploaded-images'>
											{images.map((image, index) => (
												<img key={index} src={image} alt={`Image ${index}`} />
											))}
										</div>
									) : (
										<div className='file-input-container'>
											<input
												type='file'
												name='fileInput'
												id='fileInput'
												className='file-input'
												accept='image/*'
												onChange={handleImageUpload}
												multiple
											/>
											<label htmlFor='fileInput' className='file-input-label'>
												<span style={{ color: 'white' }}>Загрузите фото</span>
											</label>
										</div>
									)}
								</div>
								<button>
									<IoChevronBackSharp />
								</button>
							</div>
							<div className='MainComAddPhotoSecond'>
								<div className='addPhotoFirst'>
									{firstSetImages.length > 0 ? (
										<div className='uploaded-images'>
											{firstSetImages.map((image, index) => (
												<img key={index} src={image} alt={`Image ${index}`} />
											))}
										</div>
									) : (
										<div className='file-input-container1'>
											<input
												type='file'
												name='fileInput'
												id='fileInput'
												className='file-input1'
												accept='image/*'
												onChange={handleImageUploadFirst}
												multiple
											/>
											<label htmlFor='fileInput' className='file-input-label1'>
												<span style={{ color: 'white' }}>+</span>
											</label>
										</div>
									)}
								</div>
								<div className='addPhotoFirst'>
									{secondSetImages.length > 0 ? (
										<div className='uploaded-images'>
											{secondSetImages.map((image, index) => (
												<img key={index} src={image} alt={`Image ${index}`} />
											))}
										</div>
									) : (
										<div className='file-input-container1'>
											<input
												type='file'
												name='fileInput'
												id='fileInput'
												className='file-input1'
												accept='image/*'
												onChange={handleImageUploadSecond}
												multiple
											/>
											<label htmlFor='fileInput' className='file-input-label1'>
												<span style={{ color: 'white' }}>+</span>
											</label>
										</div>
									)}
								</div>
								<div className='addPhotoFirst'>
									{thirdSetImages.length > 0 ? (
										<div className='uploaded-images'>
											{thirdSetImages.map((image, index) => (
												<img key={index} src={image} alt={`Image ${index}`} />
											))}
										</div>
									) : (
										<div className='file-input-container1'>
											<input
												type='file'
												name='fileInput'
												id='fileInput'
												className='file-input1'
												accept='image/*'
												onChange={handleImageUploadThird}
												multiple
											/>
											<label htmlFor='fileInput' className='file-input-label1'>
												<span style={{ color: 'white' }}>+</span>
											</label>
										</div>
									)}
								</div>
							</div>
						</div>
					</div>
					<div className='MainComAddTexts'>
						<div className='MainComAddSelect'>
							<h3>Название товара</h3>
							<input
								id='productName'
								type='text'
								placeholder='Название товара'
								value={valuesProduct.name}
								onChange={e =>
									setValuesProduct({ ...valuesProduct, name: e.target.value })
								}
							/>
						</div>
						<div className='MainComAddSelect'>
							<h3>Категория товара</h3>
							<select
								id='productCategory'
								value={valuesProduct.category}
								onChange={e =>
									setValuesProduct({
										...valuesProduct,
										category: e.target.value
									})
								}
							>
								<option>футболка</option>
								<option>брюки</option>
								<option>куртки</option>
							</select>
						</div>
						<div className='MainComAddPrice'>
							<div className='MainComAddPriceFirst'>
								<h3>Цена</h3>
								<input
									id='productPrice'
									type='text'
									placeholder='400с'
									value={valuesProduct.price}
									onChange={e =>
										setValuesProduct({
											...valuesProduct,
											price: +e.target.value
										})
									}
								/>
							</div>
							<div className='MainComAddPriceSecond'>
								<h3>Скидки</h3>
								<select
									id='productSale'
									value={valuesProduct.sale}
									onChange={e =>
										setValuesProduct({
											...valuesProduct,
											sale: +e.target.value
										})
									}
								>
									<option value='10'>10%</option>
									<option value='20'>20%</option>
									<option value='30'>30%</option>
									<option value='40'>40%</option>
									<option value='50'>50%</option>
									<option value='60'>60%</option>
									<option value='70'>70%</option>
									<option value='80'>80%</option>
									<option value='90'>90%</option>
									<option value='100'>100%</option>
								</select>
							</div>
						</div>
						<div className='MainComAddSize'>
							<h3>Размер</h3>
							<div className='MainComAddSizes'>
								{Object.keys(buttonStates).map(size => (
									<button
										key={size}
										className={buttonStates[size] ? 'selected' : ''}
										onClick={() => handleSizeClick(size)}
									>
										{size}
									</button>
								))}
							</div>
						</div>
						<div className='MainComAddDes'>
							<div className='texts'>
								<h3>Описание товара</h3>
								<h3>
									<LuPencilLine />
								</h3>
							</div>
							<textarea
								id='productDescription'
								value={valuesProduct.description}
								onChange={e =>
									setValuesProduct({
										...valuesProduct,
										description: e.target.value
									})
								}
							></textarea>
						</div>
						<button className='MainComAddCreate' onClick={handleCreateClick}>
							Создать
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default MainComponentsAddition
