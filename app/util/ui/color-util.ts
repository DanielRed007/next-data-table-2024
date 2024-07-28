export const getColorVariant = (buttonColor?: string): string => {
  switch (buttonColor) {
    case "blue":
      return "bg-blue-500 hover:bg-blue-700";
    case "green":
      return "bg-green-500 hover:bg-green-700";
    case "red":
      return "bg-red-500 hover:bg-red-700";
    default:
      return "bg-transparent hover:bg-gray-500";
  }
};

export const getOutline = (outline: boolean): string => {
  return outline ? "border border-slate-400" : "";
};
