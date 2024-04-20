import { useState } from "react";
import { ButtonStyle } from "../../styleComponent/button_component";
import axios from "axios";

const IpSetting = (props) => {
    const { ip, user_id,setIps, ips } = props;
    const [newIp, setNewIp ] = useState('')
    const editIp = async() => {

        if(newIp === ''){
            alert('수정할 IP를 입력하세요.')
        }

        const data = {
            user_id,
            ip_id: ip.ip_id,
            ip : newIp
        }

        const response = await axios.put(`http://localhost:4000/ip/`,data)
        if(response.status === 200){
            alert('수정에 성공하였습니다.')
        }
    }
    const deleteIp = async() => {
        const req = {
            user_id,
            ip_id : ip.ip_id,
        }
        const response = await axios.delete(`http://localhost:4000/ip/`,{ data : req})
        if(response.status === 200){
            const updatedIps = ips.filter(ipd => ipd.ip_id !== ip.ip_id);
            setIps(updatedIps)
        }
    }
    return(
        <div className="sub-setting-container">
            <div className="setting-container">
                <div className="setting-item">
                    <input className='ip-input'type="text" value={newIp} placeholder={ip.ip} onChange={(e) => setNewIp(e.target.value)}></input>
                </div>
            </div>
            <div className="setting-button-box">
            <ButtonStyle width='50px' height='30px' onClick={()=>{editIp()}}>수정</ButtonStyle>
            <ButtonStyle width='50px' height='30px' onClick={()=>{deleteIp()}}>삭제</ButtonStyle>
            </div>
        </div>
    )
}
export default IpSetting;