import LoginPage from "../pages/LoginPage";
import MainPage from "../pages/MainPage";
import QuotesPage from "../pages/QuotesPage";
import TaskPage from "../pages/TaskPage";
import TodoPage from "../pages/TodoPage";

export const privateRoutes = [
  { path: "/", element: <MainPage /> },
  { path: "/todo", element: <TodoPage /> },
  { path: "/todo/:id", element: <TaskPage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/quotes", element: <QuotesPage /> },
];
export const publickRoutes = [
  { path: "*", element: <LoginPage /> },
];
