type SVGParams = {
  size?: string | number;
  color?: string;
};

export const MenuIcon = ({ size = "24", color = "#001A72" }: SVGParams) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 17H20M4 12H20M4 7H20"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
