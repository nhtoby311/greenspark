import useAsync from "./useAsync"

const DEFAULT_OPTIONS = {
  headers: { "Content-Type": "application/json" },
}

export default function useFetch(url:string, options = {}, dependencies = []) {
  return useAsync(async() => {
      const req = await fetch(url, { ...DEFAULT_OPTIONS, ...options })
      const res = await req.json()
      if (!req.ok) throw new Error(" "+ req.status) 

      return res
  }, dependencies)
}