import useAsync from './useAsync';

/*const DEFAULT_OPTIONS = {                               //Uncomment if want to fetch from API
  headers: { "Content-Type": "application/json" },
}*/

export default function useFetch(
	url: string | any,
	options = {},
	dependencies = []
) {
	return useAsync(async () => {
		/*const req = await fetch(url, { ...DEFAULT_OPTIONS, ...options })        //Uncomment if want to fetch from API
      const res = await req.json()
      if (!req.ok) throw new Error(" "+ req.status) */
		console.log(options);

		return url;
	}, dependencies);
}
