import Image from 'next/image';
import { cn } from '@/lib/utils';

const Logo = ({
  className,
}: {
  className?: string;
}) => {
  return (
    <Image
      src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="Aveda Technologies Logo"
      width={300}
      height={60}
      className={cn('w-auto object-contain', className)}
      data-ai-hint="company logo"
    />
  );
};

export default Logo;
