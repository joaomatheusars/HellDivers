import { useState } from "react";
import Stratagems from "./stratagems";
import { ScrollArea } from "@radix-ui/react-scroll-area";

interface HelldiverProps {
  helldivers?: any;
}

const Helldivers = ({ helldivers }: HelldiverProps) => {
  const [showButton, setShowButton] = useState(true);

  const toggleButton = (index: any) => {
    // let d = document.getElementById(index)
    // if (d?.style.display == "flex"){d.style.display = 'none'}
    // console.log(index, d)
    setShowButton(!showButton);
  };

  const skullColor = (number: number) => {
    if (number === 1) {
      return "text-[#B26529]";
    }
    if (number === 2) {
      return "text-[#636B99]";
    }
    if (number === 3) {
      return "text-[#AA499B]";
    }
    if (number === 4) {
      return "text-[#708B3A]";
    }
  };

  return (
    <div className="flex justify-center items-center gap-5 [&::-webkit-scrollbar]:hidden">
      
        {helldivers.map((e: any) => (
          <div className="bg-[#1C1C1C] bg-opacity-60 rounded-lg flex flex-col items-center gap-4 p-5 border-2 border-[#FFEE00] min-w-[290px] " id={e.helldiver} key={e.helldiver}>
            <h3 className="text-3xl text-white">H-{e.helldiver}</h3>
            <svg
              className={`fill-current h-32 w-32 ${skullColor(e.helldiver)}`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 538.219 557.519"
            >
              <g>
                <path
                  d="m1200 146.42 804.125 267.777a21.858 21.858 0 0 1 14.902 22.211l-53.087 785.334a21.858 21.858 0 0 0 6.224 16.8l238.67 242.687c7.885 8.018 8.4 20.711 1.189 29.341l-321.035 384.204a21.859 21.859 0 0 1-25.025 6.224l-189.06-77.093a21.862 21.862 0 0 0-17.692.525 21.861 21.861 0 0 0-11.502 13.453l-88.554 296.164a21.854 21.854 0 0 1-14.52 14.631l-338.215 103.937a21.849 21.849 0 0 1-12.84 0l-338.215-103.937a21.854 21.854 0 0 1-14.52-14.631l-88.554-296.164a21.861 21.861 0 0 0-11.502-13.453 21.862 21.862 0 0 0-17.692-.525l-189.06 77.093a21.859 21.859 0 0 1-25.025-6.224L187.977 1510.57c-7.211-8.63-6.696-21.323 1.189-29.341l238.67-242.687a21.858 21.858 0 0 0 6.224-16.8l-53.087-785.334a21.858 21.858 0 0 1 14.902-22.211zm-9.298 1454.33-120.696 176.333c-4.878 7.126-3.378 16.817 3.427 22.134l44.471 34.755c6.727 5.258 16.366 4.459 22.136-1.835l54.324-59.252a7.647 7.647 0 0 1 11.275 0l54.323 59.252c5.77 6.294 15.409 7.093 22.137 1.835l44.471-34.755c6.804-5.317 8.305-15.008 3.427-22.134L1209.3 1600.75a11.268 11.268 0 0 0-18.598 0zm454.171-441.815c-117.179 0-212.313 95.135-212.313 212.314 0 117.178 95.134 212.313 212.313 212.313 117.179 0 212.313-95.135 212.313-212.313 0-117.179-95.134-212.314-212.313-212.314zm-889.744 0c-117.178 0-212.313 95.135-212.313 212.314 0 117.178 95.135 212.313 212.313 212.313 117.179 0 212.314-95.135 212.314-212.313 0-117.179-95.135-212.314-212.314-212.314z"
                  transform="matrix(.26458 0 0 .26458 -48.39 -38.74)"
                />
              </g>
            </svg>

            <Stratagems
              stratagems={e.stratagems}
              booster={e.booster}
              equipaments={e.equipaments}
            />
          </div>
        ))}
    </div>
  );
};

export default Helldivers;
