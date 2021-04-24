import React, {useState, useEffect} from 'react'
import './myHeader.scss'
import Icon from '@/components/Icon/Icon'

export const MyHeader:React.FC = () => {
    const [blogName] = useState("octobershen")
    const [hoverCurrent, setHoverCurrent] = useState(-1)
    // 相当于 componentDidMount 和 componentDidUpdate:
    useEffect(() => {
        // 使用浏览器的 API 更新页面标题
        document.title = `octobershen~1006`;
    });
    const changeHoverIndex = (num:number):void => {
        setHoverCurrent(num)
    }
    const resetHoverIndex = () => {
        setHoverCurrent(-1)
    }
    return(
            <header className="my-header web-font">
                <div className="header-wrapper">
                    <div className="logo">
                        <p className="line" />
                        <p className="blog-name">{blogName}</p>
                        <p className="line" />
                    </div>
                    <div className="nav">
                        <div className="nav-item" onMouseMove={() => changeHoverIndex(0)} onMouseOut={resetHoverIndex}>
                            {hoverCurrent === 0?<Icon type="iconhome-copy" />:<Icon type="iconhome" /> }
                            <span className="nav-name" >首页</span>
                        </div>
                        <div className="nav-item" onMouseMove={() => changeHoverIndex(1)} onMouseOut={resetHoverIndex}>
                            {hoverCurrent === 1? <Icon type="iconfile-markdown-copy" />: <Icon type="iconfile-markdown" /> }
                            <span className="nav-name">文章</span>
                        </div>
                        <div className="nav-item" onMouseMove={() => changeHoverIndex(2)} onMouseOut={resetHoverIndex}>
                            {hoverCurrent === 2? <Icon type="iconuser-copy" /> : <Icon type="iconuser" /> }
                            <span className="nav-name">个人</span>
                        </div>
                        <div className="nav-item" onMouseMove={() => changeHoverIndex(3)} onMouseOut={resetHoverIndex}>
                            {hoverCurrent === 3? <Icon type="iconsearch-copy" />: <Icon type="iconsearch" /> }
                            <span className="nav-name">搜索</span>
                        </div>
                    </div>
                </div>
            </header>
    )
}

