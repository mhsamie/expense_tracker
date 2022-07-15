import { useState } from "react";
import OverView from "./OverViewComponent";
import TransAction from "./transActionComponent";
const ExpenseApp = () => {
  const [expense, setExpense] = useState(0);
  const [inCome, setInCome] = useState(0);
  const [transAction, setTransAction] = useState([]);
  return (
    <section>
      <OverView inCome={inCome} expense={expense} />
      <TransAction transAction={transAction} />
    </section>
  );
};

export default ExpenseApp;
