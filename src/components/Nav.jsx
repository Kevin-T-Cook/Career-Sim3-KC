import { Link } from "react-router-dom";
import '../index.css'


function Nav(){
    return(
        <nav className="navBar">
            <div className="navContainer">
                <Link className="navEle" to={"/"}>HOME</Link>
                <Link className="navEle" to={"/createnew"}>CREATE NEW POST</Link>
            </div>
        </nav>
    )
}

export default Nav;