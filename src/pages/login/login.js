import { useState } from "react";
import { SearchStyle } from "../../styleComponent/search_component";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
    const { isLogin, setIsLogin } = props;
    const [pw, setPw] = useState('')
    const navigate = useNavigate();
    const login = () => {
        if(pw === 'rmfo3333'){
            setIsLogin(true);
            navigate('/')
        }else {
            setPw('')
            alert('비밀번호가 틀렸습니다.')
        }
    }
    return(
        <div className="user-setting-container">
            <input type="password" value={pw} onChange={(e)=>{setPw(e.target.value)}} placeholder="비밀번호를 입력하세요."></input>
            <button onClick={()=>{login()}}>로그인</button>
        </div>
    )
}

export default Login;