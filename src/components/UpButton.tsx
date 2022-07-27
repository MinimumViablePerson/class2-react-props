import { Dispatch, SetStateAction } from 'react'

type Props = {
  count: number
  setCount: Dispatch<SetStateAction<number>>
}

export function UpButton ({ setCount, count }: Props) {
  return (
    <button
      onClick={() => {
        setCount(count + 1)
      }}
    >
      +
    </button>
  )
}
