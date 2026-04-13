import { useState } from "react";

export default function AuthModal({ type, onClose, onLogin }) {
  const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "" });

  const handleSubmit = async () => {
    if (type === "signup") {
      if (form.password !== form.confirm) {
        alert("Passwords do not match");
        return;
      }

      const res = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      const data = await res.json();
      alert(data.msg);
    }

    if (type === "login") {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      const data = await res.json();

      if (data.user) {
        localStorage.setItem("user", JSON.stringify(data.user));
        onLogin(data.user);
        onClose();
      } else {
        alert(data.msg);
      }
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40">
      <div className="p-6 space-y-4 bg-white rounded w-96">

        <h2 className="text-xl font-bold">
          {type === "login" ? "Login" : "Signup"}
        </h2>

        {type === "signup" && (
          <input
            placeholder="Name"
            className="w-full p-2 border"
            onChange={e => setForm({ ...form, name: e.target.value })}
          />
        )}

        <input
          placeholder="Email"
          className="w-full p-2 border"
          onChange={e => setForm({ ...form, email: e.target.value })}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border"
          onChange={e => setForm({ ...form, password: e.target.value })}
        />

        {type === "signup" && (
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full p-2 border"
            onChange={e => setForm({ ...form, confirm: e.target.value })}
          />
        )}

        <button
          onClick={handleSubmit}
          className="w-full py-2 text-white bg-blue-600"
        >
          {type === "login" ? "Login" : "Signup"}
        </button>

        <button onClick={onClose} className="text-sm text-gray-500">
          Close
        </button>

      </div>
    </div>
  );
}