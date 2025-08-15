interface AlertProps {
  type?: "info" | "warning" | "success";
  children: React.ReactNode;
}

export default function Alert({ type = "info", children }: AlertProps) {
  const colors = {
    info: "bg-blue-100 text-blue-800",
    warning: "bg-yellow-100 text-yellow-800",
    success: "bg-green-100 text-green-800",
  };
  return (
    <div className={`p-4 rounded-md mb-4 ${colors[type]}`}>
      {children}
    </div>
  );
}
