import React, {useState} from 'react'
import Alert from '../components/Alert'
import {fetchCreateProduct} from '../redux/actions'



const CreateProduct = () => {
	const [title, setTitle] = useState('')
	const [cost, setCost] = useState('')
	const [amount, setAmount] = useState('')
	const [maxAmount, setMaxAmount] = useState('')
	const [checkAlert, setChekAlert] = useState(false)


	const createNewPost = (event) => {
		event.preventDefault()

		const newProduct = {
			title, cost, amount, maxAmount, id: Date.now().toString()
		}
		for (const key in newProduct) {
			if(newProduct[key] === ''){return setChekAlert(true)}
		}
		setChekAlert(false)

		fetchCreateProduct(newProduct)

		setTitle('')
		setCost('')
		setAmount('')
		setMaxAmount('')
	}



	return(
		<div className="container border p-4 border-dark h-100 justify-content-center align-items-center" style={{width:'340px'}}>
			<h2>Создать товар</h2>
			<form onSubmit={createNewPost}>
				<div className="form-group">
					<label>Название товара</label>
					<input
						type="text"
						name="title"
						className="form-control"
						value={title}
						onChange={e => setTitle(e.target.value)}
					/>
				</div>
				<div className="form-group">
					<label>Стоимость</label>
					<input
						type="number"
						name="cost"
						className="form-control"
						value={cost}
						onChange={e => setCost(e.target.value)}
					/>
				</div>
				<div className="form-group">
					<label>Количество на складе</label>
					<input
						type="number"
						name="amount"
						className="form-control"
						value={amount}
						onChange={e => setAmount(e.target.value)}
					/>
				</div>
				<div className="form-group">
					<label>Максимум в одной корзине</label>
					<input
						type="number"
						name="maxAmount"
						className="form-control"
						value={maxAmount}
						onChange={e => setMaxAmount(e.target.value)}
					/>
				</div>
				{checkAlert && <Alert text="Заполните правильно все поля"/>}
				<button type="submit" className="btn btn-primary w-100">Сохранить в базе</button>

			</form>
		</div>
	)
}




export default CreateProduct
