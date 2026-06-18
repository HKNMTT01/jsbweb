import { useState } from "react";
import { useNavigate } from "react-router";
import { isSupabaseConfigured, supabase } from "../../../lib/supabase";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (!isSupabaseConfigured) {
      setLoading(false);
      setError(
        "Supabase is not connected yet. Create .env.local and add VITE_SUPABASE_URL + VITE_SUPABASE_ANON_KEY first.",
      );
      return;
    }

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      setError(error.message);
      return;
    }

    navigate("/admin/dashboard");
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#003b64] via-[#006b8f] to-[#00a884] px-6">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-md rounded-[2rem] bg-white/95 p-8 shadow-2xl"
      >
        <h1 className="text-3xl font-black text-[#073e63]">
          Admin Login
        </h1>
        <p className="mt-2 text-sm text-slate-500">
          JETAMA Website Management Panel
        </p>

        <div className="mt-5 rounded-2xl border border-[#00a884]/20 bg-[#eefbf7] p-4 text-sm leading-6 text-[#073e63]">
          <b>How to open admin:</b> click the Admin button in the navigation,
          or open <b>/admin/login</b> directly. Use the admin email you create
          in Supabase Authentication.
        </div>

        {!isSupabaseConfigured && (
          <div className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-800">
            Supabase is not connected yet. Follow SUPABASE_SETUP.md, then restart
            your website with <b>npm run dev</b>.
          </div>
        )}

        {error && (
          <div className="mt-5 rounded-xl bg-red-50 p-3 text-sm text-red-600">
            {error}
          </div>
        )}

        <div className="mt-6 space-y-4">
          <div>
            <label className="text-sm font-bold text-slate-700">
              Email
            </label>
            <input
              type="email"
              className="mt-2 w-full rounded-xl border px-4 py-3 outline-none focus:border-[#00a884]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@jetama.com.my"
              required
            />
          </div>

          <div>
            <label className="text-sm font-bold text-slate-700">
              Password
            </label>
            <input
              type="password"
              className="mt-2 w-full rounded-xl border px-4 py-3 outline-none focus:border-[#00a884]"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
              required
            />
          </div>

          <button
            disabled={loading}
            className="w-full rounded-xl bg-gradient-to-r from-[#0066b3] to-[#00a884] py-3 font-black text-white shadow-lg disabled:opacity-60"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </div>
      </form>
    </main>
  );
}