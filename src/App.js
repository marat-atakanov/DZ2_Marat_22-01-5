import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage";
import PostsPage from "./pages/PostsPage";
import NotFoundPage from "./pages/NotFoundPage";
import PostDetails from "./components/PostDetails";
import Layout from "./components/Layout";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<MainPage/>}/>
                    <Route path="posts" element={<PostsPage/>}/>
                </Route>

                <Route path="*" element={<NotFoundPage/>}/>
                <Route path="posts/:id" element={<PostDetails/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
