import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import Labelledinput from "./LabelledInput";
const SigninComp = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [success, setsuccess] = useState("");

  const fetchData = async () => {
    const response = await axios.post(
      "https://backend.shaa1891640.workers.dev/api/v1/user/signin",
      {
        data: {
          email,
          password,
        },
      }
    );
    if (!response) {
      console.error("Error", "failed to login");
    }
    setsuccess(response.data[0]);
  };
  console.log(success);
  return (
    <>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 sm:w-full">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 sm:w-full">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <div className="p-2 space-y-6 md:space-y-2 sm:p-8 flex items-center flex-col">
              <h1 className="text-3xl font-extrabold">Login</h1>
              <p className="text-md font-bold text-slate-500">
                Don't have an account <span className="font-bold text-blue-400"> <Link to={'/signup'}> Signup </Link> </span>
              </p>
            </div>
            <form action="#" className="space-y-4 md:space-y-6">
            <div>
              <Labelledinput placeholder='Shaa1891640@example.com' label='Email' onChange={(e)=>{setemail(e.target.value)}}/>
            </div>
            <div>
              <Labelledinput type="password" placeholder='Enter Password' label='Password' onChange={(e)=>{setpassword(e.target.value)}}/>
            </div>
              <button
                type="submit"
                onClick={fetchData}
                className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-6"
              >
                Login{" "}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default SigninComp;
