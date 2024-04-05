import defaultStyles from '../templates/default.module.css';
import gridStyle from "../templates/default-grid.module.css";

import Header from '../templates/header/header.js';
import Footer from '../templates/footer/footer.js';

export default function Elenco() {

    return (

        <main className={defaultStyles.mainContainer}>

            <Header></Header>

            <section className={defaultStyles.main} style={{ padding: '25px', paddingTop: '0px' }}>

                <h2>Elenco</h2>

                <div className={gridStyle.postWrapper}>


                    <div className={gridStyle.postBoxSingle}>

                        <img src="/elenco-photos/Stephany.jpeg" />

                        <h3>Stephany</h3>

                        <p>Nisi sunt commodo tempor eiusmod excepteur dolor et laboris ut amet id consequat. Duis nisi fugiat cillum do id amet cupidatat nulla consequat eu non. Culpa ullamco culpa dolor aute adipisicing laboris mollit in magna. Adipisicing aliquip ut officia elit. Sit ex veniam dolore culpa aute labore ea duis ea.</p>

                    </div>


                    <div className={gridStyle.postBoxSingle}>

                        <img src="/elenco-photos/Alana.jpeg" />

                        <h3>Allana</h3>

                        <p>Undefined</p>

                    </div>


                    <div className={gridStyle.postBoxSingle}>

                        <img src="/elenco-photos/Isabelly.jpeg" />

                        <h3>Isabelly</h3>

                        <p>Undefined</p>

                    </div>

                    
                    <div className={gridStyle.postBoxSingle}>

                        <img src="/elenco-photos/Isadora.jpeg" />

                        <h3>Isadora</h3>

                        <p>“Uma mente curiosa e determinada, sempre em busca de novos desafios e oportunidades para crescer!“</p>

                    </div>

                    
                    <div className={gridStyle.postBoxSingle}>

                        <img src="/elenco-photos/Miguel.jpeg" />

                        <h3>Miguel</h3>

                        <p>“Olá sou o cara chato da sala que faz piada mas considero todo mundo meu amigo“</p>

                    </div>


                </div>

            </section>

            <Footer></Footer>

        </main>

    );

}
