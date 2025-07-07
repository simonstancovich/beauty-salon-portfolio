import React from "react";
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";
import * as LiaIcons from "react-icons/lia";
import * as GiIcons from "react-icons/gi";
import * as PiIcons from "react-icons/pi";
import * as RxIcons from "react-icons/rx";

const iconSets: Record<string, Record<string, React.ComponentType<any>>> = {
  Fa: FaIcons,
  Md: MdIcons,
  Lia: LiaIcons,
  Gi: GiIcons,
  Pi: PiIcons,
  Rx: RxIcons,
};

export function getIcon(name: string): React.ComponentType<any> | null {
  const match = name.match(/^([A-Z][a-z]+)(.*)$/);
  if (!match) return null;
  const [_, packKey] = match;
  const pack = iconSets[packKey];
  return pack && pack[name] ? pack[name] : null;
}
