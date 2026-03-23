import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LineChart,
  Line
} from 'recharts';

import CustomTooltip2 from "../CustomTooltip/CustomTooltip";
const CustomTooltip = ({ active, payload, label }) => {
    if(active && payload.length && label){
    return ( 
        <div>
            <p><strong>{label}</strong></p>
            <p>Physics: {payload[0].value}</p>
            <p>Chemistry: {payload[1].value}</p>
            <p>Math: {payload[2].value}</p>
        </div>
     );
    }
}
const ResultsChart = () => {
    const resultData = [
  {
    "id": 1,
    "name": "Alice",
    "physics": 85,
    "chemistry": 78,
    "math": 92
  },
  {
    "id": 2,
    "name": "Bob",
    "physics": 74,
    "chemistry": 81,
    "math": 69
  },
  {
    "id": 3,
    "name": "Charlie",
    "physics": 90,
    "chemistry": 88,
    "math": 95
  },
  {
    "id": 4,
    "name": "David",
    "physics": 65,
    "chemistry": 70,
    "math": 72
  },
  {
    "id": 5,
    "name": "Emma",
    "physics": 88,
    "chemistry": 91,
    "math": 89
  },
  {
    "id": 6,
    "name": "Frank",
    "physics": 55,
    "chemistry": 60,
    "math": 58
  },
  {
    "id": 7,
    "name": "Grace",
    "physics": 92,
    "chemistry": 87,
    "math": 90
  },
  {
    "id": 8,
    "name": "Hannah",
    "physics": 78,
    "chemistry": 75,
    "math": 80
  },
  {
    "id": 9,
    "name": "Ian",
    "physics": 69,
    "chemistry": 73,
    "math": 65
  },
  {
    "id": 10,
    "name": "Julia",
    "physics": 95,
    "chemistry": 93,
    "math": 97
  }
]
    return ( 
        <div>
            <LineChart width={500} height={400} data={resultData}>
                <Line dataKey="math"></Line>
                <Line dataKey="physics" stroke="#408223"></Line>
            </LineChart>
            <BarChart width={900} height={400} data={resultData}>
                <XAxis
                    dataKey='name'
                ></XAxis>
                <YAxis
                    dataKey='math'
                ></YAxis>
                <Bar dataKey="physics" fill="#8884d8" />
                <Bar dataKey="chemistry" fill="#82ca9d" />
                <Bar dataKey="math" fill="#ffc658" />
            </BarChart>

            {/* tooltip */}
            <BarChart
              style={{
                width:'80%',
                maxWidth:'600px',
                minHeight:'70vh'
              }}
              data={resultData}
            >
            <CartesianGrid strokeDasharray={'3 3'}></CartesianGrid>
            <XAxis
                dataKey='name'
            ></XAxis>
            <YAxis
                dataKey='math'
            ></YAxis>
            <Tooltip content={<CustomTooltip2 />} />
            <Legend></Legend>

            <Bar dataKey="physics" fill="#8884d8" />
            <Bar dataKey="chemistry" fill="#82ca9d" />
            <Bar dataKey="math" fill="#ffc658" />

            </BarChart>
        </div>
     );
}
 
export default ResultsChart;