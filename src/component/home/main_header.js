import { HomeHeader } from "../../styleComponent/main_header_component";
import '../../css/main_header.css';

const MainHeader = () => {
    return(
        <>
            <HomeHeader>
                <h3 className="header-title">회원관리</h3>
            </HomeHeader>
        </>
    );
}

export default MainHeader;