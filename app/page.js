import Banner from "./components/banner/page";
import Footer from "./components/footer/page";
import Header from "./components/header/page";
import HomeProducts from "./components/homeProducts/page";

export default function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <HomeProducts />
      <Footer />
    </div>
  );
}
