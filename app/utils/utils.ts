/**
   * Agrupar array según key
   *
   * @param arr Array list
   * @param key Array key
   */
export const groupByKey = (arr: any, key: string) => {
  return arr.reduce((rv: any, x: any) => {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
}