"use client";

import { useEffect, useState } from "react";

interface Faq {
  _id: string;
  question: string;
  answer: string;
  category: string;
  displayOrder: number;
  isActive: boolean;
}

export default function FaqSection() {
  const [faqs, setFaqs] = useState<Faq[]>([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  const [selectedCategory, setSelectedCategory] = useState("All");

  const [showModal, setShowModal] = useState(false);

  const [editingFaq, setEditingFaq] = useState<Faq | null>(null);

  const [form, setForm] = useState({
    question: "",
    answer: "",
    category: "General",
    displayOrder: 0,
    isActive: true,
  });

  async function loadFaqs() {
    try {
      const res = await fetch("/api/faq");
      const data = await res.json();

      if (data.success) {
        setFaqs(data.faqs);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadFaqs();
  }, []);

  async function toggleStatus(faq: Faq) {
    try {
      const res = await fetch("/api/faq", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: faq._id,
          ...faq,
          isActive: !faq.isActive,
        }),
      });

      const data = await res.json();

      if (data.success) {
        loadFaqs();
      } else {
        alert(data.error || "Failed to update status");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    }
  }

  async function handleSave() {
    try {
      const method = editingFaq ? "PUT" : "POST";

      const body = editingFaq
        ? {
            id: editingFaq._id,
            ...form,
          }
        : form;

      const res = await fetch("/api/faq", {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const data = await res.json();

      if (data.success) {
        setShowModal(false);
        await loadFaqs();
      } else {
        alert(data.error || "Failed to save FAQ");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    }
  }

  return (
    <div className="space-y-6">

      <div className="flex items-center justify-between">

        <div>
          <h1 className="text-3xl font-bold text-white">
            FAQ Manager
          </h1>

          <p className="mt-1 text-zinc-400">
            {faqs.length} FAQs
          </p>
        </div>

        <button
          onClick={() => {
            setEditingFaq(null);

            setForm({
              question: "",
              answer: "",
              category: "General",
              displayOrder: faqs.length,
              isActive: true,
            });

            setShowModal(true);
          }}
          className="rounded-lg bg-amber-500 px-5 py-2.5 font-semibold text-white hover:bg-amber-400"
        >
          + Add FAQ
        </button>

      </div>

      <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-4">
        <input
          type="text"
          placeholder="Search FAQs..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-3 text-white outline-none focus:border-amber-500"
        />
      </div>

      <div className="flex flex-wrap gap-2">

        {[
          "All",
          "General",
          "Wedding",
          "Engagement",
          "Maternity",
          "Birthday",
          "Couple Shoot",
        ].map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`rounded-full px-4 py-2 text-sm transition ${
              selectedCategory === category
                ? "bg-amber-500 text-black"
                : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
            }`}
          >
            {category}
          </button>
        ))}

      </div>

      {loading ? (

        <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-10 text-center">
          Loading FAQs...
        </div>

      ) : faqs.length === 0 ? (

        <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-10 text-center text-zinc-500">
          No FAQs found.
        </div>

      ) : (

        <div className="space-y-4">

          {faqs
            .filter((faq: Faq) => {
              const keyword = search.toLowerCase();

              const matchesSearch =
                faq.question.toLowerCase().includes(keyword) ||
                faq.answer.toLowerCase().includes(keyword) ||
                faq.category.toLowerCase().includes(keyword);

              const matchesCategory =
                selectedCategory === "All" ||
                faq.category === selectedCategory;

              return matchesSearch && matchesCategory;
            })
            .map((faq: Faq) => (

            <div
              key={faq._id}
              className="rounded-xl border border-zinc-800 bg-zinc-900 p-5"
            >

              <div className="flex items-center justify-between">

                <div>

                  <div className="flex items-center gap-2">

                    <span className="rounded-full bg-amber-500/20 px-3 py-1 text-xs font-medium text-amber-400">
                      {faq.category}
                    </span>

                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium ${
                        faq.isActive
                          ? "bg-green-500/20 text-green-400"
                          : "bg-red-500/20 text-red-400"
                      }`}
                    >
                      {faq.isActive ? "Active" : "Inactive"}
                    </span>

                  </div>

                  <h2 className="mt-2 text-xl font-semibold text-white">
                    {faq.question}
                  </h2>

                  <p className="mt-2 text-sm text-zinc-400 line-clamp-2">
                    {faq.answer}
                  </p>

                </div>

                <div className="flex gap-2 flex-wrap">

                  <button
                    onClick={() => toggleStatus(faq)}
                    className={`rounded-lg px-4 py-2 text-white ${
                      faq.isActive
                        ? "bg-orange-600 hover:bg-orange-500"
                        : "bg-green-600 hover:bg-green-500"
                    }`}
                  >
                    {faq.isActive ? "Hide" : "Publish"}
                  </button>

                  <button
                    onClick={() => {
                      setEditingFaq(faq);

                      setForm({
                        question: faq.question,
                        answer: faq.answer,
                        category: faq.category,
                        displayOrder: faq.displayOrder,
                        isActive: faq.isActive,
                      });

                      setShowModal(true);
                    }}
                    className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-500"
                  >
                    Edit
                  </button>

                  <button
                    onClick={async () => {
                      const confirmDelete = window.confirm(
                        `Delete "${faq.question}"?`
                      );

                      if (!confirmDelete) return;

                      try {
                        const res = await fetch(
                          `/api/faq?id=${faq._id}`,
                          {
                            method: "DELETE",
                          }
                        );

                        const data = await res.json();

                        if (data.success) {
                          loadFaqs();
                        } else {
                          alert(data.error || "Delete failed");
                        }
                      } catch (error) {
                        console.error(error);
                        alert("Something went wrong.");
                      }
                    }}
                    className="rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-500"
                  >
                    Delete
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      )}

      {showModal && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/70 p-4">
        <div className="w-full max-w-2xl rounded-2xl border border-zinc-700 bg-zinc-900 shadow-2xl">

          <div className="flex items-center justify-between border-b border-zinc-800 p-6">
            <h2 className="text-xl font-bold text-white">
              {editingFaq ? "Edit FAQ" : "Add FAQ"}
            </h2>

            <button
              onClick={() => setShowModal(false)}
              className="text-zinc-400 hover:text-white"
            >
              ✕
            </button>
          </div>

          <div className="space-y-5 p-6">

            {/* Question */}
            <div>
              <label className="mb-2 block text-sm text-zinc-400">
                Question
              </label>

              <input
                value={form.question}
                onChange={(e) =>
                  setForm({
                    ...form,
                    question: e.target.value,
                  })
                }
                placeholder="Enter FAQ question"
                className="w-full rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-3 text-white outline-none focus:border-amber-500"
              />
            </div>

            {/* Answer */}
            <div>
              <label className="mb-2 block text-sm text-zinc-400">
                Answer
              </label>

              <textarea
                rows={5}
                value={form.answer}
                onChange={(e) =>
                  setForm({
                    ...form,
                    answer: e.target.value,
                  })
                }
                placeholder="Enter FAQ answer"
                className="w-full rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-3 text-white outline-none focus:border-amber-500 resize-none"
              />
            </div>

            {/* Category + Display Order */}
            <div className="grid grid-cols-2 gap-4">

              <div>
                <label className="mb-2 block text-sm text-zinc-400">
                  Category
                </label>

                <select
                  value={form.category}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      category: e.target.value,
                    })
                  }
                  className="w-full rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-3 text-white"
                >
                  <option>General</option>
                  <option>Wedding</option>
                  <option>Engagement</option>
                  <option>Maternity</option>
                  <option>Birthday</option>
                  <option>Couple Shoot</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm text-zinc-400">
                  Display Order
                </label>

                <input
                  type="number"
                  value={form.displayOrder}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      displayOrder: Number(e.target.value),
                    })
                  }
                  className="w-full rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-3 text-white"
                />
              </div>

            </div>

            {/* Active */}
            <label className="flex items-center gap-3">

              <input
                type="checkbox"
                checked={form.isActive}
                onChange={(e) =>
                  setForm({
                    ...form,
                    isActive: e.target.checked,
                  })
                }
              />

              <span className="text-zinc-300">
                Show on Website
              </span>

            </label>

          </div>

          <div className="flex justify-end gap-3 border-t border-zinc-800 p-6">

            <button
              onClick={() => setShowModal(false)}
              className="rounded-xl bg-zinc-800 px-5 py-2.5 text-white"
            >
              Cancel
            </button>

            <button
              onClick={handleSave}
              className="rounded-xl bg-amber-500 px-6 py-2.5 font-semibold text-black hover:bg-amber-400"
            >
              {editingFaq ? "Update FAQ" : "Save FAQ"}
            </button>

          </div>

        </div>
      </div>
    )}

    </div>
  );
}