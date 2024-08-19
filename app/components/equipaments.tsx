import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Image from "next/image";
import { useState } from "react";
import Hover from "./widgetEquipaments";

interface equipamentsProps {
  equipaments?: any;
}

const Equipaments = ({ equipaments }: equipamentsProps) => {
  return (
    <>
      <div className="flex gap-2" id="1">
        <Hover e={equipaments.primary}/>
        <Hover e={equipaments.secondary}/>
        <Hover e={equipaments.grenade}/>

        {/* <Popover>
          <PopoverTrigger asChild>
            <div className="">
              <Image
                src={equipaments.grenade.gunImage}
                width={40}
                height={40}
                alt={equipaments.grenade.name}
                className="h-max-[80px] w-max-[80px] rounded-sm  cursor-pointer"
              />
            </div>
          </PopoverTrigger>
          <PopoverContent
            side={"top"}
            className=" bg-[#1C1C1C] w-full border-none flex flex-col justify-center items-center p-2"
          >
            <div className="bg-[#1C1C1C] text-white truncate">
              <Image
                src={equipaments.grenade.gunImage}
                width={150}
                height={150}
                alt={equipaments.grenade.name}
                className="rounded-sm cursor-pointer"
              />
              <div className="max-w-[150px]">
                <p className="truncate">{equipaments.grenade.name}</p>
              </div>
            </div>
          </PopoverContent>
        </Popover>  */}
      </div>
    </>
  );
};

export default Equipaments;
