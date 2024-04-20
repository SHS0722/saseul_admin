import { useNavigate } from "react-router-dom";

const Board = (props) => {
    const {users} = props
    const navigate = useNavigate();
    return(
        <div className="board-container">
            <div className="board-header">
                <div className="board-header-item">이름</div>
                <div className="board-header-item">아이디</div>
                <div className="board-header-item">휴대전화</div>
                <div className="board-header-item">가입일</div>
                <div className="board-header-item">서비스 종료일</div>
            </div>
            <div>
                {users.map(user => (
                    <div key={user.id} className="board-item" onClick = {()=>navigate(`/user-setting/${user.user_id}`)}>
                        <div className="board-item-name">{user.user_name}</div>
                        <div className="board-item-email">{user.user_email}</div>
                        <div className="board-item-phone">{user.user_phone}</div>
                        <div className="board-item-date">{user.join_date}</div>
                        <div className={`board-item-date ${user.subscription.length === 0 ? 'no' : ''}`}>{user.subscription.length > 0? user.subscription[0].end_date : '결제 진행 안함'}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Board;