export const formatDate = (isoString) => {
  const date = new Date(isoString);
  return date.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
};