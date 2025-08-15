import Alert from "./Alert";
import Button from "./Button";
import CodeBlock from "./CodeBlock";

export const MDXComponents = {
  Alert,
  Button,
  CodeBlock,
  img: (props: any) => (
    <img {...props} className="rounded-xl shadow-md my-4 max-w-full" />
  ),
};
