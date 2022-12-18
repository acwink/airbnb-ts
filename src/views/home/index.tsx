import { fetchHomeDataAction } from "@/store/modules/home";
import React, { memo, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import HomeBanner from "./c-cpns/hom-banner";
import { HomeWrapper } from "./style";
import HomeSectionV1 from "./c-cpns/home-section-v1";
import HomeSectionV2 from "./c-cpns/home-section-v2";
import { isEmptyO } from "@/utils";
import HomeLongFor from "./c-cpns/home-longfor";
import HomeSectionV3 from "./c-cpns/home-section-v3";
import { RootState, AppDispatch } from "../../store/index";

const Home = memo(() => {
  // 派发异步事件: 发送网络请求
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchHomeDataAction());
  }, [dispatch]);

  /** 从redux 中获取数据 */
  const {
    goodPriceInfo,
    highScoreInfo,
    discountInfo,
    recommendInfo,
    longforInfo,
    plusInfo,
  } = useSelector(
    (state: RootState) => ({
      goodPriceInfo: state.home.goodPriceInfo,
      highScoreInfo: state.home.highScoreInfo,
      discountInfo: state.home.discountInfo,
      recommendInfo: state.home.recommendInfo,
      longforInfo: state.home.longforInfo,
      plusInfo: state.home.plusInfo,
    }),
    shallowEqual
  );

  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        {isEmptyO(longforInfo) && <HomeLongFor infoData={longforInfo as any} />}

        {isEmptyO(discountInfo) && (
          <HomeSectionV2 infoData={discountInfo as any} />
        )}
        {isEmptyO(recommendInfo) && (
          <HomeSectionV2 infoData={recommendInfo as any} />
        )}

        {isEmptyO(goodPriceInfo) && (
          <HomeSectionV1 infoData={goodPriceInfo as any} />
        )}
        {isEmptyO(discountInfo) && (
          <HomeSectionV1 infoData={highScoreInfo as any} />
        )}

        {isEmptyO(plusInfo) && <HomeSectionV3 infoData={plusInfo as any} />}
      </div>
    </HomeWrapper>
  );
});

export default Home;
