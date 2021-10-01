import ChartBar from './ChartBar';
import './Chart.css';

function Chart(props) {
    const values = props.data.map(data => data.value);
    const totalMax = Math.max(...values)
    console.log(values);
    console.log(props.data);

    return (
        <div className="chart">
            {props.data.map(data => {
                console.log(data);
                return <ChartBar 
                    key={data.label} 
                    value={data.value}
                    max={totalMax} 
                    label={data.label}
                />
            })}
        </div>
    )
}

export default Chart;