import { useState } from "react";
import { ButtonStyle } from "../../../styleComponent/button_component";
import { SearchStyle } from "../../../styleComponent/search_component";
import axios from "axios";

const Search = (props) => {
    const { inputData, setInputData, setUsers, setTotalPage } = props;
    const searchUsers = async() => {
        const response = await axios.get(`http://15.164.77.173:4000/user/?page=1&search=${inputData}`)
        setUsers(response.data.users)
        setTotalPage(response.data.totalPages)
    }
    return(
        <div className="search-container">
            <SearchStyle type="text" onChange={(e) => setInputData(e.target.value)} placeholder="이름 혹은 아이디를 입력하세요."></SearchStyle>
            <ButtonStyle width="80px" height="41px" margin_left="2px" onClick={()=>{searchUsers()}}>검색</ButtonStyle>
        </div>
    );
}

export default Search;