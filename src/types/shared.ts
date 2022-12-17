// 使用更精准的类型描述对象属性名
export type PlainObjectType = Record<PropertyKey, unknown>;
export interface IRoom {
  id: string;
  picture_url: string;
  verify_info: {
    kicker_badge?: {
      label: string;
      type: string;
    };
    messages: Array<string>;
    text_color: string;
  };
  name: string;
  price: number;
  price_format: `￥${number}`;
  star_rating: number;
  star_rating_color: string;
  reviews_count: number;
  reviews?: Array<IReview>;
  bottom_info: {
    content: string;
    content_color: string;
    font_size: string;
    visibility: string;
  };
  lat: number;
  lng: number;
  image_url: string;
}

export interface IReview {
  comments: string;
  created_at: string;
  is_translated: boolean;
  localized_date: string;
  reviewer_image_url: string;
  review_id: string;
}
