import React from 'react'
import "./Product.css"
import Table from '../../components/Table/Table'
import { ProductData } from '../../testData'
import { Input, Space } from 'antd';
import 'antd/dist/antd.css';
const { Search } = Input;
export default function Product (props) {
    const renderHeader = (item, index) =>(
        <th key={index}>{item}</th>
    )

    const renderBody = ( item, index ) => (
        <tr>
            <td>{item.productId}</td>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>{item.totalPrice}</td>
            <td>{item.status}</td>
        </tr>
    )

    const onSearch = value => console.log(value);
    return(
        <div className="productContainer">
            <div className="search"> 
                <Search
                className="search"
                placeholder="Tìm kiếm"
                enterButton 
                size="middle"
                allowClear
                style={{ width: 300 }}
                onSearch={onSearch}
                />
            </div>
            <div className="row"> 
                <div className="col-12">
                <Table
                    limit='10'
                    headerData={ProductData.header} 
                    renderHeader = {(item, index) => renderHeader(item, index)} 
                    bodyData = {ProductData.body} 
                    renderBody = {(item, index) => renderBody(item, index)}
                    title="Sản phẩm"/>
                </div>
            </div>
        </div>
    )
}