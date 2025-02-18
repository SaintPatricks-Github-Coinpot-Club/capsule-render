export const isGradientColor = (color: any) => {
  if (typeof color === "object") return true;
  return false;
};

export const regexData = (data: any) => {
  return String(data)
    .toLowerCase()
    .replace(/[^a-z]/g, "");
};

interface ColorMap {
  [key: string]: string;
}

export const checkCustomColor = (color: string) => {
  if (color.split(",").length > 1) {
    let temp = color;
    let colorMap: ColorMap = {};
    temp.split(",").forEach(e => {
      const [key, value] = e.split(":");
      colorMap[key] = value;
    });
    return colorMap;
  }

  return color;
};
