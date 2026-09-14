import { GraduationCap, BookOpen } from "lucide-react";
export function Education() {
  return (
    <section className="education container" aria-labelledby="education-title">
      <h2 id="education-title">Education & certificate</h2>
      <div className="education-grid">
        <article>
          <GraduationCap size={22} />
          <div>
            <span className="eyebrow">December 2019</span>
            <h3>B.Sc. in Computer Science & Engineering</h3>
            <p>United International University, Dhaka</p>
            <p className="small">Multiple merit-based scholarships</p>
          </div>
        </article>
        <article>
          <BookOpen size={22} />
          <div>
            <span className="eyebrow">
              2020 · Four-month professional certificate
            </span>
            <h3>Python and Django for Web and API Development</h3>
            <p>CDIP</p>
          </div>
        </article>
      </div>
    </section>
  );
}
