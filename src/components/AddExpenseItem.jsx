import './AddExpenseItem.css'
import React from 'react';

function ExpenseForm(props) {
    let [expense, update] = React.useState({
        title: "",
        date: null,
        amount: 0.01
    });

    let [isOpen, setOpen] = React.useState(false)

    function handleChange(event) {
        let name = event.target.name;
        let value = event.target.value;
        if (name === "title") {
            update(prev => {
                return {
                    title: value,
                    date: prev.date,
                    amount: prev.amount
                }
            })
        } else if (name === "amount") {
            update(prev => {
                return {
                    title: prev.title,
                    date: prev.date,
                    amount: value
                }
            })
        } else if (name === "date") {
            value = parseDate(value);
            update(prev => {
                return {
                    title: prev.title,
                    date: value,
                    amount: prev.amount
                }
            })
        }
        
    }

    function parseDate(s) {
        let b = s.split(/\D/);
        return new Date(b[0], --b[1], b[2])
    }

    function add(event) {
        console.log(expense)
        props.add(expense)
        event.preventDefault();
    }

    function render(event) {
        let name = event.target.name;
        setOpen(name != "cancel")
    }

    if (isOpen) {
        return (
            <div className="new-expense">
                <form>
                    <div className="new-expense__controls">
                        <div className="new-expense__control">
                            <label>Title</label>
                            <input name="title" type="text" onChange={handleChange} value={expense.title} />
                        </div>
                        <div className="new-expense__control">
                            <label>Amount</label>
                            <input name="amount" type="number" min="0.01" step="0.01" onChange={handleChange} value={expense.amount} />
                        </div>
                        <div className="new-expense__control">
                            <label>Date</label>
                            <input name="date" type="date" min="2019-01-01" max="2022-12-31" onChange={handleChange}/>
                        </div>
                    </div>
                    <div className="new-expense__actions">
                        <button onClick={render} name="cancel">Cancel</button>
                        <button type="submit" onClick={add}>Add Expense</button>
                    </div>
                </form>
            </div>
        )
    } else {
        return (
            <div className="new-expense">
                <div className="new-expense__actions" style={{textAlign: 'center', position: 'relative', left: '10px'}}>
                    <button onClick={render}>Add New Expense</button>
                </div>
            </div>
        )
    }
        
}

export default ExpenseForm;