import { Description } from "@/customs/description";
import { Header } from "@/customs/header";
import { OfficialFeedbacks } from "@/customs/official-feedbacks";

export default function Home() {
  return (
    <div className="flex flex-col gap-5">
      <Header />
      <Description />
      <OfficialFeedbacks />
    </div>
  );
}
