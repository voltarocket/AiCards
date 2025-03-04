import { NavLink } from "react-router"

export function Login(){
    return(
        <div className="flex justify-center items-center bg-gray-100 pt-[100px]">
            <div className="w-[400px] flex flex-col shadow-md py-[50px] px-[70px] gap-3 bg-white rounded-3xl">
                <p>Login</p>
                <input type="text" placeholder="enter Login" />
                <p>Password</p>
                <input type="text" placeholder="enter Password" />
                <NavLink to="/" className=" flex justify-center border rounded-md">Log In</NavLink>
            </div>
        </div>
    )
}