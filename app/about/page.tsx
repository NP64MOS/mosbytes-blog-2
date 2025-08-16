import { Typography } from "@/components/ui-components";
import MDXContent from "./mdx-content";

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <Typography variant="h1" className="mb-8">
        About MOSBytes
      </Typography>
      <div className="prose prose-blue max-w-none">
        <MDXContent />
      </div>
    </div>
  );
}
