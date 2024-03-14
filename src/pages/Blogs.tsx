import { Appbar } from "../components/Appbar";
import BlogsCard from "../components/BlogsCard";
import { useBlogs } from "../hooks";

function Blogs() {
  const { blogs, loading } = useBlogs();

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div>
        <Appbar/>
        <div className="flex justify-center">
          <div className="flex justify-center flex-col max-w-3xl sm:w-full">
            <BlogsCard
              id={"1"}
              title={"Learning the advance things day by day"}
              content={
                "Learning the advance things day by day would not led machines rule over you Learning the advance things day by day would not led machines rule over you"
              }
              publishedDate="17 feb,2023"
              authorName="Shahzad Ali."
            />
            <BlogsCard
              id={"1"}
              title={"Learning the advance things day by day"}
              content={
                "Learning the advance things day by day would not led machines rule over you Learning the advance things day by day would not led machines rule over you"
              }
              publishedDate="17 feb,2023"
              authorName="Shahzad Ali."
            />
            {blogs.map((blog) => (
              <BlogsCard
                id={blog.id}
                title={blog.title}
                content={blog.content}
                publishedDate="17 feb,2023"
                authorName={blog.author.firstname || "Anonymous"}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Blogs;
