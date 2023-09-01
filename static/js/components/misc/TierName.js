import Trans from "../misc/Trans";

const tierNames = {
  all: ["All Ranks", "allranks", false],
  "1trick": ["1Trick", "1trick", false],
  challenger: ["Challenger", "challenger", false],
  grandmaster: ["Grandmaster", "grandmaster", false],
  master: ["Master", "master", false],
  master_plus: ["Master", "master", true],
  diamond: ["Diamond", "diamond", false],
  d2_plus: ["D2", "d2", true],
  diamond_plus: ["Diamond", "diamond", true],
  emerald: ["Emerald", "emerald", false],
  emerald_plus: ["Emerald", "emerald", true],
  platinum: ["Platinum", "platinum", false],
  platinum_plus: ["Platinum", "platinum", true],
  gold: ["Gold", "gold", false],
  gold_plus: ["Gold", "gold", true],
  silver: ["Silver", "silver", false],
  bronze: ["Bronze", "bronze", false],
  iron: ["Iron", "iron", false],
  unranked: ["Unranked", "unranked", false],
};

export const TierName = ({ tier }) => {
  if (!tier) return <></>;
  return (
    <>
      <Trans
        trans={"tiers::" + tierNames[tier][1]}
        english={tierNames[tier][0]}
        maxChars={11}
      />
      {tierNames[tier][2] ? "+" : ""}
    </>
  );
};

export default TierName;
