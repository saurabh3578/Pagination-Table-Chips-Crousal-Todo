import { Link } from "react-router-dom"

const Header=()=>{
    return(
        <div className="header-component">
            <ul>
                <li><Link to={"/chips"}>Chips</Link></li>
                <li><Link to={"/crousal"}>Crousal</Link></li>
                <li><Link to={"/pagination"}>Pagination</Link></li>
                <li><Link to={"/todo"}>Todo</Link></li>
            </ul>
        </div>
    )
}
export default Header