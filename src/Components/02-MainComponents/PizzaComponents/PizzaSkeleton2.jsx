import Skeleton from "react-loading-skeleton";

function PizzaSkeleton2() {
  return (
    <div className="flex justify-around items-center w-full py-10 ">
      <Skeleton className="w-[400px] h-[400px]" circle baseColor="#bebebe" />
      <Skeleton className="w-[350px] mb-10" count={6} baseColor="#bebebe" />
    </div>
  );
}

export default PizzaSkeleton2;
