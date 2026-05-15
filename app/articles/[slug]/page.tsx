import { getArticleBySlug } from '../../../src/lib/content';

type Props = { params: { slug: string } };

export default function ArticlePage({ params }: Props) {
  const { slug } = params;
  const { meta, content } = getArticleBySlug(slug);

  if (!meta || !content) {
    return <div className="p-8">Article not found</div>;
  }

  // Simple markdown -> HTML converter for headings and paragraphs (minimal, no deps)
  const mdToHtml = (md: string) => {
    return md
      .split('\n')
      .map((line) => {
        if (line.startsWith('# ')) return `<h1>${line.slice(2)}</h1>`;
        if (line.startsWith('## ')) return `<h2>${line.slice(3)}</h2>`;
        if (line.trim() === '') return '</p><p>';
        return line;
      })
      .join('\n')
      .replace('</p><p>', '<p>')
      .replace(/(<p>)+/, '<p>')
      .replace(/(</p>)+$/, '</p>');
  };

  const html = `<article class="mx-auto max-w-3xl px-6 py-10"><header><h1 class="display-font text-4xl font-semibold mb-4">${meta.title}</h1><p class="text-sm text-stone mb-6">${meta.category || ''} · ${meta.readTime || ''}</p></header><div class="prose">${mdToHtml(content)}</div></article>`;

  return (
    <main>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </main>
  );
}
