import {NavLink} from "react-router-dom";

export default function NavBar() {
    return (
        <>
            <ul style={{listStyleType: "none", display: "flex", gap: "10px"}}>
                <li>
                    <NavLink to={"/"} className="link">Main</NavLink>
                </li>
                <li>
                    <NavLink to={"posts"} className="link">Posts</NavLink>
                </li>
            </ul>
        </>
    )
}