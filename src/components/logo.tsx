import { cn } from '@/lib/utils';

const Logo = ({
  className,
}: {
  className?: string;
}) => {
  return (
    <span className={cn('font-headline text-2xl font-bold text-white', className)}>
      Aveda Technologies
    </span>
  );
};

export default Logo;
