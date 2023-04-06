import React from 'react'
import './ExpenseItem.css'
const ExpenseItem = (props) => {
	let { date, title, price } = props
	return (
		<div className='item-container'>
			<div className='expenseDescription'>
				<p >{date.toString()}</p>
				<h3 className='title'>{title}</h3>
				<p className='price'>{price}$</p>
			</div>
		</div>
	)
}

export default ExpenseItem
