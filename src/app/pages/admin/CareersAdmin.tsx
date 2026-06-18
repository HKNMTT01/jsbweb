import { useEffect, useState } from "react";
import { supabase } from "../../../lib/supabase";

type Career = {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  is_active: boolean;
};

export default function CareersAdmin() {
  const [items, setItems] = useState<Career[]>([]);
  const [form, setForm] = useState({
    title: "",
    department: "",
    location: "",
    type: "Full Time",
    description: "",
    is_active: true,
  });

  useEffect(() => {
    loadCareers();
  }, []);

  async function loadCareers() {
    const { data } = await supabase
      .from("careers")
      .select("*")
      .order("id", { ascending: false });

    setItems(data || []);
  }

  async function addCareer(e: React.FormEvent) {
    e.preventDefault();

    await supabase.from("careers").insert([form]);

    setForm({
      title: "",
      department: "",
      location: "",
      type: "Full Time",
      description: "",
      is_active: true,
    });

    loadCareers();
  }

  async function deleteCareer(id: number) {
    await supabase.from("careers").delete().eq("id", id);
    loadCareers();
  }

  return (
    <div>
      <h1 className="text-4xl font-black">Careers</h1>

      <form
        onSubmit={addCareer}
        className="mt-8 rounded-[2rem] bg-white p-6 shadow-lg"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <input
            className="rounded-xl border px-4 py-3"
            placeholder="Job title"
            value={form.title}
            onChange={(e) =>
              setForm({ ...form, title: e.target.value })
            }
            required
          />

          <input
            className="rounded-xl border px-4 py-3"
            placeholder="Department"
            value={form.department}
            onChange={(e) =>
              setForm({ ...form, department: e.target.value })
            }
          />

          <input
            className="rounded-xl border px-4 py-3"
            placeholder="Location"
            value={form.location}
            onChange={(e) =>
              setForm({ ...form, location: e.target.value })
            }
          />

          <select
            className="rounded-xl border px-4 py-3"
            value={form.type}
            onChange={(e) =>
              setForm({ ...form, type: e.target.value })
            }
          >
            <option>Full Time</option>
            <option>Contract</option>
            <option>Internship</option>
            <option>Part Time</option>
          </select>
        </div>

        <textarea
          className="mt-4 w-full rounded-xl border px-4 py-3"
          placeholder="Job description"
          rows={5}
          value={form.description}
          onChange={(e) =>
            setForm({ ...form, description: e.target.value })
          }
          required
        />

        <button className="mt-4 rounded-xl bg-[#0066b3] px-6 py-3 font-black text-white">
          Add Career
        </button>
      </form>

      <div className="mt-8 grid gap-5">
        {items.map((item) => (
          <div
            key={item.id}
            className="rounded-[1.5rem] bg-white p-5 shadow-md"
          >
            <h2 className="text-xl font-black">{item.title}</h2>
            <p className="mt-1 text-sm font-bold text-[#00a884]">
              {item.department} / {item.location} / {item.type}
            </p>
            <p className="mt-3 text-slate-500">
              {item.description}
            </p>

            <button
              onClick={() => deleteCareer(item.id)}
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