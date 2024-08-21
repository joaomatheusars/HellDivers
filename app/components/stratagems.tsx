import { useState } from "react";
import Equipaments from "./equipaments";
import WidgetStratagem from "./widgetStratagem";

interface stratagemsProps {
  stratagems: any;
  booster?: any;
  equipaments?: any;
}

const Stratagems = ({ stratagems, booster, equipaments }: stratagemsProps) => {
  const [showButton, setShowButton] = useState(true);

  const toggleButton = () => {
    setShowButton(!showButton);
  };

  return (
    <>
      {equipaments ? (
        <>
          <button
            onClick={toggleButton}
            className="bg-[#FFEE00] text-black w-full"
          >
            {showButton ? <span className="uppercase">Equipaments</span> : <span className="uppercase">Stratagems</span>}
          </button>
          {showButton ? (
            <div className="flex gap-2">
              {stratagems.map((s: any) => (
                <WidgetStratagem stratagem={s} />
              ))}
              {booster && (
                <div className="ml-2 flex justify-center items-center">
                  <WidgetStratagem booster={booster} />
                </div>
              )}
            </div>
          ) : (
            <Equipaments equipaments={equipaments} />
          )}
        </>
      ) : (
        <div className="flex gap-2">
          {stratagems.map((s: any) => (
            <WidgetStratagem stratagem={s} />
          ))}
          {booster && (
            <div className="ml-2 flex justify-center items-center">
              <WidgetStratagem booster={booster} />
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Stratagems;
