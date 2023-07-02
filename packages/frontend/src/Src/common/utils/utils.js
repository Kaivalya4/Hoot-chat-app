export const getCombinedId = (id1, id2) => {
  const combinedId = id1 > id2 ? id1 + id2 : id2 + id1;
  return combinedId;
};
