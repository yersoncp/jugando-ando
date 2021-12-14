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


const removeItem = (arr: any[], index: number) => {
  arr.splice(index, 1);
}

const getRandomInt = (min: number, max: number): number => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function sortFriends(amigos: IUser[]) {
  let amigosSorteados = []
  
  // amigos 1
  let amigoCurrent = amigos.shift()
  let primerAmigo = amigoCurrent;
  let indexToGift = getRandomInt(0, amigos.length - 1)
  amigosSorteados.push([amigoCurrent, amigos[indexToGift] ? amigos[indexToGift] : primerAmigo])

  // amigos 2
  amigoCurrent = amigos[indexToGift]
  removeItem(amigos, indexToGift)
  indexToGift = getRandomInt(0, amigos.length - 1)
  amigosSorteados.push([amigoCurrent, amigos[indexToGift] ? amigos[indexToGift] : primerAmigo])
  if (amigos.length === 0) return amigosSorteados


  // amigos 3
  amigoCurrent = amigos[indexToGift]
  removeItem(amigos, indexToGift)
  indexToGift = getRandomInt(0, amigos.length - 1)
  amigosSorteados.push([amigoCurrent, amigos[indexToGift] ? amigos[indexToGift] : primerAmigo])
  if (amigos.length === 0) return amigosSorteados

  amigoCurrent = amigos[indexToGift]
  removeItem(amigos, indexToGift)
  indexToGift = getRandomInt(0, amigos.length - 1)
  amigosSorteados.push([amigoCurrent, amigos[indexToGift] ? amigos[indexToGift] : primerAmigo])
  if (amigos.length === 0) return amigosSorteados

  amigoCurrent = amigos[indexToGift]
  removeItem(amigos, indexToGift)
  indexToGift = getRandomInt(0, amigos.length - 1)
  amigosSorteados.push([amigoCurrent, amigos[indexToGift] ? amigos[indexToGift] : primerAmigo])
  if (amigos.length === 0) return amigosSorteados

  amigoCurrent = amigos[indexToGift]
  removeItem(amigos, indexToGift)
  indexToGift = getRandomInt(0, amigos.length - 1)
  amigosSorteados.push([amigoCurrent, amigos[indexToGift] ? amigos[indexToGift] : primerAmigo])
  if (amigos.length === 0) return amigosSorteados

  amigoCurrent = amigos[indexToGift]
  removeItem(amigos, indexToGift)
  indexToGift = getRandomInt(0, amigos.length - 1)
  amigosSorteados.push([amigoCurrent, amigos[indexToGift] ? amigos[indexToGift] : primerAmigo])
  if (amigos.length === 0) return amigosSorteados

  amigoCurrent = amigos[indexToGift]
  removeItem(amigos, indexToGift)
  indexToGift = getRandomInt(0, amigos.length - 1)
  amigosSorteados.push([amigoCurrent, amigos[indexToGift] ? amigos[indexToGift] : primerAmigo])
  if (amigos.length === 0) return amigosSorteados
}
