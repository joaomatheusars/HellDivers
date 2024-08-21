import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Info from "./info";

const Rules = () => {
  return (
    <div className=" flex w-full justify-end">
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <button className="text-xl uppercase">How to use</button>
        </AlertDialogTrigger>
        <AlertDialogContent className="bg-[#1c1c1c00] border-[#ffee0000] ">
          <AlertDialogHeader>
            <AlertDialogDescription className="text-xl text-white">
              <Info />
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
          <AlertDialogCancel className="text-2xl bg-[#FFEE00] text-black text-2xl hover:bg-[#ffee00af]">OK</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default Rules;
