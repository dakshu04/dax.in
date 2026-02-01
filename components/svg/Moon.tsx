import * as React from "react";

export default function Moon({
  className,
}: {
  className?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M21.64 13.01A9 9 0 0 1 11 2.36a1 1 0 0 0-1.26-1.26A11 11 0 1 0 22.9 14.27a1 1 0 0 0-1.26-1.26z" />
    </svg>
  );
}
