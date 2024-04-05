import defaultStyles from '../templates/default.module.css';
import cursoStyles from "./curso.module.css";

import Header from '../templates/header/header.js';
import Footer from '../templates/footer/footer.js';

export default function Course() {

    return (

        <main className={defaultStyles.mainContainer}>

            <img className={cursoStyles.cursoBackground} src="/curso-background.png" />

            <Header changeNavigationButtonsColor="true"></Header>

            <section className={defaultStyles.main} style={{ paddingTop: '0px' }}>


                <h2 className={cursoStyles.mainText}>Curso</h2>

                <div className={defaultStyles.mainContainer}>

                    <div className={cursoStyles.cursoWrapper}>

                        <div className={cursoStyles.materiasBoxSingle} id="analytic-development">

                            <img src="/transparent.webp" />

                            <h2>Análise e Desenvolvimento de Sistemas</h2>

                            <p>
                                A matéria de Análise e Projeto de Sistemas trata do processo de conceber, desenvolver e implementar sistemas de informação eficientes e eficazes para resolver problemas organizacionais. Os alunos aprendem a analisar requisitos, modelar sistemas, identificar soluções e projetar a arquitetura de software. Essa disciplina é fundamental para profissionais de TI, pois oferece as habilidades necessárias para entender e criar sistemas que atendam às necessidades dos usuários e das organizações de forma eficaz.
                            </p>

                        </div>

                        <div className={cursoStyles.materiasBoxSingle} id="science-computational">

                            <img src="/transparent.webp" />

                            <h2>Ciências da Computação</h2>

                            <p>
                                Ciência da Computação é a área do conhecimento que atua no desenvolvimento de programas para diferentes dispositivos, a exemplo de celulares e computadores. 
                                A ciência da computação estuda uma grande variedade de tópicos relacionados à computação, incluindo algoritmos, estruturas de dados, programação, redes de computadores, sistemas operacionais, inteligência artificial, computação gráfica, segurança da informação, entre outros. O estudo de hardware (componentes físicos do computador) também está relacionado a essa área, pois envolve o estudo e o desenvolvimento de sistemas de computação.  Os cientistas da computação precisam entender como o hardware funciona para otimizar o desempenho dos programas e criar sistemas eficientes.
                            </p>

                        </div>

                        <div className={cursoStyles.materiasBoxSingle} id="logic-computational">

                            <img src="/transparent.webp" />

                            <h2>Programação Front-End</h2>

                            <p>
                                Front-end é uma área do desenvolvimento de um sistema focado na criação da interação do usuário e no contato do usuário com um aplicativo ou site. Isso envolve o design e desenvolvimento de elementos visuais, como layouts, botões e menus, além da execução de funcionalidades interativas usando outras tecnologias auxiliares. O objetivo do front-end é criar uma experiência de usuário agradável e intuitiva.
                            </p>

                        </div>

                        <div className={cursoStyles.materiasBoxSingle} id="logic-computational">

                            <img src="/transparent.webp" />

                            <h2>Programação Mobile</h2>

                            <p>
                                Laborum proident dolore id dolor occaecat cupidatat duis veniam qui esse aliqua ullamco. Pariatur deserunt ut qui dolor. Consequat minim cillum officia est excepteur aliqua incididunt irure fugiat tempor aliqua laborum aute reprehenderit. Aliquip dolore cillum ut sit reprehenderit enim adipisicing officia. Irure amet velit laborum aliqua nisi sint dolor id et proident aliquip ex voluptate.
                            </p>

                        </div>

                        <div className={cursoStyles.materiasBoxSingle} id="logic-computational">

                        <img src="/transparent.webp" />

                        <h2>Banco de Dados</h2>

                        <p>
                            O banco de dados é um sistema de armazenamento e organização eficiente de informações, essencial para empresas e indivíduos. Seu objetivo principal é permitir o acesso rápido e preciso aos dados, garantindo integridade e segurança, facilitando a tomada de decisões, análises e operações do dia a dia. Em resumo, ele ajuda a gerenciar grandes volumes de dados para uso eficiente em diversos contextos.
                        </p>

                        </div>

                        <div className={cursoStyles.materiasClearBoth}></div>

                    </div>

                </div>

            </section>

            <Footer></Footer>

        </main>

    );

}
