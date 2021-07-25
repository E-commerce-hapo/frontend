import React, { useState } from 'react'
import './Table.css'

export default function Table ({limit, headerData, bodyData, renderBody, renderHeader, title}) {
    const initData = limit ?  bodyData.slice(0, Number(limit)) : bodyData
    const [dataShow, setdataShow] = useState(initData)
    const [currPage, setcurrPage] = useState(0)
    
    let pages = 1

    let range = []

    if(limit !== undefined){
        let page = Math.floor(bodyData.length/ Number(limit))
        pages = bodyData.length % Number(limit) === 0 ? page : page + 1
        range = [...Array(pages).keys()]
    }

    const selectPage = page => {
        const start = Number(limit) * page
        const end = start + Number(limit)

        setdataShow(bodyData.slice(start, end))
        setcurrPage(page)
    }

    return (
        <div className="tableContainer">
            <div>
                <h4>{title}</h4>
            </div>
            <div className="tableWrapper">
                <table>
                    {
                        headerData && renderHeader ? (
                            <thead>
                                <tr>
                                    {
                                        headerData.map((item, index) => renderHeader(item, index))
                                    }  
                                </tr>
                            </thead>
                        ) : null  
                    }
                    {
                        bodyData && renderBody ? (
                            <tbody>
                                { 
                                    dataShow.map((item, index) => renderBody(item, index))
                                }
                            </tbody>
                        ): null
                    }
                </table>
            </div>
            {
                pages > 1 ? (
                    <div className="table_pagination">
                        {
                            range.map((item, index) => (
                                <div key={index} className={`table_pagination_item ${currPage === index
                                ? 'active' : ''}`} onClick={() => selectPage(index)}>
                                     {item + 1}
                                </div>
                            ))
                        }
                    </div>
                ) : null
            } 
        </div>
    )
}