import Header from "../../components/Header";
import Main from "../../components/Main";
import MyIntroduction from "../../components/MyIntroduction";
import SectionAboutMe from "../../components/SectionAboutMe";
import SectionSkills from "../../components/SectionSkills";
import ButtonBackToTop from "../../components/ButtonBackToTop";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Main>
        <MyIntroduction />
        <SectionAboutMe />
        <SectionSkills />
      </Main>
      <ButtonBackToTop />
      <Footer />
    </>
  );
}
