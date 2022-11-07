import React from 'react'


export default function SummaryCard(props) {

    //const { totalSubs, yearly_price, monthly_price } = props;
    console.log("Card props", props.summaryData)

    return (
            <div>
                <h2>Expense Summary</h2>
                <div id="numberofservices">
                Number of Services:{props.summaryData.subscriptionCount
}
                </div>
                <div id='totalmonthlycost'>
                Total Monthly Cost:{props.summaryData.totalMonthlyPrice}
                </div>
                <div id='totalyearlycost'>
                Total Yearly Cost:{(props.summaryData.totalMonthlyPrice * 12).toFixed(2)}
                </div>
            </div>
    )
};