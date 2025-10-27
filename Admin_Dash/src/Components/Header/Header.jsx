import './header.css'
import notificationImg from './bell.png'
import cartImg from './grocery-store.png'
import msgImg from './message.png'
import profileImg from './profile.png'
import hamImg from './ham.png'
import searchImg from './search.png'



export default function Header() {
    return <div className="header-int">
        <div className="left-items">
            <span><img src={hamImg} alt="" /></span>
            <span><img src={searchImg} alt="" /></span>
        </div>

        <div className="right-items">
            <div className="right-icons">
                <span>
                    <img src={msgImg} alt="" />
                </span>
                <span>
                    <img src={notificationImg} alt="" />
                </span>
                <span>
                    <img src={cartImg} alt="" />
                </span>
            </div>
            <div className="profile">
                <span><img src={profileImg} alt="" /></span>
                <span>Hi,username</span>
            </div>
        </div>

    </div>
}