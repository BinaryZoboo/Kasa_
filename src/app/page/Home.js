import Card from "../component/Card";
import Footer from "../component/Footer";
import Header from "../component/Header";
import data from "../data/logement.json";

const Home = () => {
  return (
    <>
      <Header />
      <main className="home-main">
        <div className="banner">
          <img src="/assets/fondacc.png" alt="des falaises avec des vagues" />
          <p>Chez vous, partout et ailleurs</p>
        </div>
        <section className="sectionhome">
          <Card logement={data} />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
