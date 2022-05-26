import "./App.css";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import OurWorkingZones from "./components/OurWorkingZone";
import InfoKocaerLaw from "./components/InfoKocaerLaw";
import HeaderImage from "./components/HeaderImage";
import CardF from "./components/CardF";
import Footer from "./components/Footer";
import InfoKocaerLaw2 from "./components/InfoKocaerLaw2";
import ContactUs from "./components/ContactUs";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import PageHeader from "./components/PageHeader";
import Team from "./components/Team";
import PageWorkingZones from "./components/PageWorkingZones";
import AboutUsImg from "../src/images/about-us-1.jpg";
import TeamImg from "../src/images/team.jpg";
import WorkingZonesImg from "../src/images/workingman.jpeg";
import ContactImage from "../src/images/iletisim.jpg";
import ContactPage from "./components/ContactPage";
import BlogImg from "../src/images/blog.webp";
import BlogPage from "./components/BlogPage";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <ScrollToTop>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Home />
                  <InfoKocaerLaw
                    back="white"
                    text="Kocaer Hukuk Bürosu, yerli ve yabancı müvekkillere ulusal ve uluslararası alanda kapsamlı ve nitelikli hukuki danışmanlık ve avukatlık hizmeti sunmaktadır.
                Ofisimiz, kurumsal alanda edindiği tecrübelerle sonuç odaklı bir yaklaşım ile güncel, hızlı ve etkili çözümler sunmakta, dinamik ekibiyle hukukun her alanında en iyi hizmeti sunmaktadır."
                  />
                  <InfoKocaerLaw2 />
                  <OurWorkingZones />
                  <CardF />
                  <HeaderImage />
                  <Slider />
                  <ContactUs />
                  <Footer />
                </>
              }
            />
            <Route
              path="aboutus"
              element={
                <>
                  <PageHeader
                    img={AboutUsImg}
                    title="Hakkımızda"
                    path="Anasayfa > Hakkımızda"
                  />
                  <InfoKocaerLaw
                    back="white"
                    text="Kocaer Hukuk Bürosu, yerli ve yabancı müvekkillere ulusal ve uluslararası alanda kapsamlı ve nitelikli hukuki danışmanlık ve avukatlık hizmeti sunmaktadır.
                Ofisimiz, kurumsal alanda edindiği tecrübelerle sonuç odaklı bir yaklaşım ile güncel, hızlı ve etkili çözümler sunmakta, dinamik ekibiyle hukukun her alanında en iyi hizmeti sunmaktadır."
                  />
                  <InfoKocaerLaw2 />
                  <Footer />
                </>
              }
            />
            <Route
              path="team"
              element={
                <>
                  <PageHeader
                    img={TeamImg}
                    title="Ekibimiz"
                    path="Anasayfa > Ekibimiz"
                  />
                  <Team />
                  <Footer />
                </>
              }
            />
            <Route
              path="workingzones"
              element={
                <>
                  <PageHeader
                    img={WorkingZonesImg}
                    title="Çalışma Alanlarımız"
                    path="Anasayfa > Çalışma Alanlarımız"
                  />
                  <PageWorkingZones />
                  <Footer />
                </>
              }
            />
            <Route
              path="contact"
              element={
                <>
                  <PageHeader
                    img={ContactImage}
                    title="İletişim"
                    path="Anasayfa > Çalışma İletişim"
                  />
                  <ContactPage />
                  <Footer />
                </>
              }
            />
            <Route
              path="blog"
              element={
                <>
                  <PageHeader
                    img={BlogImg}
                    title="Blog"
                    path="Anasayfa > Blog"
                  />
                  <BlogPage />
                  <Footer />
                </>
              }
            />
          </Routes>
        </ScrollToTop>
      </div>
    </BrowserRouter>
  );
}

export default App;
