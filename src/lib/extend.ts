export const extendFrom = <T>(defaultValue: T) => {
  return (extend?: ExtendFrom<T>) => {
    const coalesce = (f: ExtendFrom<T>): f is (def: T) => T =>
      typeof f === "function";

    return extend === undefined
      ? defaultValue
      : coalesce(extend)
      ? extend(defaultValue)
      : extend;
  };
};

export type ExtendFrom<T> = T | ((def: T) => T);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type InferExt<T extends (extend?: ExtendFrom<any>) => any> =
  Parameters<T>[0];
