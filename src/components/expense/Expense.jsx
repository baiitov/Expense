import ExpenseItem from '../expenseItem/ExpenseItem'
import './Expense.css'
const Expense = ({ expenses }) => {
	return (
		<div className='expense-container'>
			{expenses.map((el) => {
				return (
					<ExpenseItem
						key={el.title}
						title={el.title}
						price={el.price}
						date={el.date}
					/>
				)
			})}
		</div>
	)
}
export default Expense
