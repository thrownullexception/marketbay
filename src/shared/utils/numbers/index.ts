export const shorten = (num: number, digits = 1): string => {
    const units = ["k", "M", "G", "T", "P", "E", "Z", "Y"];
    let decimal: number;
    for (let i = units.length - 1; i >= 0; i -= 1) {
      decimal = 1000 ** (i + 1);
      if (num <= -decimal || num >= decimal) {
        return String(+(num / decimal).toFixed(digits)) + units[i];
      }
    }
    return String(num);
  };
  