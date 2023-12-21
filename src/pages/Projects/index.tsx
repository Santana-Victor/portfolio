import Header from "../../components/Header";
import Main from "../../components/Main";
import SectionProjects from "../../components/SectionProjects";
import ButtonBackToTop from "../../components/ButtonBackToTop";
import Footer from "../../components/Footer";

export default function Projects() {
  return (
    <>
      <Header />
      <Main>
        <SectionProjects />
      </Main>
      <ButtonBackToTop />
      <Footer />
    </>
  );
}
