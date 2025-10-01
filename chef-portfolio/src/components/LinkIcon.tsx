interface LinkIconProps {
  href: string;
  iconClass: string;
  label: string;
  className?: string;
  target?: string;
  rel?: string;
}

const LinkIcon = ({ href, iconClass, label, className, target = "_blank", rel = "noopener noreferrer" }: LinkIconProps) => {
  return (
    <a 
      href={href} 
      className={className}
      target={target}
      rel={rel}
      aria-label={label}
    >
      <i className={iconClass}></i>
      <span>{label}</span>
    </a>
  );
};

export default LinkIcon;