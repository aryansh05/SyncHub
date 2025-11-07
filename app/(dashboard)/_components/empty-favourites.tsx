import Image from "next/image";

export const EmptyFavourites = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
        <Image
          src="/empty-favourites.svg"
          alt="Empty Favourites"
            width={140}
            height={140}
            />
            <h2 className="text-2xl font-semibold mt-6">
                No favourites found.
            </h2>
            <p className="text-muted-foreground mt-2 text-sm">
                Try adding some boards to your favourites to see them here.
            </p>
    </div>
    );
};