import './ExpenseItem.css';

function ExpenseItem(props) {
  const expenseDate = props.date.getFullYear() + "-" + props.date.getMonth() + "-" + props.date.getDate();

  return (
    <div className="expense-item">
      <div>{expenseDate}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
