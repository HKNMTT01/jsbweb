import { useEffect, useState } from "react";
import { supabase } from "../../../lib/supabase";

type Gallery = {
  id: number;
  title: string;
  image_url: string;
  year: number;
  type: string;
};

export default function GalleryAdmin() {
  const [items, setItems] = useState<Gallery[]>([]);
  const [form, setForm] = useState({
    title: "",
    image_url: "",
    year: new Date().getFullYear(),
    type: "Photo",
  });

  useEffect(() => {
    loadGallery();
  }, []);

  async function loadGallery() {
    const { data } = await supabase
      .from("gallery")
      .select("*")
      .order("id", { ascending: false });

    setItems(data || []);
  }

  async function addGallery(e: React.FormEvent) {
    e.preventDefault();
    await supabase.from("gallery").insert([form]);

    setForm({
      title: "",
      image_url: "",
      year: new Date().getFullYear(),
      type: "Photo",
    });

    loadGallery();
  }

  async function deleteGallery(id: number) {
    await supabase.from("gallery").delete().eq("id", id);
    loadGallery();
  }

  return (
    <div>
      <h1 className="text-4xl font-black">Gallery</h1>

      <form
        onSubmit={addGallery}
        className="mt-8 rounded-[2rem] bg-white p-6 shadow-lg"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <input
            className="rounded-xl border px-4 py-3"
            placeholder="Gallery title"
            value={form.title}
            onChange={(e) =>
              setForm({ ...form, title: e.target.value })
            }
            required
          />

          <input
            className="rounded-xl border px-4 py-3"
            placeholder="Image / Video URL"
            value={form.image_url}
            onChange={(e) =>
              setForm({ ...form, image_url: e.target.value })
            }
            required
          />

          <input
            type="number"
            className="rounded-xl border px-4 py-3"
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
            <option>Photo</option>
            <option>Video</option>
          </select>
        </div>

        <button className="mt-4 rounded-xl bg-[#0066b3] px-6 py-3 font-black text-white">
          Add Gallery
        </button>
      </form>

      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {items.map((item) => (
          <div
            key={item.id}
            className="rounded-[1.5rem] bg-white p-4 shadow-md"
          >
            <img
              src={item.image_url}
              alt={item.title}
              className="h-48 w-full rounded-xl object-cover"
            />

            <h2 className="mt-4 font-black">{item.title}</h2>
            <p className="text-sm text-slate-500">
              {item.type} / {item.year}
            </p>

            <button
              onClick={() => deleteGallery(item.id)}
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