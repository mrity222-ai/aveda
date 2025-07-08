
import { cn } from '@/lib/utils';

const Logo = ({
  showTagline = false,
  className,
}: {
  showTagline?: boolean;
  className?: string;
}) => {
  return (
    <svg
      viewBox={showTagline ? '0 0 300 60' : '0 0 165 50'}
      xmlns="http://www.w3.org/2000/svg"
      className={cn('w-auto', className)}
      aria-label="Aveda Technologies Logo"
    >
      <style>
        {`
          .aveda-text {
            font-family: Poppins, sans-serif;
            font-size: 40px;
            font-weight: 700;
            letter-spacing: -2px;
          }
          .tagline-text {
            font-family: Inter, sans-serif;
            font-size: 14px;
            fill: hsl(var(--muted-foreground));
          }
          .tm-text {
            font-family: Inter, sans-serif;
            font-size: 10px;
            fill: hsl(var(--muted-foreground));
          }
          .dark-gray { fill: hsl(var(--foreground)); }
          .bright-red { fill: hsl(var(--primary)); }
        `}
      </style>

      <g>
        {/* AVEDA part */}
        <text x="0" y="40" className="aveda-text">
          <tspan className="dark-gray">AV</tspan>
          <tspan className="bright-red">E</tspan>
          <tspan className="bright-red">DA</tspan>
        </text>

        {/* The 3 lines in E */}
        <g className="bright-red" fill="hsl(var(--primary))">
          <rect x="74" y="15" width="23" height="4" />
          <rect x="74" y="25" width="23" height="4" />
          <rect x="74" y="35" width="23" height="4" />
        </g>
      </g>
      
      {showTagline && (
        <g>
          {/* TM */}
          <text x="168" y="16" className="tm-text">
            TM
          </text>

          {/* Tagline */}
          <text x="168" y="32" className="tagline-text">
            <tspan>Crafting Technologies for</tspan>
            <tspan x="168" dy="1.2em">
              Social Changes
            </tspan>
          </text>
        </g>
      )}
    </svg>
  );
};

export default Logo;
