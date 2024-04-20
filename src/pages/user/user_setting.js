import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SubSetting from "../../component/userSetting/sub_setting";
import SubAdd from "../../component/userSetting/sub_add";
import IpSetting from "../../component/userSetting/ip_setting";
import IpAdd from "../../component/userSetting/ip_add";

const UserSetting = () => {
    const {user_id} = useParams();
    const [ ips, setIps ] = useState([])
    const [ subscriptions, setSubscription ] = useState([])
    const [ user, setUser ] = useState({})

    const getUserIps = async() => {
        const response = await axios.get(`http://15.164.77.173:4000/ip/${user_id}`)
        setIps(response.data)
    }
    const getUserSub = async() => {
        const response = await axios.get(`http://15.164.77.173:4000/subscription/${user_id}`)
        setSubscription(response.data)
    }
    const getUser = async() => {
        const response = await axios.get(`http://15.164.77.173:4000/user/${user_id}`)
        setUser(response.data)
    }
    useEffect(()=>{

        getUser()

    },[])
    useEffect(()=>{
        getUserSub()
    },[subscriptions])
    useEffect(()=>{
        getUserIps()
    },[ips])
    return(
        <div className="user-setting-container">
            <div className="user-setting-box">
                <h3>회원 이름 : {user.user_name}</h3>
                <h3>- 결제 관리</h3>
                <div className="user-setting-box-header">
                <div className="user-setting-box-header-item">결제일</div>
                <div className="user-setting-box-header-item">시작일</div>
                <div className="user-setting-box-header-item">종료일</div>
                </div>
                <SubAdd subscription={subscriptions} setSubscription={setSubscription} user_id={user_id} ></SubAdd> 
                {subscriptions.map((subscription,idx) => (
                    <SubSetting key={idx} subscription={subscription} subscriptions={subscriptions} user_id={user_id} setSubscription={setSubscription} ></SubSetting> 
                ))}

                <h3>- IP 관리</h3>
                <div className="user-setting-box-header">
                    <div className="user-setting-box-header-item">IP</div>
                </div>
                <IpAdd ips={ips} user_id={user_id} setIps={setIps}></IpAdd>
                {ips.map((ip,idx) => (
                    <IpSetting key={idx} ip={ip} ips={ips} user_id={user_id} setIps={setIps}></IpSetting>
                ))}
            </div>
        </div>
    );
}

export default UserSetting;