// Wrapper for iconify-icon web component to avoid TS JSX errors
// This renders the icon using dangerouslySetInnerHTML pattern
interface IconProps {
  name: string;
  className?: string;
}

export default function Icon({ name, className }: IconProps) {
  return (
    <span
      dangerouslySetInnerHTML={{
        __html: `<iconify-icon icon="${name}"${className ? ` class="${className}"` : ""}></iconify-icon>`,
      }}
    />
  );
}
