import RegionalStrength from "../RegionalStrength/RegionalStrength";
import PublicationTrend from "../PublicationTrend/PublicationTrend";
import ResearchFields from "../ResearchFields/ResearchFields";
import Filters from "../Filters/Filters";

import TopUniversitiesByImpact from "../TopUniversity/TopUniversity";
import IranCollaborationMap from "../CollaborationHotspots/CollaborationHotspots";



function Charts() {
  return (
    <div className="mx-auto px-4 py-6 bg-[#050B1A]">

  {/* Row 1 → سه ستون */}
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/3 px-3 mb-6">
      <RegionalStrength />
    </div>

    <div className="w-full md:w-1/3 px-3 mb-6">
      <PublicationTrend />
    </div>

    <div className="w-full md:w-1/3 px-3 mb-6">
      <ResearchFields />
    </div>
  </div>

  {/* Row 2 → دو ستون */}
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6">
      <TopUniversitiesByImpact />
    </div>

    <div className="w-full md:w-1/2 px-3 mb-6">
      <IranCollaborationMap />
    </div>
  </div>

  {/* Row 3 → تک ستون */}
  <div className="flex flex-wrap -mx-3">
    <div className="w-full px-3">
      <Filters />
    </div>
  </div>

</div>

  );
}

export default Charts;
