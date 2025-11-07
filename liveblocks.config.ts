import { 
createClient,
LiveList,
LiveMap,
LiveObject,
 } from "@liveblocks/client";
import { createRoomContext } from "@liveblocks/react";
import {
  Layer,
  Color
} from "@/types/canvas"
export const client = createClient({
  throttle: 16,
  authEndpoint: "/api/liveblocks-auth",
});

export const {
  RoomProvider,
  useRoom,
  useSelf,
  useMyPresence,
  useOthers,
  useOthersConnectionIds,
  useCanRedo,
  useOther,
  useCanUndo,
  useHistory,
  useStorage,
  useMutation,
  useOthersMapped,
} = createRoomContext(client);

type UserMeta = {
  id?: string;
  info?: {
    name?: string;
    picture?: string;
  };
};

type Presence = {
  cursor: {x: number, y: number} | null,
  selection: string[],
  pencilDraft: [x: number, y: number, pressure: number][]| null;
  penColor: Color | null;
};

type Storage = {
  layers: LiveMap<string, LiveObject<Layer>>;
  layerIds: LiveList<string>;
};

declare global {
  interface Liveblocks {
    Presence: Presence;
    Storage: Storage;
    UserMeta: UserMeta;
    RoomEvent: {};
    ThreadMetadata: {};
    RoomInfo: {};
  }
}
