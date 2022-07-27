type Props = {
  count: number
}

export function Info ({ count }: Props) {
  return (
    <div>
      <p>The next count will be: {count + 1}</p>
      <p>The previous count was: {count - 1}</p>
    </div>
  )
}
