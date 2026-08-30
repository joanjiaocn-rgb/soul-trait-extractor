"use client";

import { useState } from "react";
import { Link as LinkIcon, Share2 } from "lucide-react";
import type { SoulColorProfile } from "@/lib/soul-colors";

export function ResultShare({ profile }: { profile: SoulColorProfile }) {
  const [status, setStatus] = useState("");

  async function copyLink() {
    await navigator.clipboard.writeText(window.location.href);
    setStatus("Link copied");
  }

  async function share() {
    const text = `${profile.colorName} soul color represents ${profile.name.toLowerCase()}. Is this your color too?`;
    if (navigator.share) {
      await navigator.share({ title: `${profile.colorName} Soul Color Meaning`, text, url: window.location.href });
      setStatus("Shared");
      return;
    }
    await navigator.clipboard.writeText(`${text} ${window.location.href}`);
    setStatus("Share text copied");
  }

  return (
    <div className="result-page-share">
      <button className="button secondary" type="button" onClick={share}><Share2 size={16} aria-hidden="true" />Share this color</button>
      <button className="icon-button" type="button" onClick={copyLink} aria-label="Copy color page link" title="Copy color page link"><LinkIcon size={17} aria-hidden="true" /></button>
      <span aria-live="polite">{status}</span>
    </div>
  );
}
