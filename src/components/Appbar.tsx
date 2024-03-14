import { Link} from "react-router-dom"
import { Avatar } from "./BlogsCard"
import { Button } from "./Button"

export const Appbar = ()=>{
    return (
        <div className=" flex justify-between border-b px-16 py-2">
            <Link to={'/blogs'} className="font-bold text-xl flex justify-center cursor-pointer ">
                <div className="flex justify-center flex-col text-center ">
                    Medium
                </div>
            </Link>
            <div>
                <Button/>
                <Avatar name={"Shahzad"} size={10} fontWeight="bold"/>
            </div>
        </div>
    )

}