import { getArticleBySlug } from '../../../src/content/articles';
import styles from './page.module.css';

type Props = { params: { slug: string } };

type ArticleBlock =
  | { kind: 'heading'; text: string }
  | { kind: 'paragraph'; text: string }
  | { kind: 'quote'; text: string };

const metaPattern = /^(By\s|May\s\d{4}|June\s\d{4}|July\s\d{4}|August\s\d{4}|September\s\d{4}|October\s\d{4}|November\s\d{4}|December\s\d{4}|January\s\d{4}|February\s\d{4}|March\s\d{4}|April\s\d{4})/i;
const headingPattern = /^(what is|what are|what to|step\s\d+|\d+\.|a final word|the bottom line|off-plan purchases|financing your|service charges and levies|completion documents|completion date|payment terms|what to check before buying|finalizing the transfer|due diligence|trust signals|client focus|client guidance|professional experience|practice areas)$/i;

function normalizeParagraph(text: string) {
  return text.replace(/\s+/g, ' ').trim();
}

function isHeadingBlock(text: string) {
  const words = text.split(/\s+/).filter(Boolean);
  return words.length > 0 && words.length <= 10 && !/[.!]{1}$/.test(text) && !text.includes('  ');
}

function toBlocks(detail: string, title: string): ArticleBlock[] {
  const lines = detail.replace(/\r/g, '').split('\n');
  const blocks: ArticleBlock[] = [];
  let buffer: string[] = [];

  const flushParagraph = () => {
    const text = normalizeParagraph(buffer.join(' '));
    buffer = [];

    if (!text) {
      return;
    }

    if (text === title || text.startsWith(`${title} `) || metaPattern.test(text)) {
      return;
    }

    if (/^[💡⚠️]/.test(text)) {
      blocks.push({ kind: 'quote', text });
      return;
    }

    if (headingPattern.test(text.toLowerCase()) || isHeadingBlock(text)) {
      blocks.push({ kind: 'heading', text });
      return;
    }

    blocks.push({ kind: 'paragraph', text });
  };

  for (const line of lines) {
    const trimmed = line.trim();

    if (!trimmed) {
      flushParagraph();
      continue;
    }

    if (
      trimmed === title ||
      trimmed.startsWith(`${title} `) ||
      metaPattern.test(trimmed)
    ) {
      flushParagraph();
      continue;
    }

    if (/^[💡⚠️]/.test(trimmed)) {
      flushParagraph();
      blocks.push({ kind: 'quote', text: normalizeParagraph(trimmed) });
      continue;
    }

    if (headingPattern.test(trimmed.toLowerCase())) {
      flushParagraph();
      blocks.push({ kind: 'heading', text: normalizeParagraph(trimmed) });
      continue;
    }

    buffer.push(trimmed);
  }

  flushParagraph();

  return blocks;
}

export default function ArticlePage({ params }: Props) {
  const { slug } = params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return <div className="p-8">Article not found</div>;
  }

  const blocks = toBlocks(article.detail, article.title);

  return (
    <main className={styles.page}>
      <article className={styles.article}>
        <header className={styles.header}>
          <p className={styles.kicker}>{article.category || 'Article'}</p>
          <h1 className={`display-font ${styles.title}`}>{article.title}</h1>
          <p className={styles.byline}>
            <span>{article.category || 'Legal article'}</span>
            <span aria-hidden="true">·</span>
            <span>{article.readTime || 'Read time unavailable'}</span>
          </p>
        </header>

        <div className={styles.content}>
          {blocks.map((block, index) => {
            if (block.kind === 'heading') {
              return (
                <h2 key={`${block.text}-${index}`} className={styles.heading}>
                  {block.text}
                </h2>
              );
            }

            if (block.kind === 'quote') {
              return (
                <blockquote key={`${block.text}-${index}`} className={styles.quote}>
                  <p>{block.text}</p>
                </blockquote>
              );
            }

            return (
              <p key={`${block.text}-${index}`} className={styles.paragraph}>
                {block.text}
              </p>
            );
          })}
        </div>
      </article>
    </main>
  );
}
