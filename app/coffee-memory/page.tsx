import React from "react";
import Banner from "./Banner";
import ProjectBrief from "./ProjectBrief";
import CompetitorAnalysis from "./CompetitorAnalysis";
import UserFlow from "./UserFlow";
import WireFrame from "./WireFrame";
import ArtDirection from "./ArtDirection";
import UIDesignsAndHowItWorks from "./UIDesignsAndHowItWorks";
import Outcomes from "./Outcomes";

const page = () => {
  return (
    <>
      <Banner marginBottom={120} />
      <main className="container mx-auto px-[50px]">
        <ProjectBrief marginBottom={160} />
        <CompetitorAnalysis marginBottom={160} />
        <UserFlow marginBottom={160} />
        <WireFrame marginBottom={160} />
        <ArtDirection marginBottom={160} />
        <UIDesignsAndHowItWorks marginBottom={160} />
        <Outcomes marginBottom={160} />
      </main>
    </>
  );
};

export default page;
