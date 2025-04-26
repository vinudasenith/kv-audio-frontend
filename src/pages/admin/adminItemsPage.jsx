import { FaCirclePlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
export default function AdminItemsPage() {
    return (
        <div className="w-full h-full bg-white relative">
            <Link to="/admin/items/add">
                <FaCirclePlus className="text-[50px] absolute left-2 bottom-2 hover:text-[55px] cursor-pointer  " />
            </Link>

        </div>
    )
}