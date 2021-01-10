export const generateUniqueId = () => {
  const intDatetime = Date.now();
  const randomInt = ~~(Math.random() * 1000000);
  const id = `n${intDatetime.toString()}${randomInt.toString()}`;
  return id;
};

const dummyFooToSuppressPreferDefaultExportWarning = () => {
  console.log('');
};
