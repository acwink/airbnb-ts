import { AxiosResponse } from "axios";
import wkRequest from "..";

import type { IRes, IResForDest } from "@/types/request";
import type { IDestAddress, ILongforItem } from "@/types/home";
import type { IRoom } from "@/types/shared";

export function getHomeGoodPriceData(): Promise<AxiosResponse<IRes<IRoom>>> {
  return wkRequest.get({
    url: "/home/goodprice",
  });
}

export function getHomeHighScoreData(): Promise<AxiosResponse<IRes<IRoom>>> {
  return wkRequest.get({
    url: "/home/highscore",
  });
}

export function getHomeDiscountData(): Promise<
  AxiosResponse<IResForDest<IDestAddress, IRoom>>
> {
  return wkRequest.get({
    url: "/home/discount",
  });
}

export function getHomeRecommendData(): Promise<
  AxiosResponse<IResForDest<IDestAddress, IRoom>>
> {
  return wkRequest.get({
    url: "/home/hotrecommenddest",
  });
}

export function getHomeLongforData(): Promise<
  AxiosResponse<IRes<ILongforItem>>
> {
  return wkRequest.get({
    url: "/home/longfor",
  });
}

export function getHomePlusData(): Promise<AxiosResponse<IRes<IRoom>>> {
  return wkRequest.get({
    url: "/home/plus",
  });
}
