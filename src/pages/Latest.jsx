import React from "react";

const Latest = () => {
  return (
    <div className="flex flex-col items-center justify-start h-screen bg-gray-100 w-full">
      {/* Header */}
      <div className="w-full bg-gray-300 py-4 px-6 flex items-center justify-between">
        <div className="flex-grow mx-4 text-center text-xl font-bold">
          Latest News
        </div>
      </div>

      {/* Content */}
      <div className="flex-grow w-full p-6">
        <div className="bg-gray-200 h-full w-full rounded-lg shadow-md">
          <div>
            <h2 className="text-center font-bold text-3xl  ">Latest Agricultural Updates</h2>
            <ul className="mt-3 gap-2">
              <li>
                <strong>Resumption of Cattle and Bison Imports:</strong> The
                USDA has resumed cattle and bison imports from Mexico under a
                new protocol designed to prevent the spread of New World
                Screwworm. This move is expected to stabilize livestock markets
                while ensuring animal safety.
              </li>
              <li>
                <strong>Disaster Food Assistance in California:</strong> The
                USDA approved Disaster Supplemental Nutrition Assistance
                (D-SNAP) for California residents affected by recent wildfires
                and straight-line winds, providing essential food security in
                times of crisis.
              </li>
              <li>
                <strong>
                  Increase in Foreign Agricultural Investments in Australia:
                </strong>{" "}
                Foreign investors, especially from the U.S., are expected to
                increase purchases of Australian agricultural properties due to
                rising global commodity prices, making Australia an attractive
                investment destination.
              </li>
              <li>
                <strong>Decline in U.S. Farm Income:</strong> American farmers
                face financial challenges with a 4% drop in farm income in 2024
                due to rising costs of seeds, fertilizers, and machinery. A
                federal bailout package is expected to provide temporary relief.
              </li>
              <li>
                <strong>Climate Change Threatens Scottish Agriculture:</strong>{" "}
                Rising temperatures and erratic weather patterns are making
                water-intensive crops like potatoes less viable in certain
                regions of Scotland. Farmers are urged to adopt sustainable
                practices to adapt to changing conditions.
              </li>
              <li>
                <strong>New Bird Flu Strain in Dairy Cows:</strong> A new H5N1
                bird flu strain has been detected in Nevada dairy cows, marking
                the first instance of this genotype in cattle. This has raised
                concerns about disease control measures in mixed farming
                systems.
              </li>
              <li>
                <strong>Spring Wheat Acreage at Risk:</strong> Market volatility
                and declining profitability may lead to historic lows in spring
                wheat planting across the U.S., impacting both domestic supply
                and exports.
              </li>
              <li>
                <strong>Aflatoxin Biocontrol in Pistachios:</strong> Innovative
                biocontrol products are being used to reduce aflatoxin levels in
                pistachios, ensuring crop safety and enhancing market
                competitiveness in both domestic and international markets.
              </li>
              <li>
                <strong>Expansion of Methane-Reducing Cattle Feed:</strong> CH4
                Global, in partnership with Mitsubishi, is expanding its
                production of methane-reducing cattle feed, a crucial step
                towards lowering greenhouse gas emissions in livestock farming.
              </li>
              <li>
                <strong>Tariff-Induced Market Volatility:</strong> Uncertainty
                surrounding potential tariffs on agricultural goods has caused
                market fluctuations, affecting crop pricing and farmer
                decision-making for the upcoming planting season.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Latest;
