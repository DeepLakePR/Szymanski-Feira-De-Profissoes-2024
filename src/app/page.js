import defaultStyles from './templates/default.module.css';
import homeStyles from "./home.module.css";

import Header from './templates/header/header.js';

export default function Home() {

  return (

    <main className={defaultStyles.mainContainer}>

      <Header />

      <section className={defaultStyles.main} style={{ paddingTop: '0px' }}>

        <h2>Home</h2>

        <div className={homeStyles.DEV_homeWrapper}>

          <div className={homeStyles.DEV_homeBoxSingle}>

            <img src="https://cdn.discordapp.com/attachments/714194024616951932/1220495097905418300/image.png?ex=660f25a3&is=65fcb0a3&hm=599334e7e3d4b53d08560fb16447593433a04b863341ec02ac5d73b57d6a7778&" />

            <h3>Post Title</h3>

            <p>Nisi sunt commodo tempor eiusmod excepteur dolor et laboris ut amet id consequat. Duis nisi fugiat cillum do id amet cupidatat nulla consequat eu non. Culpa ullamco culpa dolor aute adipisicing laboris mollit in magna. Adipisicing aliquip ut officia elit. Sit ex veniam dolore culpa aute labore ea duis ea.</p>

          </div>

          <div className={homeStyles.DEV_homeBoxSingle}>

            <img src="https://cdn.discordapp.com/attachments/714194024616951932/1220495097905418300/image.png?ex=660f25a3&is=65fcb0a3&hm=599334e7e3d4b53d08560fb16447593433a04b863341ec02ac5d73b57d6a7778&" />

            <h3>Post Title</h3>

            <p>Nisi sunt commodo tempor eiusmod excepteur dolor et laboris ut amet id consequat. Duis nisi fugiat cillum do id amet cupidatat nulla consequat eu non. Culpa ullamco culpa dolor aute adipisicing laboris mollit in magna. Adipisicing aliquip ut officia elit. Sit ex veniam dolore culpa aute labore ea duis ea.</p>

          </div>

          <div className={homeStyles.DEV_homeBoxSingle}>

            <img src="https://cdn.discordapp.com/attachments/714194024616951932/1220495097905418300/image.png?ex=660f25a3&is=65fcb0a3&hm=599334e7e3d4b53d08560fb16447593433a04b863341ec02ac5d73b57d6a7778&" />

            <h3>Post Title</h3>

            <p>Nisi sunt commodo tempor eiusmod excepteur dolor et laboris ut amet id consequat. Duis nisi fugiat cillum do id amet cupidatat nulla consequat eu non. Culpa ullamco culpa dolor aute adipisicing laboris mollit in magna. Adipisicing aliquip ut officia elit. Sit ex veniam dolore culpa aute labore ea duis ea.</p>

          </div>

        </div>

      </section>

    </main>

  );

}
