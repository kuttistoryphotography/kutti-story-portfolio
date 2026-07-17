"use client";

import { useEffect, useState } from "react";

interface Comment {
  _id: string;
  name: string;
  comment: string;
  rating: number;
  createdAt: string;
}

interface Props {
  storyId: string;
}

export default function CommentSection({ storyId }: Props) {
  const [comments, setComments] = useState<Comment[]>([]);

  const [form, setForm] = useState({
    name: "",
    email: "",
    comment: "",
    rating: 5,
  });

  const fetchComments = async () => {
    const res = await fetch(`/api/comments?storyId=${storyId}`);
    const data = await res.json();
    setComments(data);
  };

  useEffect(() => {
    fetchComments();
  }, []);

  const submitComment = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        storyId,
        ...form,
      }),
    });

    if (res.ok) {
      alert("Thank you! Your comment will appear after approval.");

      setForm({
        name: "",
        email: "",
        comment: "",
        rating: 5,
      });
    }
  };

  return (
    <section className="mx-auto max-w-5xl px-6 py-24">

      <div className="mb-16 text-center">

        <span className="uppercase tracking-[8px] text-sm text-[#B79A5F]">
          Reviews
        </span>

        <h2 className="mt-3 text-5xl font-light text-[#3F5A4A]">
          Leave a Comment
        </h2>

      </div>

      {/* Existing Comments */}

      <div className="space-y-8">

        {comments.map((item) => (

          <div
            key={item._id}
            className="rounded-2xl border border-[#E8E2D8] p-6"
          >

            <div className="flex justify-between">

              <h4 className="font-semibold">
                {item.name}
              </h4>

              <span>
                {"⭐".repeat(item.rating)}
              </span>

            </div>

            <p className="mt-4 text-gray-600">
              {item.comment}
            </p>

          </div>

        ))}

      </div>

      {/* Form */}

      <form
        onSubmit={submitComment}
        className="mt-16 space-y-6"
      >

        <input
          className="w-full rounded-xl border p-4"
          placeholder="Your Name"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
          required
        />

        <input
          className="w-full rounded-xl border p-4"
          placeholder="Email (optional)"
          value={form.email}
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />

        <textarea
          className="w-full rounded-xl border p-4"
          rows={5}
          placeholder="Write your comment..."
          value={form.comment}
          onChange={(e) =>
            setForm({ ...form, comment: e.target.value })
          }
          required
        />

        <button
          className="rounded-full bg-[#849669] px-8 py-3 text-white transition hover:opacity-90"
        >
          Submit Comment
        </button>

      </form>

    </section>
  );
}