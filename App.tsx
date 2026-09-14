import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Education } from "./components/Education";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ThankYou } from "./components/ThankYou";
import "./styles.css";
function HomePage() {
  return (
    <>
      <Layout>
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <About />
        <Education />
        <Contact />
      </Layout>
      <Footer />
    </>
  );
}
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route
          path="*"
          element={
            <Layout>
              <section className="thank-you container">
                <h1>Page not found.</h1>
                <a className="button primary" href="/">
                  Back to home
                </a>
              </section>
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
