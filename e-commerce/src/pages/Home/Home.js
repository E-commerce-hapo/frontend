import React from 'react'
import Chart from '../../components/Chart/Chart'
import Table from '../../components/Table/Table'
import { data, TopCustomer } from '../../testData'
import Revenue from '../Revenue/Revenue'
import "./Home.css"

export default function Home (props) {
    const renderHeader = (item, index) =>(
        <th key={index}>{item}</th>
    )

    const renderBody = ( item, index ) => (
        <tr>
            <td>{item.userName}</td>
            <td>{item.order}</td>
            <td>{item.price}</td>
        </tr>
    )

    return (
        <div>
            <Revenue/>
            <Chart data={data} title="Phân tích doanh thu" grid dataKey="value" />
            <div className="row">
                <div className="col-6">
                    <Table 
                    headerData={TopCustomer.header} 
                    renderHeader = {(item, index) => renderHeader(item, index)} 
                    bodyData = {TopCustomer.body} 
                    renderBody = {(item, index) => renderBody(item, index)}
                    title="Top người dùng"/>
                </div>
                <div className="col-6">
                    <Table 
                    headerData={TopCustomer.header} 
                    renderHeader = {(item, index) => renderHeader(item, index)} 
                    bodyData = {TopCustomer.body} 
                    renderBody = {(item, index) => renderBody(item, index)}
                    title="Top người dùng"/>
                </div> 
            </div>
        </div>
    )
}