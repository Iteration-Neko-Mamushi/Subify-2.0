import React from 'react'


export default function SummaryCard(props) {

    //const { totalSubs, yearly_price, monthly_price } = props;
    console.log("Card props", props.summaryData)

    return (
            <div className="displayBox-summ">
                <h2>Expense Summary</h2>
                <div id="numberofservices">
                <strong>Number of Services:</strong> {props.summaryData.subscriptionCount
}
                </div>
                <div id='totalmonthlycost'>
                <strong>Total Monthly Cost:</strong> {props.summaryData.totalMonthlyPrice}
                </div>
                <div id='totalyearlycost'>
                <strong>Total Yearly Cost:</strong> {(props.summaryData.totalMonthlyPrice * 12).toFixed(2)}
                </div>
            </div>
    )
};