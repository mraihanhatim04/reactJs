import Footer from "./components/Footer";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Loading from "./components/Loading";

// code splitting - performance optimization
import { lazy, Suspense } from "react";

const CounterPage = lazy(() => import("./pages/CounterPage"));
const WishlistPage = lazy(() => import("./pages/WishlistPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage"));
const ProfilePage = lazy(() => import("./pages/ProfilePage"));

import { Toaster } from "sonner";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Toaster richColors position="top-center" />
      <Navigation />

      <Routes>
        <Route
          element={
            <Suspense fallback={<Loading />}>
              <CounterPage />
            </Suspense>
          }
          path="/"
        />
        <Route
          element={
            <Suspense fallback={<Loading />}>
              <WishlistPage />
            </Suspense>
          }
          path="/wishlist-page"
        />
        <Route
          element={
            <Suspense fallback={<Loading />}>
              <RegisterPage />
            </Suspense>
          }
          path="/auth/register-page"
        />
        <Route
          element={
            <Suspense fallback={<Loading />}>
              <ProfilePage />
            </Suspense>
          }
          path="/profile/:username"
        />
        <Route element={<Header />} path="/header-Page" />
      </Routes>

      {/* <TodoCard day="Tuesday" numberOfActicities={10} /> */}

      {/* <Divider className="pt-10" />
      <Counter />
      <Divider className="pt-10" /> */}
      {/* <Footer /> */}
    </>
  );
}

export default App;
