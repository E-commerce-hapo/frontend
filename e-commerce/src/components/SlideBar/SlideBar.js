import React, { useState } from 'react'
import "./SlideBar.css"
import { AccountBoxOutlined, AccountCircleOutlined, AppsOutlined, ListAltOutlined, LocalMallOutlined, ShoppingCartOutlined, StorefrontOutlined, TimelineOutlined } from '@material-ui/icons'
import { BrowserRouter, Link, Route } from 'react-router-dom'

export default function SlideBar (props) {
    return (
        <div className={`slideBar ${props.active === true ? 'active': '' }`}>
            <div className="slideBarWrapper">
                <div className="slideBarMenu">
                    <ul className="slideBarList">
                        <Link to='/'  className="link">
                            <li className = "slideBarListItem">
                                <AppsOutlined className="slideBarIcon"/>
                                <span className={`${props.active === true ? 'active': '' }`}>Trang chủ</span>
                            </li>
                        </Link>
                        <Link to='/customers' className="link">
                            <li className = "slideBarListItem">
                                <AccountBoxOutlined className="slideBarIcon"/>
                                <span className={`${props.active === true ? 'active': '' }`}>Khách hàng</span>
                            </li> 
                        </Link>
                        <li className = "slideBarListItem">
                            <ListAltOutlined className="slideBarIcon"/>
                           
                            <span className={`${props.active === true ? 'active': '' }`}> Loại sản phẩm</span>

                        </li> 
                        <li className = "slideBarListItem">
                            <StorefrontOutlined className="slideBarIcon"/>
                            
                            <span className={`${props.active === true ? 'active': '' }`}>Kho</span>

                        </li> 
                        <li className = "slideBarListItem">
                            <ShoppingCartOutlined className="slideBarIcon"/>
                           
                            <span className={`${props.active === true ? 'active': '' }`}> Giỏ hàng</span>

                        </li> 
                        <Link to='/product' className="link">
                        <li className = "slideBarListItem">
                            <LocalMallOutlined className="slideBarIcon"/>
                            
                            <span className={`${props.active === true ? 'active': '' }`}>Sản phẩm</span>

                        </li>
                        </Link>
                    </ul>
                </div>
            </div>
            <div className={`toggle ${props.active === true ? 'active': ''}`} onClick={props.onActive}>
            </div>
        </div>
    )
}