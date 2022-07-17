import ExpenseApp from "./components/ExpenseApp";

function App() {
  return (
    <div className="flex justify-center text-center items-center mt-12 font-mono">
      <header className="border text-sm border-solid border-slate-300 p-4 rounded shadow-sm w-72">
        <h2 className="font-bold m-1">EXPENSE TRACKER</h2>
        <ExpenseApp />
      </header>
    </div>
  );
}

export default App;
