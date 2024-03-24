import defaultStyles from './templates/default.module.css';
import mainPageStyles from "./page.module.css";

export default function Curso() {

  return (

    <main className={defaultStyles.mainContainer}>

      <header className={defaultStyles.header}>
    
        <nav className={defaultStyles.headerNav}>

          <ul className={defaultStyles.headerNavUl}>

            <li><a href="/">Curso</a></li>
            <li><a href="/home/">Home</a></li>
            <li><a href="/elenco/">Elenco</a></li>

          </ul>

        </nav>
    
        <div className={defaultStyles.headerLogoDiv}>

          <img src={'/logo.png'} className={defaultStyles.headerLogo} />

        </div>

      </header>

      <section className={defaultStyles.main} style={{paddingTop: '0px'}}>
        
        <h2>Curso</h2>

        <div className={defaultStyles.mainContainer}>

            <div className={mainPageStyles.cursoWrapper}>

                <div className={mainPageStyles.materiasBoxSingle} id="analytic-development">

                    <img src="/transparent.webp" />

                    <h2>Análise e Desenvolvimento de Sistemas</h2>

                    <p>
                        Estuda as metodologias para criação de software, 
                        estuda o trabalho cooperativo e ágil, trabalhando formas de entendermos as ideias, 
                        as prioridades, como dividir as tarefas do grupo, etc para desenvolvermos o projeto de modo eficiente.
                    </p>

                </div>

                <div className={mainPageStyles.materiasBoxSingle} id="science-computational">

                    <img src="/transparent.webp" />

                    <h2>Ciências da Computação</h2>

                    <p>
                        A ciências da computação estuda a arquitetura dos computadores, 
                        como funciona o "corpo" dos computadores, a importância dessa arquitetura, 
                        a diferença entre hardware e software.
                    </p>

                </div>

                <div className={mainPageStyles.materiasBoxSingle} id="logic-computational">

                    <img src="/transparent.webp" />

                    <h2>Lógica Computacional</h2>

                    <p>
                        A lógica computacional se aplica em todo o processo de criação de um software, 
                        desde a que tipo de conectivo lógico precisamos usar a se ele é verdadeiro ou falso.
                    </p>

                </div>

            </div>

        </div>
      
      </section>

    </main>

  );
  
}
