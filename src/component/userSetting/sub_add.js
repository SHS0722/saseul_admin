import axios from "axios";
import { ButtonStyle } from "../../styleComponent/button_component";
import { useState } from "react";

const SubAdd = (props) => {
    const { subscription, user_id, setSubscription } = props;
    const [ subscription_date, setSubDate ] = useState('');
    const [ start_date, setStartDate ] = useState('');
    const [ end_date, setEndDate ] = useState('');
    function isValidDate(dateString) {
        // 날짜 형식이 YYYY-MM-DD인지 확인하는 정규식
        const regex = /^\d{4}-\d{2}-\d{2}$/;
        
        // 정규식과 매치되는지 확인하여 유효한 날짜인지 반환
        return regex.test(dateString);
    }

    const addSub = async() => {
        let subDate = subscription_date;
        let startDate = start_date;
        let endDate = end_date;
        if(subscription_date === ''){
            alert('결제일을 입력하세요')
            return;
        }
        if(start_date === ''){
            alert('시작일을 입력하세요.')
            return;
        }
        if(end_date === ''){
            alert('종료일을 입력하세요..')
            return;
        }
        if(!isValidDate(subDate) || !isValidDate(startDate) || !isValidDate(endDate)){
            alert('날짜 형식을 맞춰주세요.')
            return;
        }
        const data = {
            subscription_date : subDate,
            start_date : startDate,
            end_date : endDate
        }

        const response = await axios.post(`http://15.164.77.173:4000/subscription/${user_id}`,data)
        if(response.status === 201){
            setSubDate('')
            setStartDate('')
            setEndDate('')
            console.log(response.data)
            const updatedSubscription = [response.data, ...subscription.slice(1)];
            setSubscription(updatedSubscription)
            console.log(subscription)
            alert('추가 완료되었습니다.')
        }else {
            alert('서버 오류')
        }

    }

    return(
        <div className="sub-setting-container">
            <div className="setting-container">
                <div className="setting-item">
                    <input type="text" placeholder='YYYY-MM-DD' value={subscription_date} onChange={(e) => setSubDate(e.target.value)}></input>
                </div>
                <div className="setting-item">
                    <input type="text" placeholder='YYYY-MM-DD' value={start_date} onChange={(e) => setStartDate(e.target.value)}></input>
                </div>
                <div className="setting-item"> 
                    <input type="text" placeholder='YYYY-MM-DD' value={end_date} onChange={(e) => setEndDate(e.target.value)}></input>
                </div>
            </div>
            <div className="setting-button-box">
            <ButtonStyle width='50px' height='30px' onClick={()=>{addSub()}}>추가</ButtonStyle>
            </div>
        </div>

    );
}

export default SubAdd;