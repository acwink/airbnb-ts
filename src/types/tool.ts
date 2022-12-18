type Without<T, U> = {
  [P in Exclude<keyof T, keyof U>]?: never;
};

export type XOR<T, U> = (Without<T, U> & U) | (Without<U, T> & T);

export type Nullable<T> = {
  [P in keyof T]: T[P] | null;
};
