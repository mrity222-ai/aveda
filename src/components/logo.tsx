import { cn } from '@/lib/utils';

const Logo = ({
  className,
}: {
  className?: string;
}) => {
  return (
    <span className={cn('font-semibold text-xl text-foreground', className)}>
      Aveda Technologies
    </span>
  );
};

export default Logo;
