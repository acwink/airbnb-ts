export interface IRes<TData = never> {
  _id: string;
  type: string;
  title: string;
  subtitle?: string;
  list?: TData[];
}

export interface IResForDest<TAddress = never, UData = never> {
  _id: string;
  type: string;
  title: string;
  subtitle?: string;
  dest_address: Array<TAddress>;
  dest_list: Record<string, Array<UData>>;
}
// 分页请求结构
export interface IPgRes<TData> {
  errorcode: number;
  list: Array<TData>;
  totalCount: number;
}
