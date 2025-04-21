import { Link } from "react-router-dom";
export default function Error() {
    return (
        <div>
            <h1>404 Error:Page Not Found</h1>
            <Link className="bg-red-900 m-1" to="/home">Go back to Home</Link>
        </div>
    )
}