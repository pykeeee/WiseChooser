const RegionIcon = ({ region }) => {
  return (
    <div>
      <img
        widhth={35}
        height={35}
        src={`https://cdn5.lolalytics.com/region35/${region}.webp`}
        srcSet={`https://cdn5.lolalytics.com/region35/${region}.webp 35w,
                 https://cdn5.lolalytics.com/region70/${region}.webp 70w`}
        alt={region}
      />
    </div>
  );
};

export default RegionIcon;
