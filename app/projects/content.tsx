import { BadgeProps } from "./interfaces";

export const Badge = ({ bg, text, darkBg, darkText, content }: BadgeProps) => {
  const classes = `whitespace-nowrap cursor-default text-xs font-medium me-2 px-2.5 py-0.5 rounded-full ${bg} ${text} ${darkBg} ${darkText}`;
  return (
    <>
      <span className={classes}>{content}</span>
    </>
  );
};
