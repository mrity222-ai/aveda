import Image from 'next/image';
import { cn } from '@/lib/utils';

const Logo = ({
  className,
}: {
  className?: string;
}) => {
  return (
    <Image
      src="https://placehold.co/300x60.png"
      alt="Aveda Technologies Logo"
      width={300}
      height={60}
      className={cn('w-auto', className)}
      data-ai-hint="company logo"
    />
  );
};

export default Logo;
