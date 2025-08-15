interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
}

export default function Button({ children, onClick, href }: ButtonProps) {
  if (href) {
    return (
      <a
        href={href}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover-lift inline-block"
      >
        {children}
      </a>
    );
  }
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-blue-700 text-white rounded-lg hover-lift"
    >
      {children}
    </button>
  );
}
