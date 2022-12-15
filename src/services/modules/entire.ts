import type { AxiosResponse } from "axios";
import wkRequest from "../";

export function getEntireRoomList(
  offset = 0,
  size = 20
): Promise<AxiosResponse> {
  return wkRequest.get({
    url: "entire/list",
    params: {
      offset,
      size,
    },
  });
}
