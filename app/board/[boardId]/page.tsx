"use client";

import React from "react";
import { Canvas } from "./_components/canvas";
import { Room } from "@/components/room";
import { Loading } from "./_components/loading";


interface BoardIdPageProps {
  params: Promise<{ boardId: string }>;
}

const BoardIdPage = ({ params }: BoardIdPageProps) => {
  const { boardId } = React.use(params);

 return (
    <Room roomId={boardId} fallback={<Loading/>}>
      <Canvas boardId={boardId} />
    </Room>
  );

};

export default BoardIdPage;