import React from 'react'
import "./TopBar.css"
import { Language, NotificationsNone, Settings } from "@material-ui/icons"

export default function TopBar () {
    return (
        <div className="topBar">
            <div className="topBarWrapper">
                <div className="topLeft">
                    <span className="logo">Dashboard</span>
                </div>
                <div className="topRight">
                    <div className="topBarIconContainer">
                        <NotificationsNone fontSize="medium"/>
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topBarIconContainer">
                        <Settings fontSize="medium"/>
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topBarIconContainer">
                        <Language fontSize="medium"/>
                        <span className="topIconBadge">2</span>
                    </div>
                    <img src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-portrait-176256935.jpg" alt="" className="topAvatar"/>
                </div>
            </div>
            
        </div>
    )
}