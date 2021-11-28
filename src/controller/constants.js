export default this;
export const path = process.env.PUBLIC_URL;
export function formatVND(str) {
  str += "";
  return str
    .split("")
    .reverse()
    .reduce((prev, next, index) => {
      return (index % 3 ? next : next + ".") + prev;
    });
}
export function isNumber(value) {
  return /^\d*\.?\d*$/.test(value); // Allow digits and '.' only, using a RegExp
}
export function numberOnly(e) {
  if (!/[0-9]/.test(e.key)) {
    e.preventDefault();
  }
}
export function isFileImage(file) {
  if (Array.isArray(file)) {
    file.forEach((element) => {
      if (!isFileImage(element)) {
        return false;
      }
    });
    return true;
  } else {
    // console.log("yaya");
    // console.log(file["type"].split("/")[0] === "image");
    return file && file["type"].split("/")[0] === "image";
  }
}
