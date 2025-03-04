import { Header } from "../header/index.ts";
import { CardField } from "./CardField.js";
export function Dashboard(){
    return(
        <div className="flex flex-col items-center bg-gray-100">
            <CardField />
            <Header />
        </div>
    )
}