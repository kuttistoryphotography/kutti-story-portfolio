"use client";

import { useEffect, useState } from "react";

interface Comment {
  _id: string;
  name: string;
  email: string;
  comment: string;
  rating: number;
  approved: boolean;
  createdAt: string;
  storyId: {
    _id: string;
    title: string;
  };
}

export default function AdminCommentsPage() {
  const [comments, setComments] = useState<Comment[]>([]);

  const fetchComments = async () => {
    const res = await fetch("/api/admin/comments");
    const data = await res.json();
    setComments(data);
  };

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <div className="p-8">
      <h1 className="mb-8 text-3xl font-bold">
        Comments
      </h1>

      <div className="space-y-6">
        {comments.map((item) => (
          <div
            key={item._id}
            className="rounded-xl border p-6"
          >
            <div className="flex justify-between">
              <div>
                <h3 className="font-semibold">{item.name}</h3>

                <p className="text-sm text-gray-500">
                    {item.email}
                </p>

                <p className="mt-1 text-xs uppercase tracking-wide text-[#B79A5F]">
                    Story: {item.storyId?.title}
                </p>
               </div>

              <span>{"⭐".repeat(item.rating)}</span>
            </div>

            <p className="mt-4">{item.comment}</p>

            <div className="mt-6 flex gap-4">
              <button
                className="rounded bg-green-600 px-4 py-2 text-white"
              >
                Approve
              </button>

              <button
                className="rounded bg-red-600 px-4 py-2 text-white"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}