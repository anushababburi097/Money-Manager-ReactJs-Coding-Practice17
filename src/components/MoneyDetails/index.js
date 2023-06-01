// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {moneyDetails} = props
  const {income, expenses} = moneyDetails
  return (
    <>
      <div className="money-details-container">
        <div className="balance-details-container balance">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
            alt="balance"
            className="image"
          />
          <div>
            <p>Your Balance</p>
            <p>RS {income - expenses}</p>
          </div>
        </div>
        <div className="balance-details-container income">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
            alt="income"
            className="image"
          />
          <div>
            <p>Your Income</p>
            <p>RS {income}</p>
          </div>
        </div>
        <div className="balance-details-container expense">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
            alt="expenses"
            className="image"
          />
          <div>
            <p>Your Expenses</p>
            <p>RS {expenses}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default MoneyDetails
