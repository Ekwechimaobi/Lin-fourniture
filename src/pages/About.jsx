import Footer from "../components/Footer";
import Header from "../components/Header";

function About() {
  return (
    <div>
      <Header />

      <div className="bg-slate-50 py-20 px-4 sm:px-6 lg:px-8">
        <section id="about" className="mx-auto max-w-5xl">
          <div className="rounded-[28px] border border-sky-200/40 bg-white/95 p-8 shadow-[0_24px_70px_rgba(15,23,42,0.08)] sm:p-12">
            <h2 className="mb-6 text-3xl font-semibold uppercase tracking-[0.28em] text-slate-900 sm:text-4xl">
              ABOUT ME
            </h2>
            <p className="mb-8 max-w-3xl text-base leading-8 text-slate-700 sm:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              quaerat maxime sed perspiciatis impedit. Unde aliquid voluptatem
              atque vero. Expedita ducimus dignissimos quas vitae recusandae
              numquam minus reiciendis quia molestias. Deserunt eveniet,
              voluptatibus possimus ea ab aliquid, vel reprehenderit laboriosam
              aperiam laborum architecto dignissimos velit quam commodi libero
              alias labore iusto magni illo, sint est ratione minima. Id, nisi?
              Nihil. Consequuntur praesentium, fugit tempore ipsa nemo
              aspernatur maiores esse deleniti reprehenderit qui corrupti
              voluptatibus ea, quis fuga iusto officia minima ducimus quia
              blanditiis magnam pariatur optio? Tempora tenetur sapiente
              explicabo? Nulla in velit a metus rhoncus tempus. Nulla congue
              nulla vel sem varius finibus. Sed ornare sit amet lorem sed
              viverra. In vel urna quis libero viverra facilisis ut ac est. Nam
              et commodo ex, et dignissim ipsum.
            </p>
            <a
              className="inline-flex items-center justify-center rounded-full bg-[#B88E2F] px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-600/20 transition duration-200 hover:bg-[#9d7725] hover:-translate-y-0.5"
              href="#"
            >
              Read More
            </a>
          </div>                 
        </section>
      </div>

      <Footer />
    </div>
  );
}

export default About;



