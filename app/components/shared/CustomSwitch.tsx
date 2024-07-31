import { Switch } from "@headlessui/react";
import { FC, useState } from "react";

interface Props {
  enabled: boolean;
  toggleSwitch: () => void;
}

export const CustomSwitch: FC<Props> = ({ enabled, toggleSwitch }) => {
  return (
    <Switch
      checked={enabled}
      onChange={toggleSwitch}
      className='group relative flex h-7 w-14 cursor-pointer rounded-full bg-white/10 p-1 transition-colors duration-200 ease-in-out focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[checked]:bg-white/10'
    >
      <span
        aria-hidden='true'
        className='pointer-events-none inline-block size-5 translate-x-0 rounded-full bg-white ring-0 shadow-lg transition duration-200 ease-in-out group-data-[checked]:translate-x-7'
      />
    </Switch>
  );
};