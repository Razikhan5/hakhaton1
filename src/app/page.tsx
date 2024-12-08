import Best from "./component/best";
import Feature from "./component/feature"
import Footer from "./component/fotter";
import { Header } from "./component/header";
import Hero from "./component/hero";
import Nav from "./component/nav";
import Our from "./component/our";
import Razi from "./component/razi";
import Section from "./component/razi";

export default function Home() {
  return (
    <div>
    <Nav />
    <Hero />
    <Header />
    <Feature />
    <Best />
    <Razi />
    <Our />
    <Footer />

    </div>
  );
}
