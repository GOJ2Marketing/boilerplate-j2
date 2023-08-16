import Link from 'next/link';

interface IButton {
  text: string;
  href: string;
  internal?: boolean;
  className?: string;
  onClick?: () => void;
  ariaLabel: string;
  width?: 'full' | 'half' | 'auto';
}

export default function Button({
  text,
  href,
  internal,
  className,
  onClick,
  ariaLabel,
  width,
}: IButton) {


  const widthClass = width === 'full' ? 'min-w-full' : width === 'half' ? 'min-w-half' : 'w-auto';


  if (internal) {
    return (
      <Link href={href} className={`${className ? className : 'btn-primary'} ${widthClass}`} onClick={onClick} aria-label={ariaLabel}>
          <p>{text}</p>
      </Link>
    );
  }

  return (
    <a href={href} className={`${className ? className : 'btn-primary'} ${widthClass}`} onClick={onClick} aria-label={ariaLabel}>
      {text}
    </a>
  );
}