export interface InitialState<T> {
  isLoading: boolean;
  isError: boolean;
  data: T;
  error?: Record<string, unknown> | unknown;
}
