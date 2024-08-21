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

const BuyMeaCoffe = () => {
  const donate =
    "https://www.paypal.com/donate/?business=MB8D8Y33DGPXA&no_recurring=0&item_name=Your+help+will+be+very+useful+for+this+and+other+future+projects.&currency_code=BRL";
  return (
    <div className=" flex w-full justify-end">
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <button className="text-xl uppercase">free super earth?</button>
        </AlertDialogTrigger>
        <AlertDialogContent className="bg-[#1C1C1C] border-[#FFEE00]">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-2xl text-white uppercase">
              free super earth?
            </AlertDialogTitle>
            <AlertDialogDescription className="text-xl text-white ">
              Help us buy equipment for our helldivers and keep a free super
              earth.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="text-2xl uppercase">Cancel</AlertDialogCancel>
            <AlertDialogAction className="bg-[#FFEE00] text-black text-2xl hover:bg-[#ffee00af] uppercase">
              <a href={donate} target="_blank">
                Donate
              </a>
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default BuyMeaCoffe;
