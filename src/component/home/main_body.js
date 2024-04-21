import { useEffect, useState } from "react";
import Board from "./body/board";
import Search from "./body/search";
import '../../css/main_body.css'
import Paging from "./body/paging";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const MainBody = (props) => {
    const navigate = useNavigate();
    const [ users, setUsers ] = useState([]);
    const [currentPage, setCurrentPage ] = useState(1);
    const [totalPage,setTotalPage] = useState(0);
    const [inputData, setInputData] = useState('')
    const { isLogin } = props;
    const searchUsers = async() => {
        if(!isLogin){
            navigate('/login')
        }
        const response = await axios.get(`http://15.164.77.173:4000/user/?page=1&search=`)
        console.log(response)
        setUsers(response.data.users)
        setTotalPage(response.data.totalPages)
    }
    useEffect(()=>{
        searchUsers();
    },[])
    return(
        <div className="main-body-container">
            <div className="main-body">
                <Search setUsers={setUsers} setTotalPage={setTotalPage} inputData={inputData} setInputData={setInputData}></Search>
                <Board users={users} setUsers={setUsers}></Board>
                <Paging setUsers={setUsers} currentPage={currentPage} setCurrentPage={setCurrentPage} totalPage={totalPage} setTotalPage={setTotalPage} inputData={inputData}></Paging>
            </div>
        </div>
    );
}

export default MainBody;