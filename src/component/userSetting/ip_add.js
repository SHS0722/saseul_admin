import { useState } from "react";
import { ButtonStyle } from "../../styleComponent/button_component";
import axios from "axios";

const IpAdd = (props) => {
    const { user_id,setIps, ips } = props;
    const [newIp, setNewIp] = useState('')
    const addIp = async() => {
        if(newIp === ''){
            alert('추가할 IP를 입력해주세요.')
        }
        const data = {
            user_id,
            ip : newIp
        }

        const response = await axios.post(`http://15.164.77.173:4000/ip/`,data)
        if(response.status === 201){
            setNewIp('')
            const updatedIps = [response.data, ...ips.slice(1)];
            setIps(updatedIps)
            alert('추가 완료되었습니다.')
        }else {
            alert('서버 오류')
        }
    }
    return(
        <div className="sub-setting-container">
            <div className="setting-container">
                <div className="setting-item">
                    <input className='ip-input'type="text" value={newIp} placeholder='아이피를 입력하세요' onChange={(e) => {setNewIp(e.target.value)}}></input>
                </div>
            </div>
            <div className="setting-button-box">
            <ButtonStyle width='50px' height='30px' onClick={()=>{addIp()}}>추가</ButtonStyle>
            </div>
        </div>
    )
}
export default IpAdd;