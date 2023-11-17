import Image from "next/image";
import Link from "next/link";
import React from "react";

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: string;
  variant: string;
};

const Button = ({ type, title, icon, variant }: ButtonProps) => {
  return (
    <button
      className={`flexCenter gap-3 rounded-2xl border ${variant}`} // edit styles from globals.css
      type={type}
    >
      <label className="cursor-pointer bold-16 whitespace-nowrap">
        {title}
      </label>
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
    </button>
  );
};

export default Button;
