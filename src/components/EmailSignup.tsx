"use client";

import { useState } from "react";

export function EmailSignup({
  source,
  buttonText = "Join",
  placeholder = "Enter your email",
  successMessage = "You're in! Watch your inbox.",
  footnote = "No spam, ever.",
}: {
  source: string;
  buttonText?: string;
  placeholder?: string;
  successMessage?: string;
  footnote?: string;
}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source }),
      });
      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setMessage(data.message || successMessage);
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  };

  if (status === "success") {
    return (
      <div className="text-center">
        <p className="text-primary font-semibold">{message}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={placeholder}
          required
          className="flex-1 px-4 py-3 bg-card border border-border rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-crimson-500 transition-colors disabled:opacity-50"
        >
          {status === "loading" ? "..." : buttonText}
        </button>
      </div>
      {status === "error" && (
        <p className="text-xs text-red-400 mt-2 text-center">{message}</p>
      )}
      <p className="text-xs text-muted-foreground mt-3 text-center">{footnote}</p>
    </form>
  );
}
