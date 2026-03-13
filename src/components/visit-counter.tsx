"use client";

import { useEffect, useRef, useState } from "react";

type CounterState = {
  count: number | null;
  loading: boolean;
};

type VisitCounterProps = {
  mode?: "card" | "inline";
};

export function VisitCounter({ mode = "card" }: VisitCounterProps) {
  const hasTracked = useRef(false);
  const [state, setState] = useState<CounterState>({ count: null, loading: true });

  useEffect(() => {
    if (hasTracked.current) {
      return;
    }
    hasTracked.current = true;

    const controller = new AbortController();

    const load = async () => {
      try {
        const response = await fetch("/api/hits?action=increment", {
          method: "GET",
          cache: "no-store",
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error("Failed to track visit");
        }

        const payload = (await response.json()) as { count?: number };
        setState({ count: typeof payload.count === "number" ? payload.count : null, loading: false });
      } catch {
        setState({ count: null, loading: false });
      }
    };

    load();

    return () => {
      controller.abort();
    };
  }, []);

  const value = state.loading ? "..." : state.count?.toLocaleString() ?? "N/A";

  if (mode === "inline") {
    return <span>{value}</span>;
  }

  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-4 backdrop-blur">
      <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">Unique visitors</p>
      <p className="mt-2 text-3xl font-semibold text-zinc-50">{value}</p>
    </div>
  );
}
