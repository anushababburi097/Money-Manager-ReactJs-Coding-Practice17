// Write your code here
import './index.css'

const TransactionItem = props => {
  const {transactionDetails, deleteTransactionDetails} = props
  const {tittle, amount, type, id} = transactionDetails

  const onDeleteIcon = () => deleteTransactionDetails(id, type, amount)

  return (
    <li className="transaction-item-list">
      <p>{tittle}</p>
      <p>Rs {amount}</p>
      <p>{type}</p>
      <button type="button" onClick={onDeleteIcon}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}

export default TransactionItem
