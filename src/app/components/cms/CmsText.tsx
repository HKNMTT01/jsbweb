import { cmsStyleToReact, useCmsContent } from "../../../lib/cms";

type Props = {
  id: string;
  page?: string;
  fallback: string;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
};

export default function CmsText({ id, page, fallback, as = "span", className }: Props) {
  const { text, block } = useCmsContent(page);
  const Tag = as as any;
  const current = block(id);
  return (
    <Tag className={className} style={cmsStyleToReact(current?.style)}>
      {text(id, fallback)}
    </Tag>
  );
}
