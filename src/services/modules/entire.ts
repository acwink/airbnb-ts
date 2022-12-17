import wkRequest from "../";

import type { AxiosResponse } from "axios";
import type { IPgRes } from "@/types/request";
import type { IRoom } from "@/types/shared";

export function getEntireRoomList(
  offset = 0,
  size = 20
): Promise<AxiosResponse<IPgRes<IRoom>>> {
  return wkRequest.get({
    url: "entire/list",
    params: {
      offset,
      size,
    },
  });
}
