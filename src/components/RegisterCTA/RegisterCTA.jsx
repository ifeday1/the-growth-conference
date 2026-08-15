import Reveal from '../Reveal'

export default function RegisterCTA() {
  return (
    <section id="register">
      <div className="wrap">
        <Reveal as="div" className="bg-blue text-white rounded-[28px] p-[50px_24px] sm:p-[70px_50px] text-center relative overflow-hidden">
          <div className="slashes justify-center mx-auto mb-5">
            <span className="bg-white"></span>
            <span className="bg-gold"></span>
            <span className="bg-ink"></span>
          </div>
          <h2 className="text-[clamp(2rem,5vw,3.4rem)]">Ready to grow?</h2>
          <p className="mt-4.5 mb-8.5 mx-auto max-w-115 opacity-85 text-[1.05rem]">Join over 1,500 ambitious young people for a transformational experience at Growth Conference 3.0.</p>
          <a
            href="https://live.provinear.com/e/growth-conference-3-0/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-light"
          >
            Get Your Ticket Here
          </a>
        </Reveal>
      </div>
    </section>
  )
}
