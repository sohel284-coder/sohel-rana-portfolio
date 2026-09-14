import type { ReactNode } from "react";
import { Download } from "lucide-react";
import latest from "../public/cv/latest.json";
import { downloadCV } from "../utils/downloadCV";
export function CVLink({
  children = "Download CV",
  className = "button secondary",
  onDownload,
}: {
  children?: ReactNode;
  className?: string;
  onDownload?: () => void;
}) {
  return (
    <a
      className={className}
      href={latest.url}
      download={latest.filename}
      onClick={(event) => {
        onDownload?.();
        void downloadCV(event);
      }}
    >
      {children}
      <Download size={16} aria-hidden="true" />
    </a>
  );
}
