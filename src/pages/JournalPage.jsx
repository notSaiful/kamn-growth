import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, BookOpen, X, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { KhatamStar, ArchDivider } from '../components/SazoArch';
import PageTransition from '../components/PageTransition';
import { EASE_LUXURY } from '../lib/motionTokens';

export default function JournalPage() {
  const [selectedTopic, setSelectedTopic] = useState('All');
  const [activeArticle, setActiveArticle] = useState(null);
  const [readProgress, setReadProgress] = useState(0);

  const topics = ['All', 'Growth', 'Procurement', 'Operations', 'AI Systems'];

  const articles = [
    {
      id: 1,
      topic: "Growth",
      date: "Spring 2026",
      readTime: "4 min read",
      title: "The Myth of Aggressive Outbound: Why Quiet Competence Closes Larger Deals.",
      excerpt: "Why high-growth B2B founders are abandoning 10-step spam sequences in favor of restrained, researched correspondence that respects executive intelligence.",
      content: [
        "In modern commercial markets, aggression is frequently mistaken for momentum. Startups and enterprise sales teams blast thousands of generic templated sequences hoping for a 0.8% reply rate. They burn target market goodwill before ever understanding the prospective client's balance sheet.",
        "Quiet competence takes the opposite stance. By researching the precise regulatory pressure, supplier bottleneck, or operational friction facing an enterprise before writing a single sentence, the outreach transitions from an intrusive pitch into a dignified memorandum.",
        "The rationale is clear: fewer messages sent, higher relevance for decision-makers, and relationships structured around mutual respect rather than desperate volume."
      ]
    },
    {
      id: 2,
      topic: "Procurement",
      date: "Winter 2026",
      readTime: "5 min read",
      title: "The Cost of Chasing: How Procurement Discipline Preserves Operating Margin.",
      excerpt: "Leaving supplier negotiation until the eleventh hour erodes commercial margin. Here is how institutional operators structure supplier discovery.",
      content: [
        "Most mid-market businesses hemorrhage substantial capital not in salaries or marketing, but in unscrutinized vendor invoices and rushed procurement cycles.",
        "When purchasing is treated as an ad-hoc emergency rather than a disciplined cadence, vendors exploit urgency. Landed costs expand, payment terms shrink to upfront cash, and penalty clauses disappear from supply contracts.",
        "Operating with procurement discipline means building a continuous comparison index: mapping alternative suppliers months before contract renewal, benchmarking unit economics objectively, and negotiating under calm, institutional leverage."
      ]
    },
    {
      id: 3,
      topic: "Operations",
      date: "Autumn 2025",
      readTime: "3 min read",
      title: "The Founder's Attention Deficit: Why True Leverage Begins Behind the Scenes.",
      excerpt: "A company cannot outgrow its back-office friction. Why exceptional founders guard their cognitive bandwidth above all other assets.",
      content: [
        "The rarest commodity in an expanding enterprise is not capital or market opportunity; it is uninterrupted founder focus.",
        "When an executive spends four hours a day answering vendor queries, verifying whether invoices were cleared, or coordinating meeting links, the strategic compass of the business stalls.",
        "A quiet operational execution desk removes this friction without adding bureaucratic layers. Standard Operating Procedures (SOPs) are executed faithfully with rigorous accountability, giving founders their focus back."
      ]
    },
    {
      id: 4,
      topic: "AI Systems",
      date: "Summer 2025",
      readTime: "4 min read",
      title: "Beyond the Novelty: Deploying Supervised AI Workflows that Survive Reality.",
      excerpt: "Moving past speculative chatbots. How boutique consultancies deploy practical, human-supervised automations for data normalization and triage.",
      content: [
        "The modern technology landscape is intoxicated by demonstrations and empty novelty. Yet inside real commercial enterprises, speculative AI models create more liability than value.",
        "Useful automation is quiet. It lives in background pipelines: extracting key line items from disparate supplier PDFs, enriching outbound prospect datasets with verified corporate registries, and drafting synthesized meeting action items.",
        "Most critically, high-trust enterprises always require human supervision. When governed by ethics and experienced operators, technology becomes an instrument of precision rather than chaotic risk."
      ]
    }
  ];

  const filtered = selectedTopic === 'All' 
    ? articles 
    : articles.filter(a => a.topic === selectedTopic);

  const handleModalScroll = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
    const progress = (scrollTop / (scrollHeight - clientHeight)) * 100;
    setReadProgress(progress);
  };

  return (
    <PageTransition>
      <div className="pt-32 pb-24 min-h-screen bg-transparent text-[#29251F]">
        
        {/* Hero Section */}
        <section className="editorial-container pt-8 pb-20 border-b border-[#29251F]/10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 mb-6">
              <KhatamStar className="w-4 h-4 text-[#B59661]" />
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#68694C]">
                Publication & Memorandums
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-[#29251F] leading-[1.05] uppercase mb-8">
              NOTES<br />
              <span className="text-[#68694C] font-semibold">FROM THE WORK.</span>
            </h1>

            <p className="text-base sm:text-xl text-[#6C6255] font-normal max-w-xl leading-relaxed">
              Perspectives on quiet growth, procurement rigor, back-office leverage, and disciplined execution.
            </p>
          </div>
        </section>

        {/* Filter Bar */}
        <section className="editorial-container pt-12 pb-8">
          <div className="flex flex-wrap items-center gap-3 border-b border-[#29251F]/10 pb-6">
            {topics.map((t) => (
              <button
                key={t}
                onClick={() => setSelectedTopic(t)}
                className={`min-h-[44px] px-4 py-2.5 text-xs tracking-[0.15em] uppercase font-semibold transition-all rounded-xs cursor-pointer inline-flex items-center justify-center ${
                  selectedTopic === t
                    ? 'bg-[#29251F] text-[#FAF6EE] shadow-sm'
                    : 'bg-[#FAF6EE] text-[#6C6255] hover:text-[#29251F] border border-[#29251F]/10'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </section>

        {/* Magazine Editorial Articles Grid */}
        <section className="editorial-container py-12 border-b border-[#29251F]/10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
            {filtered.map((item, idx) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onClick={() => {
                  setActiveArticle(item);
                  setReadProgress(0);
                }}
                className="group cursor-pointer p-8 sm:p-10 bg-[#FAF6EE] border border-[#29251F]/10 rounded-sm hover:border-[#B59661] hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#29251F]/10 text-xs text-[#6C6255]">
                    <span className="uppercase tracking-[0.2em] font-semibold text-[#68694C]">
                      {item.topic}
                    </span>
                    <span className="font-medium flex items-center gap-1.5">
                      <Clock className="w-3 h-3 text-[#B59661]" />
                      {item.readTime}
                    </span>
                  </div>

                  <h2 className="text-xl sm:text-2xl text-[#29251F] font-semibold leading-snug mb-4 group-hover:text-[#68694C] transition-colors">
                    {item.title}
                  </h2>

                  <p className="text-sm text-[#6C6255] font-normal leading-relaxed mb-6">
                    {item.excerpt}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#29251F]/5 flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#29251F] group-hover:text-[#B59661] transition-colors flex items-center gap-2">
                    <span>Read Essay</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                  <span className="text-xs font-normal text-[#6C6255]/70">
                    {item.date}
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Article Reading Modal / Overlay with Reading Progress Bar */}
        <AnimatePresence>
          {activeArticle && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#29251F]/60 backdrop-blur-xs">
              <motion.div
                initial={{ opacity: 0, scale: 0.98, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98, y: 10 }}
                transition={{ duration: 0.3, ease: EASE_LUXURY }}
                className="bg-[#FAF6EE] max-w-3xl w-full max-h-[85vh] rounded-sm border border-[#29251F]/20 shadow-2xl relative overflow-hidden flex flex-col"
              >
                {/* Subtle Scroll Reading Progress Bar at top of modal */}
                <div className="w-full h-1 bg-[#29251F]/10">
                  <div
                    className="h-full bg-[#B59661] transition-all duration-150"
                    style={{ width: `${readProgress}%` }}
                  />
                </div>

                <div 
                  onScroll={handleModalScroll}
                  className="overflow-y-auto p-8 sm:p-14 flex-1 space-y-6"
                >
                  <button
                    onClick={() => setActiveArticle(null)}
                    className="absolute top-6 right-6 p-2 text-[#6C6255] hover:text-[#29251F] transition-colors cursor-pointer"
                    aria-label="Close article"
                  >
                    <X className="w-6 h-6" />
                  </button>

                  <div className="text-xs uppercase tracking-[0.25em] text-[#68694C] font-semibold">
                    {activeArticle.topic} · {activeArticle.readTime}
                  </div>

                  <h2 className="text-2xl sm:text-4xl font-semibold text-[#29251F] leading-tight mb-8">
                    {activeArticle.title}
                  </h2>

                  <div className="space-y-6 text-base text-[#29251F]/90 font-normal leading-relaxed">
                    {activeArticle.content.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>

                  <div className="mt-12 pt-8 border-t border-[#29251F]/10 flex items-center justify-between">
                    <span className="text-sm text-[#6C6255] font-normal">
                      KAMN Journal
                    </span>
                    <button
                      onClick={() => setActiveArticle(null)}
                      className="px-6 py-2.5 bg-[#29251F] text-[#FAF6EE] text-xs uppercase tracking-widest font-semibold rounded-xs cursor-pointer hover:bg-[#363428]"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Closing CTA */}
        <section className="editorial-container pt-16">
          <div className="p-10 sm:p-14 bg-[#EADDC9]/60 border border-[#29251F]/10 rounded-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl font-semibold text-[#29251F]">
                Interested in putting these ideas into practice?
              </h3>
              <p className="text-sm text-[#6C6255] font-normal">
                We design and execute custom operational architectures for high-trust businesses.
              </p>
            </div>
            <Link
              to="/begin"
              className="min-h-[50px] px-8 py-4 bg-[#29251F] text-[#FAF6EE] text-xs font-semibold tracking-[0.25em] uppercase rounded-sm hover:bg-[#363428] transition-colors inline-flex items-center gap-3 shrink-0 cursor-pointer shadow-md"
            >
              <span>Book a Growth Review</span>
              <ArrowRight className="w-4 h-4 text-[#B59661]" />
            </Link>
          </div>
        </section>

      </div>
    </PageTransition>
  );
}
