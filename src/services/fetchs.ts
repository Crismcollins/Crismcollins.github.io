import { useMutation, UseMutationOptions, useQuery, UseQueryOptions } from "@tanstack/react-query";

interface ApiResponse<T> {
  data: T;
  message: string;
  status: number;
  error: string;
}

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const useGetQuery = <T>(
  url: string,
  key: string,
  options: Omit<UseQueryOptions<ApiResponse<T>, Error>, 'queryKey' | 'queryFn'> = {}
) => {
  const finalUrl = BASE_URL + url;

  const response = useQuery<ApiResponse<T>>({
    queryKey: [key],
    queryFn: async () =>
      await fetch(finalUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      }).then((res) =>
        res.json(),
      ),

    ...options
  })

  return { ...response, data: response.data?.data }
}

export const usePostQuery = <T>(
  url: string,
  key: string,
  options: Omit<UseMutationOptions<void, Error, T>, 'mutationFn'> = {}
) => {
  const finalUrl = BASE_URL + url;

  const mutation = useMutation<void, Error, T>({
    mutationKey: [key],
    mutationFn: async (data: T) => { // Aquí `data` es del tipo `T`
      const response = await fetch(finalUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }
    },
    ...options
  });

  return mutation;
};

export const usePatchQuery = <T>(
  url: string,
  key: string,
  options: Omit<UseMutationOptions<void, Error, T>, 'mutationFn'> = {}
) => {
  const finalUrl = BASE_URL + url;

  const mutation = useMutation<void, Error, T>({
    mutationKey: [key],
    mutationFn: async (data: T) => {
      const response = await fetch(finalUrl, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }
    },
    ...options
  });

  return mutation;
};

export const useDeleteQuery = <T>(
  url: string,
  key: string,
  options: Omit<UseMutationOptions<void, Error>, 'mutationFn'> = {}
) => {
  const finalUrl = BASE_URL + url;

  const mutation = useMutation<void, Error>({
    mutationKey: [key],
    mutationFn: async () => {
      const response = await fetch(finalUrl, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }
    },
    ...options
  });

  return mutation;
};