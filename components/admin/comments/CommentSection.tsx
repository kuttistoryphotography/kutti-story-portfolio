"use client";

import { useEffect, useState } from "react";

interface Comment {
  _id: string;
  name: string;
  email: string;
  comment: string;
  rating: number;
  approved: boolean;
  storyId: {
    title: string;
  };
}

export default function CommentSection() {
  const [comments, setComments] = useState<Comment[]>([]);

    const fetchComments = async () => {
    const res = await fetch("/api/admin/comments");
    const data = await res.json();
        setComments(data);
    };

  useEffect(() => {
    fetchComments();
  }, []);

  const approveComment = async (id: string) => {
  const res = await fetch(`/api/admin/comments/${id}`, {
    method: "PATCH",
  });

  if (res.ok) {
    fetchComments();
  } else {
    alert("Failed to approve comment.");
  }
};

    const deleteComment = async (id: string) => {
    const confirmed = confirm(
        "Are you sure you want to delete this comment?"
    );

    if (!confirmed) return;

    const res = await fetch(`/api/admin/comments/${id}`, {
        method: "DELETE",
    });


    if (res.ok) {
        fetchComments();
    } else {
        alert("Failed to delete comment.");
    }
    };


  return (
    <div>
      <h2 className="mb-8 text-3xl font-bold text-white">
        Comments
      </h2>

      <div className="space-y-5">
        {comments.map((item) => (
          <div
            key={item._id}
            className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-white">
                  {item.name}
                </h3>

                <p className="text-sm text-zinc-400">
                  {item.email || "No email"}
                </p>

                <p className="mt-1 text-xs uppercase tracking-widest text-amber-400">
                  Story: {item.storyId?.title}
                </p>
              </div>

              <span className="text-yellow-400">
                {"⭐".repeat(item.rating)}
              </span>
            </div>

            <p className="mt-5 text-zinc-300">
              {item.comment}
            </p>

            <div className="mt-6 flex items-center gap-3">
              <span
                className={`rounded-full px-3 py-1 text-xs font-medium ${
                  item.approved
                    ? "bg-green-600 text-white"
                    : "bg-yellow-600 text-black"
                }`}
              >
                {item.approved ? "Approved" : "Pending"}
              </span>

              <button
                onClick={() => approveComment(item._id)}
                disabled={item.approved}
                className={`rounded-lg px-4 py-2 text-white transition ${
                    item.approved
                    ? "cursor-not-allowed bg-zinc-600"
                    : "bg-green-600 hover:bg-green-700"
                }`}
                >
                {item.approved ? "Approved" : "Approve"}
              </button>

              <button
                onClick={() => deleteComment(item._id)}
                className="rounded-lg bg-red-600 px-4 py-2 text-white transition hover:bg-red-700"
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