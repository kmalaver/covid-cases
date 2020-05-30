import React ,{ useState,useEffect } from 'react'
import Chart from 'chart.js'
import { Line } from 'react-chartjs-2'
import {connect} from 'react-redux'
import { setData } from '../actions'
import '../assets/styles/components/Country.scss'
import Loader from '../components/Loader'

const Country = props =>{
  const {id} = props.match.params
  const [data , setData] = useState([]);
  const [head , setHead] = useState([]);
  const [isLoading, setLoading ] = useState(true)

  useEffect(() => {
    fetch(`https://api.thevirustracker.com/free-api?countryTimeline=${id}`)
    .then(res => res.json())
      .then(response => {
        setData(response.timelineitems[0])
        setHead(response.countrytimelinedata[0].info)
        setLoading(false)
      })
      .catch(error => console.log(error));
  }, []);

  const dataCasesN = Object.entries(data)

  const days = dataCasesN.map((item)=>{
    return item[0]
  })

  const confirmedCases = dataCasesN.map((item)=>{
    return item[1].total_cases
  })

  const confirmedDeaths = dataCasesN.map((item)=>{
    return item[1].total_deaths
  })

  const dataCases = {
    labels: days,
    datasets: [
      {
        label: 'Casos',
        data: confirmedCases,
        backgroundColor: "rgba(243, 156, 18,0.5)",
        borderWidth: 2,
        borderColor:"rgba(243, 156, 18,1)",
        pointRadius: 0,
        lineTension: 0,
      }
    ]
  }


  const dataDeaths = {
    labels: days,
    datasets: [
      {
        label: 'muertes',
        data: confirmedDeaths,
        borderColor:"rgba(192, 57, 43,1)",
        backgroundColor: "rgba(192, 57, 43,0.5)",
        borderWidth: 2,
        pointRadius: 0,
        lineTension: 0,
      }
    ]
  }

  const opt =  {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero:true
            }
        }]
    }
}

  return(!isLoading ?
    <div className="country">
      <p></p>
      <div className="country__header">
        <h1>{head.title}</h1>
      </div>
      <div className="graph-list">
        <div className="graph-container">
        <Line className="graph"
          data={dataCases}
          options={opt}
        />
        </div>
        <div className="graph-container">
        <Line className="graph"
          data={dataDeaths}
          options={opt}
        />
        </div> 
      </div>
    </div>:
    <Loader/>
  )
} 

export default Country