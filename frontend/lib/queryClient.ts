import { QueryClient } from "@tanstack/react-query";
import { defaultQueryFn } from "./defaultQueryFn";

export const queryClient =  new QueryClient({
    defaultOptions: {
        queries: { queryFn: defaultQueryFn as any   } 
    }
})