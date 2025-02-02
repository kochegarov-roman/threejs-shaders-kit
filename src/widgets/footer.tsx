import { cn } from '@/shared/utils/utils';

export const Footer = ({ variant = 'sticky' }: { variant?: string }) => {
  return (
    <div className="mt-8">
      <footer
        className={cn(
          'z-10 flex p-4 justify-center w-[100%] bottom-0 backdrop-blur',
          variant,
        )}
      >
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://kochegarov.pro"
          target="_blank"
          rel="noopener noreferrer"
        >
          kochegarov.pro →
        </a>
      </footer>
    </div>
  );
};
