import { getArticleBySlug } from '../../../src/content/articles';

type Props = { params: { slug: string } };

export default function ArticlePage({ params }: Props) {
  const { slug } = params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return <div className="p-8">Article not found</div>;
  }

  // Normalize newlines and split on one or more blank lines (handles CRLF)
  const normalized = article.detail.replace(/\r/g, '').trim();
  const paragraphs = normalized.split(/\n\s*\n+/);
  // If the first paragraph duplicates the article title, drop it
  if (paragraphs.length && paragraphs[0].trim().startsWith(article.title)) {
    paragraphs.shift();
  }

  const bodyHtml = paragraphs.map((paragraph) => `<p>${paragraph.replace(/\n/g, ' ')}</p>`).join('');

  const html = `<article class="mx-auto max-w-3xl px-6 py-10"><header><h1 class="display-font text-4xl font-semibold mb-4">${article.title}</h1><p class="text-sm text-stone mb-6">${article.category || ''} · ${article.readTime || ''}</p></header><div class="prose">${bodyHtml}</div></article>`;

  return (
    <main>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </main>
  );
}
