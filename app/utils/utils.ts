import { IUser } from "../interfaces";

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

const removeItem = (arr: any[], index: number) => arr.splice(index, 1)

const getRandomInt = (min: number, max: number): number => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const sortFriends = (users: IUser[]) => {
  // Resultado
  let sortedFriends = []

  // Seleccionar un usuario random para iniciar
  let index = getRandomInt(0, users.length - 1)
  const firstFriend = users[index];

  // Realizar sort
  while (users.length) {
    let currentFriend = users[index]
    removeItem(users, index)
    index = getRandomInt(0, users.length - 1)
    sortedFriends.push([currentFriend, users[index] || firstFriend])
  }
  return sortedFriends;
}
