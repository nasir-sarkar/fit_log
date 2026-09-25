import React from "react";
interface IIconProps {
  className?: string;
}


export const DumbbellIcon = ({ className }: IIconProps) => {
  return (
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className={className}
    >
      <path d="M3.33 5.83C3.33 4.91 4.08 4.17 5 4.17H5.83C6.29 4.17 6.67 4.54 6.67 5V15C6.67 15.46 6.29 15.83 5.83 15.83H5C4.08 15.83 3.33 15.09 3.33 14.17V13.33H2.5C2.04 13.33 1.67 12.96 1.67 12.5V7.5C1.67 7.04 2.04 6.67 2.5 6.67H3.33V5.83ZM16.67 5.83C16.67 4.91 15.92 4.17 15 4.17H14.17C13.71 4.17 13.33 4.54 13.33 5V15C13.33 15.46 13.71 15.83 14.17 15.83H15C15.92 15.83 16.67 15.09 16.67 14.17V13.33H17.5C17.96 13.33 18.33 12.96 18.33 12.5V7.5C18.33 7.04 17.96 6.67 17.5 6.67H16.67V5.83ZM6.67 9.17H13.33V10.83H6.67V9.17Z" />
    </svg>
  );
};



export const ClockIcon = ({ className }: IIconProps) => {
  return (
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14 14"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.17"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="7" cy="7" r="5.83" />
      <path d="M7 3.5V7L9.33 8.17" />
    </svg>
  );
};



export const FlameIcon = ({ className }: IIconProps) => {
  return (
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14 14"
      fill="currentColor"
      className={className}
    >
      <path
        fillRule="evenodd"
        d="M8.68 1.79C8.59 1.61 8.42 1.47 8.23 1.42C8.04 1.37 7.83 1.41 7.66 1.52C7.42 1.68 7.23 1.91 7.09 2.13C6.72 2.71 6.29 3.57 6.15 4.58C6.01 5.59 6.19 6.62 6.75 7.45C6.86 7.61 6.83 7.83 6.67 7.94C6.52 8.06 6.3 8.02 6.18 7.87C5.46 7.01 5.25 6.09 5.25 5.25C5.25 4.96 5.07 4.7 4.8 4.6C4.53 4.5 4.22 4.57 4.03 4.79C3.18 5.8 2.45 7.28 2.45 8.75C2.45 11.26 4.49 13.3 7 13.3C9.51 13.3 11.55 11.26 11.55 8.75C11.55 7.08 10.64 5.59 9.74 4.25C9.26 3.53 8.78 2.84 8.68 1.79Z"
      />
    </svg>
  );
};



export const StarIcon = ({ className }: IIconProps) => {
  return (
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14 14"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.17"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M6.44 1.71C6.62 1.17 7.38 1.17 7.55 1.71L8.44 4.43C8.52 4.67 8.74 4.84 8.99 4.84H11.86C12.43 4.84 12.66 5.56 12.21 5.89L9.89 7.58C9.68 7.73 9.6 7.99 9.67 8.23L10.56 10.96C10.73 11.49 10.12 11.94 9.66 11.61L7.34 9.92C7.14 9.77 6.86 9.77 6.66 9.92L4.34 11.61C3.88 11.94 3.27 11.49 3.44 10.96L4.33 8.23C4.4 7.99 4.32 7.73 4.11 7.58L1.79 5.89C1.34 5.56 1.57 4.84 2.14 4.84H5C5.26 4.84 5.48 4.67 5.56 4.43L6.44 1.71Z" />
    </svg>
  );
};



export const PlusSquareIcon = ({ className }: IIconProps) => {
  return (
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M8 12h8" />
      <path d="M12 8v8" />
    </svg>
  );
};



export const BookmarkIcon = ({ className }: IIconProps) => {
  return (
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
    </svg>
  );
};



export const CheckIcon = ({ className }: IIconProps) => {
  return (
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
};



export const CloseIcon = ({ className }: IIconProps) => {
  return (
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
};



export const ChevronDownIcon = ({ className }: IIconProps) => {
  return (
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
};



export const ArrowDownIcon = ({ className }: IIconProps) => {
  return (
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 5v14" />
      <path d="m19 12-7 7-7-7" />
    </svg>
  );
};



export const MenuIcon = ({ className }: IIconProps) => {
  return (
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
};