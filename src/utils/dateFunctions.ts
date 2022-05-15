import { formatDistanceToNow } from 'date-fns'

export const getFormatDistanceToNow = (date:Date, author: string) : string => {

  const fromNow = formatDistanceToNow(date);

  return `${fromNow} ago by ${author}`

}