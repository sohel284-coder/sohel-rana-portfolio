import type { MouseEvent } from "react";
import bundledLatest from "../public/cv/latest.json";

// The build-time manifest is also the fallback if the live manifest is unavailable.
export async function downloadCV(event: MouseEvent<HTMLAnchorElement>) {
  event.preventDefault();
  let { url, filename } = bundledLatest;
  try {
    const response = await fetch(`/cv/latest.json?t=${Date.now()}`, {
      cache: "no-store",
    });
    if (!response.ok) throw new Error("CV manifest unavailable");
    const latest = await response.json();
    if (
      typeof latest.filename === "string" &&
      /^Sohel_Rana_CV_[\w-]+\.pdf$/.test(latest.filename) &&
      latest.url === `/cv/${latest.filename}`
    ) {
      url = latest.url;
      filename = latest.filename;
    }
  } catch {
    // Download the latest version included in this deployment.
  }
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
}
