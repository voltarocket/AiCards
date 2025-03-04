import { NavLink } from "react-router";

export function Header(){
    return (
        <>
            <div className="flex items-center justify-center gap-5 py-3 shadow-md">
                <img className="h-[50px]" src="../src/assets/ai-svgrepo-com.svg" alt="logo" />
                <NavLink to="/">
                    Главная
                </NavLink>
                <NavLink to="/">
                    Вход в систему
                </NavLink>
                <NavLink to="/">
                    Панель управления карточками
                </NavLink>
            </div>
        </>
    )
}