import { FC, Fragment, ReactElement } from "react";
import { getColorVariant, getOutline } from "@/app/util/ui/color-util";

interface Props {
  buttonColor?: string;
  textColor?: string;
  buttonText: string;
  fontType: string;
  icon?: ReactElement;
  outline?: boolean;
}

export const CustomButton: FC<Props> = ({
  buttonText,
  buttonColor,
  textColor,
  fontType,
  icon,
  outline = false,
}) => {
  const colorVariant = getColorVariant(buttonColor);
  const buttonOutline = getOutline(outline);

  const getButtonProps = `flex items-center space-x-2 bg-violet-400 dark:bg-lime-600 ${buttonOutline} text-violet-950 dark:text-lime-950 text-sm font-${fontType} py-2 px-4 rounded-md`;

  return (
    <Fragment>
      <button className={getButtonProps}>
        {icon && <span>{icon}</span>}
        <span>{buttonText}</span>
      </button>
    </Fragment>
  );
};
