/**
 * 此类型文件由swagger解析自动生成，请勿修改
 * <==================================>
 * Swagger Petstore - OpenAPI 3.0
 * OpenAPI spec version: 1.0.11
 * This is a sample Pet Store Server based on the OpenAPI 3.0 specification.  You can find out more about
 * Swagger at [https://swagger.io](https://swagger.io). In the third iteration of the pet store, we've switched to the desi
 * gn first approach!
 * You can now help us improve the API whether it's by making changes to the definition itself or to the code.
 * That way, with time, we can improve the API in general, and expose some of the new features in OAS3.
 * _If you're looking for the Swagger 2.0/OAS 2.0 version of Petstore, then click [here](https://editor.swagger.io/?url=htt
 * ps://petstore.swagger.io/v2/swagger.yaml). Alternatively, you can load via the `Edit > Load Petstore OAS 2.0` menu optio
 * n!_
 * Some useful links:
 * - [The Pet Store repository](https://github.com/swagger-api/swagger-petstore)
 * - [The source API definition for the Pet Store](https://github.com/swagger-api/swagger-petstore/blob/master/src/main/res
 * ources/openapi.yaml)
 */
import type { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import axios from 'axios';
import type { Key, SWRConfiguration } from 'swr';
import useSwr from 'swr';
import type {
  ApiResponse,
  FindPetsByStatusParams,
  FindPetsByTagsParams,
  GetInventory200,
  LoginUserParams,
  Order,
  Pet,
  UpdatePetWithFormParams,
  UploadFileParams,
  User,
} from './swagger.schemas';

/**
 * Update an existing pet by Id
 * @summary Update an existing pet
 */
export const updatePet = (pet: Pet, options?: AxiosRequestConfig): Promise<AxiosResponse<Pet>> => {
  return axios.put(`/pet`, pet, options);
};

/**
 * Add a new pet to the store
 * @summary Add a new pet to the store
 */
export const addPet = (pet: Pet, options?: AxiosRequestConfig): Promise<AxiosResponse<Pet>> => {
  return axios.post(`/pet`, pet, options);
};

/**
 * Multiple status values can be provided with comma separated strings
 * @summary Finds Pets by status
 */
export const findPetsByStatus = (
  params?: FindPetsByStatusParams,
  options?: AxiosRequestConfig,
): Promise<AxiosResponse<Pet[]>> => {
  return axios.get(`/pet/findByStatus`, {
    ...options,
    params: { ...params, ...options?.params },
  });
};

export const getFindPetsByStatusKey = (params?: FindPetsByStatusParams) =>
  [`/pet/findByStatus`, ...(params ? [params] : [])] as const;

export type FindPetsByStatusQueryResult = NonNullable<Awaited<ReturnType<typeof findPetsByStatus>>>;
export type FindPetsByStatusQueryError = AxiosError<void>;

/**
 * @summary Finds Pets by status
 */
export const useFindPetsByStatus = <TError = AxiosError<void>>(
  params?: FindPetsByStatusParams,
  options?: {
    swr?: SWRConfiguration<Awaited<ReturnType<typeof findPetsByStatus>>, TError> & {
      swrKey?: Key;
      enabled?: boolean;
    };
    axios?: AxiosRequestConfig;
  },
) => {
  const { swr: swrOptions, axios: axiosOptions } = options ?? {};

  const isEnabled = swrOptions?.enabled !== false;
  const swrKey = swrOptions?.swrKey ?? (() => (isEnabled ? getFindPetsByStatusKey(params) : null));
  const swrFn = () => findPetsByStatus(params, axiosOptions);

  const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(swrKey, swrFn, swrOptions);

  return {
    swrKey,
    ...query,
  };
};

/**
 * Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
 * @summary Finds Pets by tags
 */
export const findPetsByTags = (
  params?: FindPetsByTagsParams,
  options?: AxiosRequestConfig,
): Promise<AxiosResponse<Pet[]>> => {
  return axios.get(`/pet/findByTags`, {
    ...options,
    params: { ...params, ...options?.params },
  });
};

export const getFindPetsByTagsKey = (params?: FindPetsByTagsParams) =>
  [`/pet/findByTags`, ...(params ? [params] : [])] as const;

export type FindPetsByTagsQueryResult = NonNullable<Awaited<ReturnType<typeof findPetsByTags>>>;
export type FindPetsByTagsQueryError = AxiosError<void>;

/**
 * @summary Finds Pets by tags
 */
export const useFindPetsByTags = <TError = AxiosError<void>>(
  params?: FindPetsByTagsParams,
  options?: {
    swr?: SWRConfiguration<Awaited<ReturnType<typeof findPetsByTags>>, TError> & {
      swrKey?: Key;
      enabled?: boolean;
    };
    axios?: AxiosRequestConfig;
  },
) => {
  const { swr: swrOptions, axios: axiosOptions } = options ?? {};

  const isEnabled = swrOptions?.enabled !== false;
  const swrKey = swrOptions?.swrKey ?? (() => (isEnabled ? getFindPetsByTagsKey(params) : null));
  const swrFn = () => findPetsByTags(params, axiosOptions);

  const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(swrKey, swrFn, swrOptions);

  return {
    swrKey,
    ...query,
  };
};

/**
 * Returns a single pet
 * @summary Find pet by ID
 */
export const getPetById = (
  petId: number,
  options?: AxiosRequestConfig,
): Promise<AxiosResponse<Pet>> => {
  return axios.get(`/pet/${petId}`, options);
};

export const getGetPetByIdKey = (petId: number) => [`/pet/${petId}`] as const;

export type GetPetByIdQueryResult = NonNullable<Awaited<ReturnType<typeof getPetById>>>;
export type GetPetByIdQueryError = AxiosError<void>;

/**
 * @summary Find pet by ID
 */
export const useGetPetById = <TError = AxiosError<void>>(
  petId: number,
  options?: {
    swr?: SWRConfiguration<Awaited<ReturnType<typeof getPetById>>, TError> & {
      swrKey?: Key;
      enabled?: boolean;
    };
    axios?: AxiosRequestConfig;
  },
) => {
  const { swr: swrOptions, axios: axiosOptions } = options ?? {};

  const isEnabled = swrOptions?.enabled !== false && !!petId;
  const swrKey = swrOptions?.swrKey ?? (() => (isEnabled ? getGetPetByIdKey(petId) : null));
  const swrFn = () => getPetById(petId, axiosOptions);

  const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(swrKey, swrFn, swrOptions);

  return {
    swrKey,
    ...query,
  };
};

/**
 * @summary Updates a pet in the store with form data
 */
export const updatePetWithForm = (
  petId: number,
  params?: UpdatePetWithFormParams,
  options?: AxiosRequestConfig,
): Promise<AxiosResponse<unknown>> => {
  return axios.post(`/pet/${petId}`, undefined, {
    ...options,
    params: { ...params, ...options?.params },
  });
};

/**
 * delete a pet
 * @summary Deletes a pet
 */
export const deletePet = (
  petId: number,
  options?: AxiosRequestConfig,
): Promise<AxiosResponse<unknown>> => {
  return axios.delete(`/pet/${petId}`, options);
};

/**
 * @summary uploads an image
 */
export const uploadFile = (
  petId: number,
  uploadFilePayload: Blob,
  params?: UploadFileParams,
  options?: AxiosRequestConfig,
): Promise<AxiosResponse<ApiResponse>> => {
  return axios.post(`/pet/${petId}/uploadImage`, uploadFilePayload, {
    ...options,
    params: { ...params, ...options?.params },
  });
};

/**
 * Returns a map of status codes to quantities
 * @summary Returns pet inventories by status
 */
export const getInventory = (
  options?: AxiosRequestConfig,
): Promise<AxiosResponse<GetInventory200>> => {
  return axios.get(`/store/inventory`, options);
};

export const getGetInventoryKey = () => [`/store/inventory`] as const;

export type GetInventoryQueryResult = NonNullable<Awaited<ReturnType<typeof getInventory>>>;
export type GetInventoryQueryError = AxiosError<unknown>;

/**
 * @summary Returns pet inventories by status
 */
export const useGetInventory = <TError = AxiosError<unknown>>(options?: {
  swr?: SWRConfiguration<Awaited<ReturnType<typeof getInventory>>, TError> & {
    swrKey?: Key;
    enabled?: boolean;
  };
  axios?: AxiosRequestConfig;
}) => {
  const { swr: swrOptions, axios: axiosOptions } = options ?? {};

  const isEnabled = swrOptions?.enabled !== false;
  const swrKey = swrOptions?.swrKey ?? (() => (isEnabled ? getGetInventoryKey() : null));
  const swrFn = () => getInventory(axiosOptions);

  const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(swrKey, swrFn, swrOptions);

  return {
    swrKey,
    ...query,
  };
};

/**
 * Place a new order in the store
 * @summary Place an order for a pet
 */
export const placeOrder = (
  order: Order,
  options?: AxiosRequestConfig,
): Promise<AxiosResponse<Order>> => {
  return axios.post(`/store/order`, order, options);
};

/**
 * For valid response try integer IDs with value <= 5 or > 10. Other values will generate exceptions.
 * @summary Find purchase order by ID
 */
export const getOrderById = (
  orderId: number,
  options?: AxiosRequestConfig,
): Promise<AxiosResponse<Order>> => {
  return axios.get(`/store/order/${orderId}`, options);
};

export const getGetOrderByIdKey = (orderId: number) => [`/store/order/${orderId}`] as const;

export type GetOrderByIdQueryResult = NonNullable<Awaited<ReturnType<typeof getOrderById>>>;
export type GetOrderByIdQueryError = AxiosError<void>;

/**
 * @summary Find purchase order by ID
 */
export const useGetOrderById = <TError = AxiosError<void>>(
  orderId: number,
  options?: {
    swr?: SWRConfiguration<Awaited<ReturnType<typeof getOrderById>>, TError> & {
      swrKey?: Key;
      enabled?: boolean;
    };
    axios?: AxiosRequestConfig;
  },
) => {
  const { swr: swrOptions, axios: axiosOptions } = options ?? {};

  const isEnabled = swrOptions?.enabled !== false && !!orderId;
  const swrKey = swrOptions?.swrKey ?? (() => (isEnabled ? getGetOrderByIdKey(orderId) : null));
  const swrFn = () => getOrderById(orderId, axiosOptions);

  const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(swrKey, swrFn, swrOptions);

  return {
    swrKey,
    ...query,
  };
};

/**
 * For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors
 * @summary Delete purchase order by ID
 */
export const deleteOrder = (
  orderId: number,
  options?: AxiosRequestConfig,
): Promise<AxiosResponse<unknown>> => {
  return axios.delete(`/store/order/${orderId}`, options);
};

/**
 * This can only be done by the logged in user.
 * @summary Create user
 */
export const createUser = (
  user: User,
  options?: AxiosRequestConfig,
): Promise<AxiosResponse<unknown>> => {
  return axios.post(`/user`, user, options);
};

/**
 * Creates list of users with given input array
 * @summary Creates list of users with given input array
 */
export const createUsersWithListInput = (
  user: User[],
  options?: AxiosRequestConfig,
): Promise<AxiosResponse<User>> => {
  return axios.post(`/user/createWithList`, user, options);
};

/**
 * @summary Logs user into the system
 */
export const loginUser = (
  params?: LoginUserParams,
  options?: AxiosRequestConfig,
): Promise<AxiosResponse<string>> => {
  return axios.get(`/user/login`, {
    ...options,
    params: { ...params, ...options?.params },
  });
};

export const getLoginUserKey = (params?: LoginUserParams) =>
  [`/user/login`, ...(params ? [params] : [])] as const;

export type LoginUserQueryResult = NonNullable<Awaited<ReturnType<typeof loginUser>>>;
export type LoginUserQueryError = AxiosError<void>;

/**
 * @summary Logs user into the system
 */
export const useLoginUser = <TError = AxiosError<void>>(
  params?: LoginUserParams,
  options?: {
    swr?: SWRConfiguration<Awaited<ReturnType<typeof loginUser>>, TError> & {
      swrKey?: Key;
      enabled?: boolean;
    };
    axios?: AxiosRequestConfig;
  },
) => {
  const { swr: swrOptions, axios: axiosOptions } = options ?? {};

  const isEnabled = swrOptions?.enabled !== false;
  const swrKey = swrOptions?.swrKey ?? (() => (isEnabled ? getLoginUserKey(params) : null));
  const swrFn = () => loginUser(params, axiosOptions);

  const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(swrKey, swrFn, swrOptions);

  return {
    swrKey,
    ...query,
  };
};

/**
 * @summary Logs out current logged in user session
 */
export const logoutUser = (options?: AxiosRequestConfig): Promise<AxiosResponse<unknown>> => {
  return axios.get(`/user/logout`, options);
};

export const getLogoutUserKey = () => [`/user/logout`] as const;

export type LogoutUserQueryResult = NonNullable<Awaited<ReturnType<typeof logoutUser>>>;
export type LogoutUserQueryError = AxiosError<void>;

/**
 * @summary Logs out current logged in user session
 */
export const useLogoutUser = <TError = AxiosError<void>>(options?: {
  swr?: SWRConfiguration<Awaited<ReturnType<typeof logoutUser>>, TError> & {
    swrKey?: Key;
    enabled?: boolean;
  };
  axios?: AxiosRequestConfig;
}) => {
  const { swr: swrOptions, axios: axiosOptions } = options ?? {};

  const isEnabled = swrOptions?.enabled !== false;
  const swrKey = swrOptions?.swrKey ?? (() => (isEnabled ? getLogoutUserKey() : null));
  const swrFn = () => logoutUser(axiosOptions);

  const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(swrKey, swrFn, swrOptions);

  return {
    swrKey,
    ...query,
  };
};

/**
 * @summary Get user by user name
 */
export const getUserByName = (
  username: string,
  options?: AxiosRequestConfig,
): Promise<AxiosResponse<User>> => {
  return axios.get(`/user/${username}`, options);
};

export const getGetUserByNameKey = (username: string) => [`/user/${username}`] as const;

export type GetUserByNameQueryResult = NonNullable<Awaited<ReturnType<typeof getUserByName>>>;
export type GetUserByNameQueryError = AxiosError<void>;

/**
 * @summary Get user by user name
 */
export const useGetUserByName = <TError = AxiosError<void>>(
  username: string,
  options?: {
    swr?: SWRConfiguration<Awaited<ReturnType<typeof getUserByName>>, TError> & {
      swrKey?: Key;
      enabled?: boolean;
    };
    axios?: AxiosRequestConfig;
  },
) => {
  const { swr: swrOptions, axios: axiosOptions } = options ?? {};

  const isEnabled = swrOptions?.enabled !== false && !!username;
  const swrKey = swrOptions?.swrKey ?? (() => (isEnabled ? getGetUserByNameKey(username) : null));
  const swrFn = () => getUserByName(username, axiosOptions);

  const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(swrKey, swrFn, swrOptions);

  return {
    swrKey,
    ...query,
  };
};

/**
 * This can only be done by the logged in user.
 * @summary Update user
 */
export const updateUser = (
  username: string,
  user: User,
  options?: AxiosRequestConfig,
): Promise<AxiosResponse<unknown>> => {
  return axios.put(`/user/${username}`, user, options);
};

/**
 * This can only be done by the logged in user.
 * @summary Delete user
 */
export const deleteUser = (
  username: string,
  options?: AxiosRequestConfig,
): Promise<AxiosResponse<unknown>> => {
  return axios.delete(`/user/${username}`, options);
};
