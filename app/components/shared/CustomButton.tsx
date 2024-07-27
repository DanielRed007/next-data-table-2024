import { FC, Fragment, ReactElement } from "react";

interface Props {
  buttonColor: string;
  textColor: string;
  buttonText: string;
  fontType: string;
  icon?: ReactElement;
}

export const CustomButton: FC<Props> = ({
  buttonText,
  buttonColor,
  textColor,
  fontType,
  icon,
}) => {
  return (
    <Fragment>
      <button
        className={`flex items-center space-x-2 bg-${buttonColor}-500 hover:bg-${buttonColor}-700 text-${textColor} font-${fontType} py-2 px-4 rounded`}
      >
        {icon && <span>{icon}</span>} {/* Render the icon if it is provided */}
        <span>{buttonText}</span>
      </button>
    </Fragment>
  );
};
