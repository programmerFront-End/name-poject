import React, { useState } from 'react'
import './HeaderMainComponentsSecend.scss'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined'
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined'
import { FiAlignJustify } from 'react-icons/fi'
import { FiX } from 'react-icons/fi'

const HeaderMainComponentsSecend: React.FC = () => {
	const [modalHeaderCategoria, setModalHeaderCategoria] =
		useState<boolean>(false)

	function handleModalHeader() {
		if (modalHeaderCategoria) {
			setModalHeaderCategoria(false)
		} else {
			setModalHeaderCategoria(true)
		}
	}

	const [modalHeaderCategoria1, setModalHeaderCategoria1] =
		useState<boolean>(false)

	function handleModalHeader1() {
		if (modalHeaderCategoria1) {
			setModalHeaderCategoria1(false)
		} else {
			setModalHeaderCategoria1(true)
		}
	}

	return (
		<section id='bottomHeader'>
			<div className='container'>
				<div className='bottomHeader'>
					<div className='bottomHeaderNav'>
						<a className='main' href='#'>
							ГЛАВНАЯ
						</a>
						<a className='about' href='#'>
							О нас
						</a>
						<a className='new' href='#'>
							новинки
						</a>
						<a className='blog' href='#'>
							Блог
						</a>
						<a className='info' href='#'>
							информация
						</a>
						<a className='popular' href='#'>
							Популярные
						</a>
						<a className='sale' href='#'>
							sale
						</a>
						<a className='contacts' href='#'>
							контакты
						</a>
						<div className='bottomHeaderCategoriA'>
							<h4 onClick={handleModalHeader1}>
								{modalHeaderCategoria1 ? <FiX /> : <FiAlignJustify />}
							</h4>
							<div
								style={{
									display: modalHeaderCategoria1 ? 'flex' : 'none'
								}}
								className='bottomHeaderBlockModalA'
							>
								<a href='#'>ГЛАВНАЯ</a>
								<a href='#'>О нас</a>
								<a href='#'>новинки</a>
								<a href='#'>Блог </a>
								<a href='#'>информация</a>
								<a href='#'>Популярные</a>
								<a href='#'>sale</a>
								<a href='#'>контакты</a>
							</div>
						</div>
					</div>
					<div className='bottomHeaderCategori'>
						<h4 onClick={handleModalHeader}>
							КАТЕГОРИИ
							{modalHeaderCategoria ? (
								<KeyboardArrowUpOutlinedIcon />
							) : (
								<KeyboardArrowDownOutlinedIcon />
							)}
						</h4>
						<div
							style={{
								display: modalHeaderCategoria ? 'flex' : 'none'
							}}
							className='bottomHeaderBlockModal'
						>
							<a href='#'>Женщинам</a>
							<a href='#'>Мужчинам</a>
							<a href='#'>Детям</a>
							<a href='#'>Обувь </a>
							<a href='#'>Красота</a>
							<a href='#'>Дом</a>
							<a href='#'>Аксессуары</a>
							<a href='#'>Электроника</a>
							<a href='#'>Продукты</a>
							<a href='#'>Обувь</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default HeaderMainComponentsSecend
