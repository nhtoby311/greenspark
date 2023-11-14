import { useCallback, useEffect, useState } from "react"

export default function useAsync(callback : () => Promise<any>, dependencies = []) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState()
  const [value, setValue] = useState()

  const callbackMemoized = useCallback(async () => {
    setLoading(true)
    setError(undefined)
    setValue(undefined)
    
    const val = await callback()
    .catch(setError)
    setValue(val)
    setLoading(false)
    // eslint-disable-next-line
  }, dependencies)

  useEffect(() => {
    callbackMemoized()
    // eslint-disable-next-line
  }, [callbackMemoized])

  return { loading, error, value }
}