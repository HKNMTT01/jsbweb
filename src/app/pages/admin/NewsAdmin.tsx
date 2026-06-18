import { useEffect, useState } from "react";
import { supabase } from "../../../lib/supabase";

type News = {
  id: number;
  title: string;
  description: string;
  image_url: string;
  year: number;
  type: string;
  created_at: string;
};

export default function NewsAdmin() {
  const [items, setItems] = useState<News[]>([]);
  const [form, setForm] = useState({
    title: "",
    description: "",
    image_url: "",
    year: new Date().getFullYear(),
    type: "News",
  });

  useEffect(() => {
    loadNews();
  }, []);

  async function loadNews() {
    const { data } = await supabase
      .from("news")
      .select("*")
      .order("created_at", { ascending: false });

    setItems(data || []);
  }

  async function addNews(e: React.FormEvent) {
    e.preventDefault();

    await supabase.from("news").insert([form]);

    setForm({
      title: "",
      description: "",
      image_url: "",
      year: new Date().getFullYear(),
      type: "News",
    });

    loadNews();
  }

  async function deleteNews(id: number) {
    await supabase.from("news").delete().eq("id", id);
    loadNews();
  }

  return (
    <div>
      <h1 className="text-4xl font-black">News & Events</h1>

      <form
        onSubmit={addNews}
        className="mt-8 rounded-[2rem] bg-white p-6 shadow-lg"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <input
            className="rounded-xl border px-4 py-3"
            placeholder="News title"
            value={form.title}
            onChange={(e) =>
              setForm({ ...form, title: e.target.value })
            }
            required
          />

          <input
            className="rounded-xl border px-4 py-3"
            placeholder="Image URL"
            value={form.image_url}
            onChange={(e) =>
              setForm({ ...form, image_url: e.target.value })
            }
          />

          <input
            type="number"
            className="rounded-xl border px-4 py-3"
            placeholder="Year"
            value={form.year}
            onChange={(e) =>
              setForm({ ...form, year: Number(e.target.value) })
            }
          />

          <select
            className="rounded-xl border px-4 py-3"
            value={form.type}
            onChange={(e) =>
              setForm({ ...form, type: e.target.value })
            }
          >
            <option>News</option>
            <option>Event</option>
            <option>Announcement</option>
          </select>
        </div>

        <textarea
          className="mt-4 w-full rounded-xl border px-4 py-3"
          placeholder="Description"
          rows={5}
          value={form.description}
          onChange={(e) =>
            setForm({ ...form, description: e.target.value })
          }
          required
        />

        <button className="mt-4 rounded-xl bg-[#0066b3] px-6 py-3 font-black text-white">
          Add News
        </button>
      </form>

      <div className="mt-8 grid gap-5">
        {items.map((item) => (
          <div
            key={item.id}
            className="rounded-[1.5rem] bg-white p-5 shadow-md"
          >
            <h2 className="text-xl font-black">{item.title}</h2>
            <p className="mt-2 text-slate-500">
              {item.description}
            </p>
            <p className="mt-2 text-sm font-bold text-[#00a884]">
              {item.type} / {item.year}
            </p>

            <button
              onClick={() => deleteNews(item.id)}
              className="mt-4 rounded-xl bg-red-500 px-4 py-2 font-bold text-white"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}