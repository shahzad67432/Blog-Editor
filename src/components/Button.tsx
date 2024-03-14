import { Link } from "react-router-dom"

export const Button = ()=>{
    return (
        <>
            <Link to={'/publish'}><button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-4 py-2 text-center me-2 mr-5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Publish</button></Link>
        </>
    )
}