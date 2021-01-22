import { getCategories, getJoke } from './api';

export const categories = async (): Promise<void | string[]> => {
  return await getCategories();
}

export const randomJoke = async (parent: void, args: Args): Promise<void | string> => {
  return await getJoke(args.category);
}
