import axios from "axios";
import { ButtonStyle } from "../../styleComponent/button_component";
import { useState } from "react";

const SubSetting = (props) => {
    const { subscription, user_id,setSubscription, subscriptions } = props;
    const [ subscription_date, setSubDate ] = useState('');
    const [ start_date, setStartDate ] = useState('');
    const [ end_date, setEndDate ] = useState('');
    const [isDeleted, setIsDeleted] = useState(false);
    function isValidDate(dateString) {
        // 날짜 형식이 YYYY-MM-DD인지 확인하는 정규식
        const regex = /^\d{4}-\d{2}-\d{2}$/;
        
        // 정규식과 매치되는지 확인하여 유효한 날짜인지 반환
        return regex.test(dateString);
    }
    const deleteSub = async() => {
        const response = await axios.delete(`http://localhost:4000/subscription/${subscription.subscription_id}`)
        if(response.status === 200){
            const updatedSubscriptions = subscriptions.filter(sub => sub.subscription_id !== subscription.subscription_id);
            setSubscription(updatedSubscriptions)
        }
    }
    const editSub = async() => {
        let subDate = subscription_date;
        let startDate = start_date;
        let endDate = end_date;
        if(subscription_date === ''){
            subDate = subscription.subscription_date;
        }
        if(start_date === ''){
            startDate = subscription.start_date;
        }
        if(end_date === ''){
            endDate = subscription.end_date;
        }
        if(!isValidDate(subDate) || !isValidDate(startDate) || !isValidDate(endDate)){
            alert('날짜 형식을 맞춰주세요.')
            return;
        }
        const data = {
            user_id,
            subscription_id : subscription.subscription_id,
            subscription_date : subDate,
            start_date : startDate,
            end_date : endDate

        }

        const response = await axios.put(`http://localhost:4000/subscription/`,data)
        if(response.status === 200){
            alert('수정에 성공하였습니다.')
        }

    }

    return(
        <div className="sub-setting-container">
            <div className="setting-container">
                <div className="setting-item">
                    <input type="text" placeholder={subscription.subscription_date} onChange={(e) => setSubDate(e.target.value)}></input>
                </div>
                <div className="setting-item">
                    <input type="text" placeholder={subscription.start_date} onChange={(e) => setStartDate(e.target.value)}></input>
                </div>
                <div className="setting-item"> 
                    <input type="text" placeholder={subscription.end_date} onChange={(e) => setEndDate(e.target.value)}></input>
                </div>
            </div>
            <div className="setting-button-box">
            <ButtonStyle width='50px' height='30px' onClick={()=>{editSub()}}>수정</ButtonStyle>
            <ButtonStyle width='50px' height='30px' onClick={()=>{deleteSub()}}>삭제</ButtonStyle>
            </div>
        </div>

    );
}

export default SubSetting;