import Image from "next/image";

export const Loading = () => {
  return (
    <div className="h-full w-full flex justify-center items-center gap-2">
      <Image
        src="/images.svg"
        alt="Logo"
        width={120}
        height={120}
        className="animate-pulse duration-700"
      />
      <h2 className="text-[30px] font-semibold animate-pulse duration-700">SyncHub</h2>
    </div>
  );
};