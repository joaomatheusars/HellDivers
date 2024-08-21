const Info = () => {
  return (
    <div className="border-[#FFEE00] border-2 rounded-sm bg-[#1C1C1C] bg-opacity-80  flex flex-col p-5 container mx-auto cursor-default">
      <div className="flex justify-center items-center gap-2">
        <h3 className="text-4xl text-nowrap text-[#FFEE00]">How to Use</h3>
        <div className="border-[#FFEE00] border-2 max-h-1 w-full items-center "></div>
      </div>
      <div className="text-white px-10 text-2xl up">
        <ul className="list-disc">
          <li>Select how many Helldivers you want to draw.</li>
          <li>
            Select if you want repeat stratagems so that other Helldivers have a
            chance to receive repeated stratagems.
          </li>
          <li>Check 'Random Equipment' to draw random equipment.</li>
          <li>Check 'Random Booster' to draw random boosters.</li>
        </ul>
      </div>
    </div>
  );
};

export default Info;
