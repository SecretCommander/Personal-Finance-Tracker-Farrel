import React, { useState } from "react";
export default function Input() {
  const [transactions, setTransactions] = useState({});
  const [selectedTransactionId, setSelectedTransactionId] = useState(null);
  const [filterIn, setFilterIn] = useState({ type: "", category: "" });
  const [filterEx, setFilterEx] = useState({ type: "", category: "" });

  const [income, setIncome] = useState({
    title: "",
    amount: 0,
    category: "salary",
    date: "",
    time: "morning",
  });
  const [expenses, setExpenses] = useState({
    title: "",
    amount: 0,
    category: "food",
    date: "",
    time: "morning",
  });

  function handleIncomeChange(e) {
    const { name, value } = e.target;
    setIncome({ ...income, [name]: value });
  }

  function handleExpenseChange(e) {
    const { name, value } = e.target;
    setExpenses({ ...expenses, [name]: value });
  }

  const handleSelectTransaction = (id) => {
    const tx = transactions[id];
    setSelectedTransactionId(id);
    setEditData({
      title: tx.title,
      amount: tx.amount,
      category: tx.category,
      type: tx.type,
    });
  };

  const handleEditChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  const [editData, setEditData] = useState({
    title: "",
    amount: "",
    category: "",
    type: "",
  });

  const totalIncome = Object.values(transactions)
    .filter((tx) => tx.type === "income")
    .reduce((sum, tx) => sum + Number(tx.amount), 0);

  const totalExpense = Object.values(transactions)
    .filter((tx) => tx.type === "expense")
    .reduce((sum, tx) => sum + Number(tx.amount), 0);

  const balance = totalIncome - totalExpense;

  function saveIncome(e) {
    e.preventDefault();
    const id = Date.now();
    setTransactions((prev) => ({
      ...prev,
      [id]: { ...income, type: "income" },
    }));
    setIncome({
      title: "",
      amount: "",
      category: "salary",
      date: "",
      time: "morning",
    });
  }

  function saveExpense(e) {
    e.preventDefault();
    const id = Date.now();
    setTransactions((prev) => ({
      ...prev,
      [id]: { ...expenses, type: "expense" },
    }));
    setExpenses({
      title: "",
      amount: "",
      category: "food",
      date: "",
      time: "morning",
    });
  }

  const handleSave = () => {
    if (selectedTransactionId) {
      setTransactions({
        ...transactions,
        [selectedTransactionId]: {
          ...transactions[selectedTransactionId],
          ...editData,
          amount: parseFloat(editData.amount),
        },
      });
      alert("Transaction updated!");
    }
  };

  const handleDelete = () => {
    if (selectedTransactionId) {
      const updated = { ...transactions };
      delete updated[selectedTransactionId];
      setTransactions(updated);
      setSelectedTransactionId(null);
      setEditData({ title: "", amount: "", category: "", type: "" });
      alert("Transaction deleted!");
    }
  };

  return (
    <>
      {/* Input Section */}
      <h1 className="text-center text-3xl font-bold my-5" id="input-data">
        Insert Income or Expenses
      </h1>

      {/* Input Income Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 mx-2">
        <div className="bg-green-500 shadow-md rounded-lg p-4 text-center md:w-full">
          <h2 className="text-3xl font-bold my-4">Income</h2>
          <form
            onSubmit={saveIncome}
            className="bg-white rounded-lg p-4 text-center h-3/4"
          >
            <input
              type="Text"
              name="title"
              value={income.title}
              onChange={handleIncomeChange}
              className="border border-gray-300 rounded-md p-2 my-2 w-full"
              placeholder="Enter your income title"
              required
            />
            <input
              type="number"
              name="amount"
              value={income.amount}
              onChange={handleIncomeChange}
              className="border border-gray-300 rounded-md p-2 my-2 w-full"
              placeholder="Enter the amount (IDR)"
              required
            />
            <div className="my-2 w-full flex flex-row justify-center gap-2">
              <select
                name="category"
                value={income.category}
                onChange={handleIncomeChange}
                className="border border-gray-300 rounded-md p-2 mt-2 w-2/5"
              >
                <option value="salary">Salary</option>
                <option value="bonus">Bonus</option>
                <option value="side hustle">Side Hustle</option>
                <option value="investment">Investment</option>
                <option value="others">Others</option>
              </select>
              <input
                type="date"
                name="date"
                value={income.date}
                onChange={handleIncomeChange}
                className="border border-gray-300 rounded-md p-2 mt-2 w-2/5"
                required
              />
              <select
                name="time"
                value={income.time}
                onChange={handleIncomeChange}
                className="border border-gray-300 rounded-md p-2 mt-2 w-1/5"
              >
                <option value="morning">Morning</option>
                <option value="afternoon">Afternoon</option>
                <option value="evening">Evening</option>
                <option value="night">Night</option>
              </select>
            </div>
            <input
              type="submit"
              value="Save Income"
              className="focus:outline-none text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 my-3 me-2 mb-3 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            />
          </form>
        </div>

        {/* Input Expenses Section */}
        <div className="bg-red-500 shadow-md rounded-lg p-4 text-center sm:w-full">
          <h2 className="text-3xl font-bold my-4">Expenses</h2>
          <form
            onSubmit={saveExpense}
            className="bg-white rounded-lg p-4 text-center h-3/4"
          >
            <input
              type="Text"
              name="title"
              value={expenses.title}
              onChange={handleExpenseChange}
              className="border border-gray-300 rounded-md p-2 my-2 w-full"
              placeholder="Enter your expenses title"
              required
            />
            <input
              type="number"
              value={expenses.amount}
              name="amount"
              onChange={handleExpenseChange}
              className="border border-gray-300 rounded-md p-2 my-2 w-full"
              placeholder="Enter the amount (IDR)"
              required
            />
            <div className="my-2 w-full flex flex-row justify-center gap-2">
              <select
                name="category"
                value={expenses.category}
                onChange={handleExpenseChange}
                className="border border-gray-300 rounded-md p-2 mt-2 w-2/5"
              >
                <option value="food">Food</option>
                <option value="transportation">Transportation</option>{" "}
                <option value="entertainment">Entertainment</option>
                <option value="health">Health</option>
                <option value="others">Others</option>
              </select>
              <input
                type="date"
                name="date"
                value={expenses.date}
                onChange={handleExpenseChange}
                className="border border-gray-300 rounded-md p-2 mt-2 w-2/5"
                required
              />
              <select
                className="border border-gray-300 rounded-md p-2 mt-2 w-1/5"
                name="time"
                value={expenses.time}
                onChange={handleExpenseChange}
              >
                <option value="morning">Morning</option>
                <option value="afternoon">Afternoon</option>
                <option value="evening">Evening</option>
                <option value="night">Night</option>
              </select>
            </div>
            <input
              type="submit"
              value="Save Expenses"
              className="focus:outline-none text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 my-3 mb-3 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
            />
          </form>
        </div>
      </div>

      {/* Transaction History Section */}
      <div className="md:flex flex-none mt-7 p-4 gap-4 justify-center h-auto" id="history-edit">
        <div className="w-full md:w-3/5 border-2 border-gray-300 rounded-xl p-4">
          <h1 className="text-center text-2xl font-bold mb-4 ">
            Transaction History
          </h1>
          <div className="h-96 max-h-96 overflow-y-auto space-y-2 px-2 ">
            <ul className="space-y-2">
              {Object.entries(transactions).map(([id, tx]) => (
                <li
                  key={id}
                  className="bg-white p-3 rounded shadow flex justify-between items-center"
                  onClick={() => handleSelectTransaction(id)}
                >
                  <div>
                    <p className="font-semibold">{tx.title}</p>
                    <p className="text-sm text-gray-500">
                      {tx.category} - {tx.date} ({tx.time})
                    </p>
                  </div>
                  <div className="text-right">
                    <p
                      className={`font-bold ${
                        tx.type === "income" ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {tx.type === "income" ? "+" : "-"} IDR {tx.amount}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Edit and Delete Section */}
        <div className="w-full md:w-2/5 md:m-0 mt-6 bg-white p-4 rounded-xl shadow border-2 border-gray-300">
          <h1 className="text-center text-2xl font-bold mb-4 ">
            Edit Income / Expenses
          </h1>
          {selectedTransactionId ? (
            <div className="space-y-4">
              <div>
                <label className="block font-semibold mb-1">Title</label>
                <input
                  type="text"
                  name="title"
                  value={editData.title}
                  onChange={handleEditChange}
                  className="w-full border border-gray-500 p-2 rounded bg-white shadow"
                />
              </div>
              <div>
                <label className="block font-semibold mb-1">Amount</label>
                <input
                  type="number"
                  name="amount"
                  value={editData.amount}
                  onChange={handleEditChange}
                  className="w-full border border-gray-500 p-2 rounded bg-white shadow"
                />
              </div>
              <div>
                <label className="block font-semibold mb-1">Category</label>
                <select
                  name="category"
                  value={editData.category}
                  onChange={handleEditChange}
                  className="w-full border border-gray-500 p-2 rounded bg-white shadow"
                >
                  {editData.type === "income" ? (
                    <>
                      <option value="salary">Salary</option>
                      <option value="bonus">Bonus</option>
                      <option value="side hustle">Side Hustle</option>
                      <option value="investment">Investment</option>
                      <option value="others">Others</option>
                    </>
                  ) : (
                    <>
                      <option value="food">Food</option>
                      <option value="transportation">Transportation</option>
                      <option value="entertainment">Entertainment</option>
                      <option value="health">Health</option>
                      <option value="others">Others</option>
                    </>
                  )}
                </select>
              </div>
              <div>
                <label className="block font-semibold mb-1">Type</label>
                <select
                  name="type"
                  value={editData.type}
                  onChange={handleEditChange}
                  className={`w-full border border-gray-500 p-2 rounded shadow 
                    ${editData.type === "income" ? "bg-green-200" : "bg-red-200"}`}
                >
                  <option value="income" className="bg-green-300">Income</option>
                  <option value="expense" className="bg-red-300">Expense</option>
                </select>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={handleSave}
                  className="flex-1 bg-green-600 text-white py-2 rounded hover:bg-green-800"
                >
                  Save Changes
                </button>
                <button
                  onClick={handleDelete}
                  className="flex-1 bg-red-600 text-white py-2 rounded hover:bg-red-800"
                >
                  Delete
                </button>
                <button
                  onClick={() => {
                    setSelectedTransactionId(null);
                    setEditData({
                      title: "",
                      amount: "",
                      category: "",
                      type: "",
                    });
                  }}
                  className="flex-1 bg-gray-600 text-white py-2 rounded hover:bg-gray-800"
                >
                  Clear
                </button>
              </div>
            </div>
          ) : (
            <p className="text-center text-gray-500">
              Select a transaction to edit
            </p>
          )}
        </div>
      </div>
      {/* Summary Section */}
      <div className="flex flex-col text-center md:h-auto h-35 md:flex-row justify-around my-5 mx-4 bg-color-gray-100 p-4 rounded-lg shadow-md border-2 border-gray-300" id="balance">
        <div className="text-green-600 font-bold">
          Total Income: IDR {totalIncome}
        </div>
        <div className="text-red-600 font-bold">
          Total Expense: IDR {totalExpense}
        </div>
        <div className="font-bold">Balance: IDR {balance}</div>
      </div>

      {/* Group Income dan Expense by category */}
      <div className="grid md:grid-cols-2 gap-4 mb-6 mx-4" id="category">
        {/* INCOME CATEGORIES */}
        <div className="p-4 rounded bg-green-500 shadow">
          <h3 className="text-center font-bold mb-4 font text-xl">Income Categories</h3>
          <div className="flex flex-wrap gap-2 justify-center mb-2">
            {["salary", "bonus", "side hustle", "investment", "others"].map(
              (cat) => (
                <button
                  key={cat}
                  className={`px-3 py-1 rounded-full border ${
                    filterIn.type === "income" && filterIn.category === cat
                      ? "bg-green-600 text-white font-bold border-2"
                      : "bg-gray-100"
                  }`}
                  onClick={() => setFilterIn({ type: "income", category: cat })}
                >
                  {cat}
                </button>
              )
            )}
            <ul className="max-h-60 overflow-y-auto space-y-2 w-full mt-2">
              {Object.entries(transactions)
                .filter(([id, tx]) => {
                  if (!id || id === "undefined") return false;
                  if (tx.type !== "income") return false;
                  if (filterIn.type === "income" && filterIn.category) {
                    return tx.category === filterIn.category;
                  }
                  return true;
                })
                .map(([id, tx]) => (
                  <li
                    key={id}
                    className="bg-green-50 p-3 rounded shadow flex justify-between items-center"
                  >
                    <div>
                      <p className="font-semibold">{tx.title}</p>
                      <p className="text-sm text-gray-500">
                        {tx.category} - {tx.date} ({tx.time})
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-green-600">
                        + IDR {tx.amount}
                      </p>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </div>

        {/* EXPENSE CATEGORIES */}
        <div className="bg-red-500 p-4 rounded shadow">
          <h3 className="text-center font-bold mb-4 text-xl">Expense Categories</h3>
          <div className="flex flex-wrap gap-2 justify-center mb-2">
            {[
              "food",
              "transportation",
              "entertainment",
              "health",
              "others",
            ].map((cat) => (
              <button
                key={cat}
                className={`px-3 py-1 rounded-full border ${
                  filterEx.type === "expense" && filterEx.category === cat
                    ? "bg-red-600 text-white font-bold border-2"
                    : "bg-gray-100"
                }`}
                onClick={() => setFilterEx({ type: "expense", category: cat })}
              >
                {cat}
              </button>
            ))}
            <ul className="max-h-60 overflow-y-auto space-y-2 w-full mt-2">
              {Object.entries(transactions)
                .filter(([id, tx]) => {
                  if (!id || id === "undefined") return false;
                  if (tx.type !== "expense") return false;
                  if (filterEx.type === "expense" && filterEx.category) {
                    return tx.category === filterEx.category;
                  }
                  return true;
                })
                .map(([id, tx]) => (
                  <li
                    key={id}
                    className="bg-red-50 p-3 rounded shadow flex justify-between items-center"
                  >
                    <div>
                      <p className="font-semibold">{tx.title}</p>
                      <p className="text-sm text-gray-500">
                        {tx.category} - {tx.date} ({tx.time})
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-red-600">
                        - IDR {tx.amount}
                      </p>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
