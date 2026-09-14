import { useEffect, useRef, type ReactNode } from "react";
export function Section({
  id,
  title,
  subtitle,
  children,
  className = "",
  number,
}: {
  id: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  number?: string;
  light?: boolean;
}) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    if (!ref.current || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.06 },
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return (
    <section
      ref={ref}
      id={id}
      className={`section ${className}`}
      aria-labelledby={`${id}-title`}
    >
      <div className="container">
        {title && (
          <div className="section-heading">
            <div>
              <p className="eyebrow">
                {number && <span>{number} / </span>}
                {id === "work" ? "Selected work" : id}
              </p>
              <h2 id={`${id}-title`}>{title}</h2>
            </div>
            {subtitle && <p>{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
