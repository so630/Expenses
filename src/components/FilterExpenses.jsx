import './ExpensesFilter.css';

const ExpensesFilter = (props) => {


    function updateOne(event) {
        let value = event.target.value;
        if (value !== 'all') {
            props.filter(Number(value))
        } else {
            props.filter(value);
        }
    }
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select onChange={updateOne}>
          <option value="all" selected>all</option>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;