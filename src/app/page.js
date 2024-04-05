import defaultStyles from './templates/default.module.css';
import gridStyle from "./templates/default-grid.module.css";

import Header from './templates/header/header.js';
import Footer from './templates/footer/footer.js';

export default function Home() {

  return (

    <main className={defaultStyles.mainContainer}>

      <Header></Header>

      <section className={defaultStyles.main} style={{ padding: '25px', paddingTop: '0px' }}>

        <h2>Home</h2>

        <div className={gridStyle.postWrapper}>


          <div className={gridStyle.postBoxSingle} style={{width: '100%', gridColumnStart: 1, gridColumnEnd: 4, gridRowStart: 1, gridRowEnd: 0.9}}>

            <img src="/home-photos/sala1.jpeg" style={{height: '80%', maxHeight: 'none', objectFit: 'cover'}} />

            <h3>Post Title</h3>

            <p>Somos uma turma apaixonada por tecnologia e inovação, dedicada a dominar as linguagens de programação mais recentes e a criar soluções incríveis. Estamos sempre em busca de desafios e oportunidades para aprender e crescer juntos.</p>

          </div>


          <div className={gridStyle.postBoxSingle}>

            <img src="/home-photos/sala2.jpeg" />

            <h3>Post Title</h3>

            <p>Nisi sunt commodo tempor eiusmod excepteur dolor et laboris ut amet id consequat. Duis nisi fugiat cillum do id amet cupidatat nulla consequat eu non. Culpa ullamco culpa dolor aute adipisicing laboris mollit in magna. Adipisicing aliquip ut officia elit. Sit ex veniam dolore culpa aute labore ea duis ea.</p>

          </div>


          <div className={gridStyle.postBoxSingle}>

            <img src="/home-photos/grupinho-leticia/photo1.jpeg" />

            <h3>Post Title</h3>

            <p>Nisi sunt commodo tempor eiusmod excepteur dolor et laboris ut amet id consequat. Duis nisi fugiat cillum do id amet cupidatat nulla consequat eu non. Culpa ullamco culpa dolor aute adipisicing laboris mollit in magna. Adipisicing aliquip ut officia elit. Sit ex veniam dolore culpa aute labore ea duis ea.</p>

          </div>


          <div className={gridStyle.postBoxSingle}>

            <img src="/home-photos/grupinho-leticia/photo2.jpeg" />

            <h3>Post Title</h3>

            <p>Nisi sunt commodo tempor eiusmod excepteur dolor et laboris ut amet id consequat. Duis nisi fugiat cillum do id amet cupidatat nulla consequat eu non. Culpa ullamco culpa dolor aute adipisicing laboris mollit in magna. Adipisicing aliquip ut officia elit. Sit ex veniam dolore culpa aute labore ea duis ea.</p>

          </div>


          <div className={gridStyle.postBoxSingle}>

            <img src="/home-photos/grupinho-leticia/photo3.jpeg" />

            <h3>Post Title</h3>

            <p>Nisi sunt commodo tempor eiusmod excepteur dolor et laboris ut amet id consequat. Duis nisi fugiat cillum do id amet cupidatat nulla consequat eu non. Culpa ullamco culpa dolor aute adipisicing laboris mollit in magna. Adipisicing aliquip ut officia elit. Sit ex veniam dolore culpa aute labore ea duis ea.</p>

          </div>


          <div className={gridStyle.postBoxSingle}>

            <img src="/home-photos/grupinho-leticia/photo4.jpeg" />

            <h3>Post Title</h3>

            <p>Nisi sunt commodo tempor eiusmod excepteur dolor et laboris ut amet id consequat. Duis nisi fugiat cillum do id amet cupidatat nulla consequat eu non. Culpa ullamco culpa dolor aute adipisicing laboris mollit in magna. Adipisicing aliquip ut officia elit. Sit ex veniam dolore culpa aute labore ea duis ea.</p>

          </div>


          <div className={gridStyle.postBoxSingle}>

            <img src="/home-photos/grupinho-isa/photo1.jpeg" />

            <h3>Post Title</h3>

            <p>Nisi sunt commodo tempor eiusmod excepteur dolor et laboris ut amet id consequat. Duis nisi fugiat cillum do id amet cupidatat nulla consequat eu non. Culpa ullamco culpa dolor aute adipisicing laboris mollit in magna. Adipisicing aliquip ut officia elit. Sit ex veniam dolore culpa aute labore ea duis ea.</p>

          </div>


          <div className={gridStyle.postBoxSingle}>

            <img src="/home-photos/grupinho-isa/photo2.jpeg" />

            <h3>Post Title</h3>

            <p>Nisi sunt commodo tempor eiusmod excepteur dolor et laboris ut amet id consequat. Duis nisi fugiat cillum do id amet cupidatat nulla consequat eu non. Culpa ullamco culpa dolor aute adipisicing laboris mollit in magna. Adipisicing aliquip ut officia elit. Sit ex veniam dolore culpa aute labore ea duis ea.</p>

          </div>


          <div className={gridStyle.postBoxSingle}>

            <img src="/home-photos/grupinho-isa/photo3.jpeg" />

            <h3>Post Title</h3>

            <p>Nisi sunt commodo tempor eiusmod excepteur dolor et laboris ut amet id consequat. Duis nisi fugiat cillum do id amet cupidatat nulla consequat eu non. Culpa ullamco culpa dolor aute adipisicing laboris mollit in magna. Adipisicing aliquip ut officia elit. Sit ex veniam dolore culpa aute labore ea duis ea.</p>

          </div>


          <div className={gridStyle.postBoxSingle}>

            <img src="/home-photos/grupinho-isa/photo4.jpeg" />

            <h3>Post Title</h3>

            <p>Nisi sunt commodo tempor eiusmod excepteur dolor et laboris ut amet id consequat. Duis nisi fugiat cillum do id amet cupidatat nulla consequat eu non. Culpa ullamco culpa dolor aute adipisicing laboris mollit in magna. Adipisicing aliquip ut officia elit. Sit ex veniam dolore culpa aute labore ea duis ea.</p>

          </div>


          <div className={gridStyle.postBoxSingle}>

            <img src="/home-photos/grupinho-isa/photo5.jpeg" />

            <h3>Post Title</h3>

            <p>Nisi sunt commodo tempor eiusmod excepteur dolor et laboris ut amet id consequat. Duis nisi fugiat cillum do id amet cupidatat nulla consequat eu non. Culpa ullamco culpa dolor aute adipisicing laboris mollit in magna. Adipisicing aliquip ut officia elit. Sit ex veniam dolore culpa aute labore ea duis ea.</p>

          </div>


          <div className={gridStyle.postBoxSingle}>

            <img src="/home-photos/grupinho-isa/photo6.jpeg" />

            <h3>Post Title</h3>

            <p>Nisi sunt commodo tempor eiusmod excepteur dolor et laboris ut amet id consequat. Duis nisi fugiat cillum do id amet cupidatat nulla consequat eu non. Culpa ullamco culpa dolor aute adipisicing laboris mollit in magna. Adipisicing aliquip ut officia elit. Sit ex veniam dolore culpa aute labore ea duis ea.</p>

          </div>


        </div>

      </section>

      <Footer></Footer>

    </main>

  );

}
