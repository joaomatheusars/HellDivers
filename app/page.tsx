"use client";
import Image from "next/image";

import Helldivers from "./components/helldivers";
import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRadomHelldivers } from "./api/getRadomHelldivers";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Info from "./components/info";
import BuyMeaCoffe from "./components/buymeacoffee";

const createFormSchema = z.object({
  helldiver: z.string(),
  stratagem: z.boolean(),
  equipaments: z.boolean(),
  booster: z.boolean(),
});

type CreateFormSchema = z.infer<typeof createFormSchema>;

export default function Home() {
  const [dataHelldivers, setData] = useState("");
  const helldiverService = useRadomHelldivers();

  const { register, handleSubmit } = useForm<CreateFormSchema>({
    resolver: zodResolver(createFormSchema),
  });

  const handleFormSubmit = async (data: CreateFormSchema) => {
    const resHelldivers = helldiverService?.getHelldivers(
      data.helldiver,
      data.stratagem,
      data.equipaments,
      data.booster
    );

    const value = await resHelldivers;
    setData(value.helldivers);
  };
  return (
    <div className="">
      <div className="bg-[url('/Helldivers-2.jpg')] h-screen bg-repeat bg-cover flex ">
        <div className="flex flex-col justify-between bg-[#1C1C1C] bg-opacity-40  text-[#FFEE00] p-8 border-r-2 border-[#FFEE00]">
          <div>
            <h1 className="text-5xl w-full text-center drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
              RADOM <br />
              HELLDIVERS
            </h1>
            <div className="mt-8">
              <div className="flex justify-center items-center gap-2">
                <h3 className="text-3xl">Options</h3>
                <div className="border-[#FFEE00] border-2 max-h-1 w-full items-center "></div>
              </div>

              <div>
                <form
                  onSubmit={handleSubmit(handleFormSubmit)}
                  method="POST"
                  action=""
                >
                  <div className="mt-4 flex flex-col gap-2">
                    <div className="flex items-center">
                      <span className="text-2xl text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                        Helldivers:
                      </span>
                      <select
                        id=""
                        className="text-black rounded-sm ml-4 w-28 text-center"
                        {...register("helldiver")}
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                      </select>
                    </div>
                    <div>
                      <span className="text-2xl text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                        Repeat Stratagem:
                      </span>
                      <input
                        type="checkbox"
                        className="cursor-pointer ml-4"
                        {...register("stratagem")}
                      />
                    </div>
                    <div>
                      <span className="text-2xl text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                        Radom Equipament:
                      </span>
                      <input
                        type="checkbox"
                        className="cursor-pointer ml-4"
                        {...register("equipaments")}
                      />
                    </div>
                    <div>
                      <span className="text-2xl text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                        Radom Booster:
                      </span>
                      <input
                        type="checkbox"
                        className="cursor-pointer ml-4"
                        {...register("booster")}
                      />
                    </div>
                    <button
                      type="submit"
                      className="text-black bg-[#FFEE00] hover:bg-[#ffee00af] text-2xl w-full"
                    >
                      Radom
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <BuyMeaCoffe />
        </div>

        <div className="mx-5 overflow-auto h-full w-full flex flex-col">
          <div className="mt-8 flex flex-col gap-8">
            <div className="flex justify-center ">
              <Image src={"/logo.png"} width={600} height={600} alt="logo" />
            </div>

            {dataHelldivers ? (
              <ScrollArea className="w-full whitespace-nowrap overflow-auto h-96 mt-16">
                <div className="h-full  flex justify-center items-center  ">
                  {dataHelldivers && <Helldivers helldivers={dataHelldivers} />}
                </div>
                <ScrollBar orientation="horizontal" color="#FFEE00" />
              </ScrollArea>
            ) : (
              <>
                <Info />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
