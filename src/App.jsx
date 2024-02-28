import Carousel from "./Components/Carousel";
import Header from "./Components/Header";

export default function App() {
  return (
    <div className="bg-orange-700 w-[100dwh] h-[100dvh] flex flex-col items-center">
      <Header />

      <Carousel autoSlide={false} />
    </div>
  );
}
