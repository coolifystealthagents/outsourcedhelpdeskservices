import { stealthAgentsReviews } from './reviews';
import provenance from './reviews-provenance.json';

export function ReviewsMarquee({ compact = false }: { compact?: boolean }) {
  const cards = [...stealthAgentsReviews, ...stealthAgentsReviews];
  return <section className={`reviews-marquee ${compact ? 'reviews-compact' : ''}`} aria-label="Stealth Agents reviews">
    <div className="reviews-heading"><p>Stealth Agents reviews</p>{compact ? null : <h2>What clients say about working with Stealth Agents</h2>}</div>
    <div className="reviews-window" tabIndex={0}><div className="reviews-track">{cards.map((review, index) => <figure className="review-card" key={`${review.name}-${index}`} aria-hidden={index >= stealthAgentsReviews.length || undefined}><span className="review-stars" aria-label="5 out of 5 stars">★★★★★</span><blockquote>“{review.quote}”</blockquote><figcaption><strong>{review.name}</strong><span>{review.role}</span></figcaption></figure>)}</div></div>
    <p className="review-source">Source: <a href={provenance.sourcePage} target="_blank" rel="noopener noreferrer">approved first-party Stealth Agents client review register</a>. No individual source URLs were supplied.</p>
  </section>;
}
