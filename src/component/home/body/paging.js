import axios from "axios";

const Paging = (props) => {
    let {setUsers,currentPage,setCurrentPage,totalPage,setTotalPage,inputData} = props;
    const searchUsers = async(page) => {
        const response = await axios.get(`http://15.164.77.173:4000/user/?page=${page}&search=${inputData}`)
        setUsers(response.data.users)
        setTotalPage(response.data.totalPages)
    }
    const prevPage = () => {
        if(currentPage > 1){
            const prev_page = currentPage - 1;
            setCurrentPage(prev_page);
            searchUsers(prev_page)
        }
    }

    const nextPage = () => {
        if(currentPage < totalPage){
            const next_page = currentPage + 1;
            setCurrentPage(next_page);
            searchUsers(next_page)
        }
    }
    return(
        <div className="paging-container">{totalPage <= 1? null :
            <div className="pagination">
                <button
                    onClick={prevPage}
                    disabled={currentPage === 1}
                >
                    이전
                </button>
                <span>
                    {currentPage} / {totalPage}
                </span>
                <button
                    onClick={nextPage}
                    disabled={currentPage === totalPage}
                >
                    다음
                </button>
            </div>
            }
        </div>
    );
}

export default Paging;