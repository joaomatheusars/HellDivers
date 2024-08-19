import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Image from "next/image";

interface ItemsProps {
  stratagem?: any;
  booster?: any;
}

const WidgetStratagem = ({ stratagem, booster }: ItemsProps) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="">
          {booster ? (
            <Image
              src={booster.boosterImage}
              width={40}
              height={40}
              alt={booster.name}
              className="h-max-[80px] w-max-[80px] rounded-sm  cursor-pointer"
            />
          ) : (
            <Image
              src={stratagem.urlImage}
              width={40}
              height={40}
              alt={stratagem.name}
              className="h-max-[80px] w-max-[80px] rounded-sm  cursor-pointer"
            />
          )}
        </div>
      </PopoverTrigger>
      <PopoverContent
        side={"top"}
        className=" bg-[#1C1C1C] w-full border-none flex flex-col justify-center items-center p-2"
      >
        <div className="bg-[#1C1C1C] text-white truncate">
          {booster ? (
            <div>
              <Image
                src={booster.boosterImage}
                width={150}
                height={150}
                alt={booster.name}
                className="rounded-sm cursor-pointer"
              />
              <div className="max-w-[150px]">
                <p className="truncate">{booster.name}</p>
              </div>
            </div>
          ) : (
            <div>
              <Image
                src={stratagem.urlImage}
                width={150}
                height={150}
                alt={stratagem.name}
                className="rounded-sm cursor-pointer"
              />
              <div className="max-w-[150px]">
                <p className="truncate">{stratagem.name}</p>
              </div>
            </div>
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default WidgetStratagem;
