import sppu from "@/assets/sppu_logo.jpg";
import ssc from "@/assets/ssc_logo.png";
import { PinContainer } from "@/components/ui/3d-pin";
import { Homepage } from "@/constants/data";
import { DetailsCard } from "./DetailsCard";

export const Education = () => {
  const { SSC, HSC, BE } = Homepage.EDUCATION;

  return (
    <div className="flex items-center justify-center flex-wrap gap-10">
      <PinContainer href={SSC.href} title={SSC.linkText}>
        <DetailsCard
          image={ssc}
          title={SSC.title}
          board={SSC.BOARD}
          percentage={SSC.PERCENTAGE}
          passoutYear={SSC.PASSOUT_YEAR.toString()}
        />
      </PinContainer>
      <PinContainer href={HSC.href} title={HSC.linkText}>
        <DetailsCard
          image={ssc}
          title={HSC.title}
          board={HSC.BOARD}
          percentage={HSC.PERCENTAGE}
          passoutYear={HSC.PASSOUT_YEAR.toString()}
        />
      </PinContainer>
      <PinContainer href={BE.href} title={BE.linkText}>
        <DetailsCard
          image={sppu}
          title={BE.title}
          university={BE.UNIVERSITY}
          stream={BE.STREAM}
          cgpa={BE.CGPA.toString()}
          passoutYear={BE.PASSOUT_YEAR.toString()}
        />
      </PinContainer>
    </div>
  );
};
