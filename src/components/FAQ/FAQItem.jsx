import { useRef } from 'react'

export default function FAQItem({ question, answer, isOpen, onToggle }) {
  const answerRef = useRef(null)

  return (
    <div className="border-b border-line">
      <button
        className="w-full text-left bg-none border-none py-5.5 flex justify-between items-center cursor-pointer font-bold text-base text-ink"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        {question}
        <span
          className={`text-[1.4rem] font-normal transition-transform duration-250 ease-out text-blue flex-none ml-4 ${isOpen ? 'rotate-45' : ''}`}
        >
          +
        </span>
      </button>
      <div
        className="overflow-hidden transition-[max-height] duration-350 ease-out"
        ref={answerRef}
        style={{ maxHeight: isOpen ? `${answerRef.current?.scrollHeight ?? 0}px` : '0px' }}
      >
        <p className="pb-5.5 text-ink-soft leading-[1.6] max-w-170">{answer}</p>
      </div>
    </div>
  )
}
