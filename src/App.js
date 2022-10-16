import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import CleanUpFunction from "./pages/CleanUpFunction";
import CustomHooks from "./pages/CustomHooks";
import Home from "./pages/Home";
import MemoHook from "./pages/MemoHook";
import MyTheme from "./pages/MyTheme";
import ReactQuery from "./pages/ReactQuery";
import User from "./pages/User";

const App = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/context-theme" element={<MyTheme />} />
              <Route path="use-memo" element={<MemoHook />} />
              <Route path="cleanup-function" element={<CleanUpFunction />} />
              <Route path="/user/:id" element={<User />} />
              <Route path="/custom-hook" element={<CustomHooks />} />
              <Route path="/react-query" element={<ReactQuery />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
};

export default App;
