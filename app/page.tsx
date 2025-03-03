import Layout from "./components/layout";
import Footer from "./components/footer";
import HeroSection from "./components/main";
export default function Home() {
  return (
    <Layout>
     <div>
      <HeroSection />
      <Footer />
      </div>      
    </Layout>
  );
}
