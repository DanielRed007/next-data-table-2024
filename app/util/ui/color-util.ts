export const getColorVariant = (buttonColor?: string): string => {
  switch (buttonColor) {
    case "blue":
      return "bg-blue-500 transition ease-in-out delay-500 transition-colors hover:bg-blue-700";
    case "green":
      return "bg-green-500 transition ease-in-out delay-500 transition-colors hover:bg-green-700";
    case "red":
      return "bg-red-500 transition ease-in-out delay-500 transition-colors hover:bg-red-700";
    default:
      return "bg-transparent transition ease-in-out delay-500 transition-colors hover:bg-gray-500";
  }
};

export const getOutline = (outline: boolean): string => {
  return outline ? "border border-slate-400" : "";
};
