import React, { useEffect, useState } from 'react'
import Chart from 'react-google-charts'

function LineChart({historicalData}) {

    const [data, setData] = useState([["Date","Prices"]])

    useEffect(() => {

        let dataCopy =  [["Date","Prices"]];
        if(historicalData.prices){
            historicalData.prices.map((item) => {
                dataCopy.push([`${new Date(item[0]).toLocaleDateString().slice(0,-5)}`, item[1]])
            })

            setData(dataCopy)
        }
    },[historicalData])

  return (
    <div>
      <Chart 
      chartType='LineChart'
      data={data}
      height="100%"
      legendToggle
      />

    </div>
  )
}

export default LineChart
