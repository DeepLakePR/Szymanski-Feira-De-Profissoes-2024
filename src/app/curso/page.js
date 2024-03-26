import defaultStyles from '../templates/default.module.css';
import cursoStyles from "./curso.module.css";

import Header from '../templates/header/header.js';

export default function Course() {

    return (

        <main className={defaultStyles.mainContainer}>

            <Header />

            <section className={defaultStyles.main} style={{ paddingTop: '0px' }}>

                <h2>Curso</h2>

                <div className={defaultStyles.mainContainer}>

                    <div className={cursoStyles.cursoWrapper}>

                        <div className={cursoStyles.materiasBoxSingle} id="analytic-development">

                            <img src="/transparent.webp" />

                            <h2>Análise e Desenvolvimento de Sistemas</h2>

                            <p>
                                Estuda as metodologias para criação de software,
                                estuda o trabalho cooperativo e ágil, trabalhando formas de entendermos as ideias,
                                as prioridades, como dividir as tarefas do grupo, etc para desenvolvermos o projeto de modo eficiente.
                            </p>

                        </div>

                        <div className={cursoStyles.materiasBoxSingle} id="science-computational">

                            <img src="/transparent.webp" />

                            <h2>Ciências da Computação</h2>

                            <p>
                                A ciências da computação estuda a arquitetura dos computadores,
                                como funciona o "corpo" dos computadores, a importância dessa arquitetura,
                                a diferença entre hardware e software.
                            </p>

                        </div>

                        <div className={cursoStyles.materiasBoxSingle} id="logic-computational">

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
