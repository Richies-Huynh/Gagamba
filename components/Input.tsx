import React from "react";

export default function Input(props: React.ComponentProps<"input">) {
  return (
    <input
      {...props}
      className="w-full bg-zinc-800 text-white placeholder-zinc-500 border border-zinc-700 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500 transition"
    />
  );
}