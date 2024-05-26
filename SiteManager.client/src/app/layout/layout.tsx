import { Outlet } from "react-router-dom";
import { Header } from "../../widgets/header";
import './layout.scss';

export const Layout = () => {
    return (
        <div className="layout layout_wrapper">
            <Header />

            <main className="layout_content">
                <Outlet/>
            </main>
        </div>
    );
}