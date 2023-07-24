import axios from 'axios'

export const sum = (a: number, b: number): number => a + b // Synchronous method

export interface IQuote {
    q: string
    a: string
    c: string
    h: string
}

export type Response = IQuote[]

export const getQuotes = async (): Promise<string> => {  // Runs asynchronously 
 // Promises in Javascript
const response = await axios.get<Response>('https://zenquotes.io/api/quotes') // await makes async method look sync
const quotes = response.data
const quote = quotes[0]?.q ?? 'got no quote!'
 return ''
}
