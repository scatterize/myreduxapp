export const inc = () => ({
  type: 'INC',
});
export const dec = () => ({
  type: 'DEC',
});
export const rnd = (value) => {
  console.log(value);
  return {
    type: 'RND',
    value: value,
  };
};
