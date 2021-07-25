import React from 'react'
import "./Revenue.css"
import { ArrowDownward } from '@material-ui/icons'

export default function Revenue () {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featureTitle">Doanh thu</span>
                <div className="featuredMoneyContainer">
                    <span className="featureMoney">$2,415</span>
                    <span className="featureMoneyRate">
                        -11.4 <ArrowDownward/>
                    </span>
                </div>
                <span className="featuredSub">So sánh với tháng trước</span>
            </div>

            <div className="featuredItem">
                <span className="featureTitle">Doanh thu</span>
                <div className="featuredMoneyContainer">
                    <span className="featureMoney">$2,415</span>
                    <span className="featureMoneyRate">
                        -11.4 <ArrowDownward/>
                    </span>
                </div>
                <span className="featuredSub">So sánh với tháng trước</span>
            </div>

            <div className="featuredItem">
                <span className="featureTitle">Doanh thu</span>
                <div className="featuredMoneyContainer">
                    <span className="featureMoney">$2,415</span>
                    <span className="featureMoneyRate">
                        -11.4 <ArrowDownward/>
                    </span>
                </div>
                <span className="featuredSub">So sánh với tháng trước</span>
            </div>
        </div>
    )
}