import Prototypes from "../components/Prototypes";
import Orders from "../components/Orders";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="container">
      <Header />
      <Prototypes />
      <Orders />
      <Footer />
    </div>
  );
}
