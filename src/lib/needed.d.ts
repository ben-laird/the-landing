type Needed<T> = Pick<
  T,
  Exclude<
    {
      [P in keyof T]: T[P] extends Exclude<T[P], undefined> ? P : never;
    }[keyof T],
    undefined
  >
>;

export default Needed;
