import { useEffect, useState } from "react";
import AuthModal from "../../pages/AuthModal";

export default function Sidebar() {
   const [user, setUser] = useState(null);
  const [modal, setModal] = useState(null);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("user"));
    setUser(stored);
  }, []);

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <aside className="w-64 h-screen p-6 border-r">
      <h2 className="mb-6 text-lg font-bold">Portfolio</h2>

      <nav className="flex flex-col gap-3">
        <a href="/">Overview</a>
        <a href="/holdings">Holdings</a>
        <a href="/analytics">Analytics</a>
        <a href="/watchlist">WatchList</a>
      </nav>
      
      <div>
        {!user ? (
          <div className="space-y-2">
            <button
              onClick={() => setModal("login")}
              className="w-full py-2 text-white bg-blue-600"
            >
              Login
            </button>

            <button
              onClick={() => setModal("signup")}
              className="w-full py-2 border"
            >
              Signup
            </button>
          </div>
        ) : (
          <div className="space-y-2">
            <p className="font-semibold">{user.name}</p>
            <p className="text-sm text-gray-500">{user.email}</p>

            <button
              onClick={logout}
              className="w-full py-2 text-white bg-red-500"
            >
              Logout
            </button>
          </div>
        )}
      </div>

      {/* 🔥 MODAL */}
      {modal && (
        <AuthModal
          type={modal}
          onClose={() => setModal(null)}
          onLogin={(u) => setUser(u)}
        />
      )}
    </aside>
  );
}