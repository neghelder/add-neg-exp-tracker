import './Chart.css';

import ChartBar from './ChartBar';

export default function Char({ dataPoints }) {
  const onlyValuesArr = dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...onlyValuesArr);
  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => (
        <ChartBar key={dataPoint.label} label={dataPoint.label} value={dataPoint.value} maxValue={totalMaximum} />
      ))}
    </div>
  );
}
