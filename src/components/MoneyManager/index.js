import {Component} from 'react'
import './index.css'
import {v4 as uuv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {
    titleInput: '',
    amountInput: '',
    typeId: 'Income',
    income: 0,
    expenses: 0,
    transactionBalanceList: [],
    // inputFieldEmpty: false,
    // isError: false,
  }

  onAddHistory = event => {
    event.preventDefault()
    const {titleInput, amountInput, typeId, income, expenses} = this.state
    // console.log(this.state)
    const newTransaction = {
      id: uuv4(),
      title: titleInput,
      amount: amountInput,
      type: typeId,
    }
    console.log(`Income: ${income}`)
    console.log(`Expenses: ${expenses}`)
    console.log(`Difference/Balance: ${income - expenses}`)
    if (typeId === 'income') {
      this.setState(prevState => ({
        transactionBalanceList: [
          ...prevState.transactionBalanceList,
          newTransaction,
        ],
        income: prevState.income + amountInput,
        titleInput: '',
        amountInput: '',
        // inputFieldEmpty: false,
        // isError: false,
      }))
    }
  }

  onChangeTittle = event => {
    this.setState({titleInput: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({amountInput: event.target.value})
  }

  onSelectedOption = event => {
    this.setState({
      typeId:
        event.target.value === 'income'
          ? transactionTypeOptions[0].displayText
          : transactionTypeOptions[1].displayText,
    })
  }

  render() {
    const {
      titleInput,
      amountInput,
      income,
      expenses,
      transactionBalanceList,
      //   inputFieldEmpty,
    } = this.state
    return (
      <div className="bg-container">
        <div className="welcome-container">
          <h1 className="name">Hi, Richard</h1>
          <p className="description">
            Welcome back to your <span className="span">Money Manager</span>
          </p>
        </div>
        <div className="money-details-items-list">
          <MoneyDetails moneyDetails={(income, expenses)} />
        </div>
        <div className="transaction-item-container">
          <div className="transaction-container" onSubmit={this.onAddHistory}>
            <form className="form" onSubmit={this.onAddHistory}>
              <h1 className="sub-heading">Add Transaction</h1>
              <label className="label" htmlFor="tittle">
                TITLE
              </label>
              <input
                className="input"
                placeholder="TITTLE"
                type="text"
                value={titleInput}
                id="tittle"
                onChange={this.onChangeTittle}
              />
              <label className="label" htmlFor="amount">
                AMOUNT
              </label>
              <input
                className="input"
                placeholder="AMOUNT"
                type="text"
                value={amountInput}
                id="amount"
                onChange={this.onChangeAmount}
              />
              <label className="label" htmlFor="select">
                TYPE
              </label>
              <select
                id="select"
                className="input"
                onChange={this.onSelectedOption}
              >
                <option value={transactionTypeOptions[0].optionId}>
                  Income
                </option>
                <option value={transactionTypeOptions[1].optionId}>
                  Expenses
                </option>
              </select>
              <button type="submit" className="add-btn">
                Add
              </button>
            </form>
          </div>
          <div className="history-container">
            <h1 className="sub-heading">History</h1>
            <div className="history-item-container">
              <div className="history-content">
                <p className="history-name">Title</p>
                <p className="history-name">Amount</p>
                <p className="history-name">Type</p>
              </div>
            </div>
          </div>
          {transactionBalanceList.length > 0 ? (
            <ul className="transaction-details-list">
              {transactionBalanceList.map(each => (
                <TransactionItem
                  key={each.id}
                  deleteTransactionDetails={this.deleteTransactionDetails}
                  transactionDetails={each}
                />
              ))}
            </ul>
          ) : (
            ''
          )}
        </div>
      </div>
    )
  }
}
export default MoneyManager
