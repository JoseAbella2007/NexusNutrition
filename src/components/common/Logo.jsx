import { useId } from "react";
import "./Logo.css";

export default function Logo({ size = "md", showWordmark = true }) {
  const idDegradado = useId();

  return (
    <div className={`logo logo--${size}`}>
      <svg
        className="logo__mark"
        viewBox="0 0 64 64"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id={idDegradado}
            x1="4"
            y1="6"
            x2="58"
            y2="58"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#7CFF3A" />
            <stop offset="1" stopColor="#B7FF00" />
          </linearGradient>
        </defs>
        <rect
          x="2"
          y="2"
          width="60"
          height="60"
          rx="18"
          fill="#0D0D0D"
          stroke={`url(#${idDegradado})`}
          strokeWidth="1.4"
        />
        <path
          d="M19 45.5V18.5H24.6L38.4 38.2V18.5H44V45.5H38.4L24.6 25.8V45.5H19Z"
          fill={`url(#${idDegradado})`}
        />
      </svg>
      {showWordmark && (
        <span className="logo__wordmark">
          <span className="logo__word">NEXUS</span>
          <span className="logo__sub">NUTRITION</span>
        </span>
      )}
    </div>
  );
}
