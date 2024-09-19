import { Description } from "@/customs/description";
import { Header } from "@/customs/header";

export default function Home() {
  return (
    <div className="flex flex-col gap-5">
      <Header />
      <Description />
    </div>
  );
}
