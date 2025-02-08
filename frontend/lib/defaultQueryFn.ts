export const defaultQueryFn = async ({ queryKey }: { queryKey: string}) => {
    const resp = await fetch(`http://localhost:5000/${queryKey}`);

    return await resp.json()
}