import { Navbar } from "@/nav";
import  HeroSection  from "@/hero";
import Contents  from "@/features-list";
import StudioUseCases  from "@/use-case";
import Footer from "@/footer";
import BottomNav from "@/bottom-nav";

export default function BackgroundRemoverPage() {
  return (
    <div className="min-h-screen max-w-full h-full bg-white text-white">
      <Navbar />
      <HeroSection />
      <Contents />
      <StudioUseCases />
      <Footer />
      <BottomNav />
    </div>
  );
}
