import Best from "./component/best";
import Feature from "./component/feature"
import { Header } from "./component/header";
import Hero from "./component/hero";
import Our from "./component/our";
import Razi from "./component/razi";

export default function Home() {
  return (
    <div>
    <Hero />
    <Header />
    <Feature />
    <Best />
    <Razi />
    <Our />
   
    

    </div>
  );
}
