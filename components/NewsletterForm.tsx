"use client";

import { useState } from "react";
import { Alert, Button, Input } from "@/components/ui-components";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus("success");
        setMessage("Thanks for subscribing! 🎉");
        setEmail("");
      } else {
        const data = await res.json();
        throw new Error(data.error || "Failed to subscribe");
      }
    } catch (err) {
      setStatus("error");
      setMessage((err as Error).message);
    }
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-sm">
      <h3 className="text-xl font-bold mb-4">
        Subscribe to the Newsletter
      </h3>
      <p className="text-gray-600 mb-6">
        Get the latest posts delivered right to your inbox.
      </p>

      {(status === "success" || status === "error") && (
        <Alert color={status === "success" ? "green" : "red"} className="mb-4">
          {message}
        </Alert>
      )}

      <form onSubmit={handleSubmit} className="flex gap-2">
        <Input
          type="email"
          label="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-1"
          disabled={status === "loading"}
        />
        <Button
          type="submit"
          disabled={status === "loading"}
          variant={status === "loading" ? "outlined" : "filled"}
        >
          {status === "loading" ? "Subscribing..." : "Subscribe"}
        </Button>
      </form>
    </div>
  );
}
