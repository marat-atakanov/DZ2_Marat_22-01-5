import {useNavigate} from "react-router-dom";

export default function NotFoundPage() {
    const navigate = useNavigate()

    const goToMain = () => {
        navigate("/")
    }
    return  (
        <>
            <h1>Not found</h1>
            <button onClick={goToMain}>back to main page</button>
        </>
    )
}