export const shortAddress = (address: string): string => {
  return `${address.slice(0, 14)}.....${address.slice(-7)}`;
};
