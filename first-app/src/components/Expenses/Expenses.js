import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
const Expenses=(props)=> {
  const FilterHandler=(filter)=>{
    props.onFilterExpensesHandler(filter)
  }
  return (
    <div>
        <Card className="expenses">
           <ExpensesFilter onFilterHandler={FilterHandler}/>
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
    </div>
  );
}
export default Expenses;
