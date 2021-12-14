import axios, { AxiosResponse } from "axios"

const headers = {
  'Content-Type': 'application/json',
}

export const Fetcher = () => {
  return {
    post: async (url: string, body: any): Promise<any> => {
      return axios
        .post(url, { headers, body })
        .then((res: AxiosResponse) => res.data)
        .catch(err => err.response)
    }
  }

}
