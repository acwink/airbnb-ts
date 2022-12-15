import { AxiosResponse } from "axios";
import wkRequest from "..";

export function getHomeGoodPriceData(): Promise<AxiosResponse> {
  return wkRequest.get({
    url: "/home/goodprice",
  });
}

export function getHomeHighScoreData(): Promise<AxiosResponse> {
  return wkRequest.get({
    url: "/home/highscore",
  });
}

export function getHomeDiscountData(): Promise<AxiosResponse> {
  return wkRequest.get({
    url: "/home/discount",
  });
}

export function getHomeRecommendData(): Promise<AxiosResponse> {
  return wkRequest.get({
    url: "/home/hotrecommenddest",
  });
}

export function getHomeLongforData(): Promise<AxiosResponse> {
  return wkRequest.get({
    url: "/home/longfor",
  });
}

export function getHomePlusData(): Promise<AxiosResponse> {
  return wkRequest.get({
    url: "/home/plus",
  });
}
