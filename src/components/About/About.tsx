import './About.css'

function About() {
  return (
    <section className="about" aria-label="About Dynamox">
      <div className="about__container">

        {/* Left column — headline */}
        <div className="about__left">
          <h2 className="about__title">
            <span className="about__title--highlight">Dynamox</span>
            {', '}por uma indústria mais segura e produtiva
          </h2>
        </div>

        {/* Right column — body text */}
        <div className="about__right">
          <p>
            Em um mundo em que há crescimento na oferta de sensores e
            hardwares é normal que a escolha entre diferentes produtos seja um
            processo trabalhoso. Afinal, pesquisas e comparações tornam-se
            necessárias para entender as melhores opções para as respectivas
            aplicações.
          </p>
          <p>
            Se essa escolha já parece complicada, ao acrescentarmos a questão
            da análise de software, a comparação se torna ainda mais complexa.
          </p>
          <p>
            Uma forma de simplificar este processo é basear os critérios de
            análise em um sistema de referência. Esse manifesto é a consolidação
            da visão Dynamox: ser referência em tecnologias eficientes e eficazes
            para monitoramento, manutenção e performance de ativos.
          </p>
        </div>

      </div>
    </section>
  )
}

export default About