import Skeleton from "react-loading-skeleton";

function PizzaSkeleton() {
  return (
    <div className="flex flex-col justify-center items-center  mt-[40px]">
      <Skeleton className="w-[150px] h-[150px]" circle />
      <Skeleton className="w-[150px] " count={3} />
    </div>
  );
}

export default PizzaSkeleton;
