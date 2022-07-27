import { Dispatch, SetStateAction } from 'react'

import { DownButton } from './DownButton'
import { UpButton } from './UpButton'

type Props = {
  count: number
  setCount: Dispatch<SetStateAction<number>>
}

export function Menu ({ setCount, count }: Props) {
  return (
    <div>
      <DownButton setCount={setCount} count={count} />
      <UpButton setCount={setCount} count={count} />
    </div>
  )
}
