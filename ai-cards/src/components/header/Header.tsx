import { NavLink } from "react-router";

export function Header(){
    return (
        <>
            <div className="flex items-center justify-center bg-white w-[260px] gap-5 px-5 py-3 shadow-xl rounded-3xl">
                <NavLink to="/">
                    <img className="h-[30px] hover:shadow-red-500/50 " src="../src/assets/ai-svgrepo-com.svg" alt="logo" />
                </NavLink>
                <NavLink to="/dashboard">
                    Dashboard
                </NavLink>
                <NavLink className="border px-2 rounded-md" to="/login">
                    Sign In
                </NavLink>
            </div>
        </>
    )
}