import { Dispatch, SetStateAction } from 'react'

type Props = {
  count: number
  setCount: Dispatch<SetStateAction<number>>
}

export function DownButton ({ count, setCount }: Props) {
  return (
    <button
      onClick={() => {
        setCount(count - 1)
      }}
    >
      -
    </button>
  )
}
