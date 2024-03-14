import { Link } from "react-router-dom"

interface blogCardTypes {
    title: string,
    content:string,
    publishedDate:string,
    authorName:string,
    id:string,
    likes?:number,
    dislikes?:number,
    comments?:number,
}
const BlogsCard = ({
    id,
    title,
    content,
    publishedDate,
    authorName,
}:blogCardTypes)=>{

    return (
        <Link to={`/blog/${id}`}>
            <div className="w-full bg-white dark:border md:mt-4 sm:max-w-3xl lg:p-6 sm:w-full p-10 cursor-pointer">
            <div className="flex flex-col justify-center border-b border-slate-400">
                <div className="text-sm font-light mt-1">
                    <Avatar name={authorName} size={6} fontWeight="light"/> {authorName} {publishedDate}
                </div>
                <div className="font-bold text-2xl my-3">
                    {title}
                </div>
                <div className="my-1 text-md font-thin">
                    {content.slice(0, 200) + '...'}
                </div>
                <div className="text-slate-400 font-thin">
                    {Math.ceil(content.length/100) + " " +  "min read"}
                </div>
            </div>
            </div>
        </Link>
    )
}

export default BlogsCard

export function Avatar({name, size=6, fontWeight,}:{name: string, size:number, fontWeight:string}){
    return (

        <div className={`relative inline-flex items-center justify-center w-8 h-8 w-${size} h-${size} overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600`}>
            <span className={`text-sm font-${fontWeight} text-gray-600 dark:text-gray-300`}>{name[0]}</span>
        </div>

    )
}