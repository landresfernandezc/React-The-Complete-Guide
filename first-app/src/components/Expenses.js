import Card from "./Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
function Expenses(props) {
  return (
    <Card className="expenses">
      {props.expenses.map((index) => {
        return (
            <ExpenseItem
              title={index.title}
              amount={index.amount}
              date={index.date}
            ></ExpenseItem>
        );
      })}
    </Card>
  );
}
export default Expenses;
