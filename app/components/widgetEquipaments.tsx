import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import Image from "next/image";

interface ItemsProps {
    e: any
}
const widgetEquipaments = ({e}: ItemsProps) => {
    return (
        <Popover >
          <PopoverTrigger
            asChild
          >
            <div className="">
            {e.classes == "grenade" ? (
                <Image
                src={e.gunImage}
                width={42}
                height={40}
                alt={e.name}
                className="rounded-sm cursor-pointer"
              />
            ) : (
                <Image
                src={e.gunImage}
                width={80}
                height={80}
                alt={e.name}
                className="h-max-[40px] w-max-[40px] rounded-sm  cursor-pointer"
              />
            )}
              
            </div>
          </PopoverTrigger>
          <PopoverContent
            side={"top"}
            className=" bg-[#1C1C1C] w-full border-none flex flex-col justify-center items-center p-2"
          >
            <div className="bg-[#1C1C1C] text-white truncate">
              <Image
                src={e.gunImage}
                width={150}
                height={150}
                alt={e.name}
                className="rounded-sm cursor-pointer"
              />
              <div className="max-w-[150px]">
                <p className="truncate">{e.name}</p>
              </div>
            </div>
          </PopoverContent>
        </Popover>
    );
}
 
export default widgetEquipaments;