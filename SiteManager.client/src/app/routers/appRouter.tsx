import { Route, RouterProvider, createHashRouter, createRoutesFromElements } from "react-router-dom";
import { HomePage } from "../../pages/homePage";
import { Layout } from "../layout";
import { PostPage } from "../../pages/postPage";

export const AppRouter = () => {

    const routers = createRoutesFromElements(
        <Route
            path='/'
            element={<Layout />}
        >
            <Route
                index
                element={<HomePage />}
            />
            <Route
                path="post"
                element={<PostPage />}
            />
        </Route>
    );

    const router = createHashRouter(routers, {});
    return (
        <div>
            <RouterProvider router={router} />
        </div>
    );
}