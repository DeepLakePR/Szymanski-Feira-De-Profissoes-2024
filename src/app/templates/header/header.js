import HeaderStyle from "./header.module.css";

export default function Header() {

    return (

        <header className={HeaderStyle.header}>

            <div className={HeaderStyle.headerContainer}>

                <div className={HeaderStyle.headerLogoDiv}>

                    <img src={'/logo.png'} className={HeaderStyle.headerLogo} />

                </div>

                <nav className={HeaderStyle.headerNav}>

                    <ul className={HeaderStyle.headerNavUl}>

                        <li><a href="/">Home</a></li>
                        <li><a href="/curso/">Curso</a></li>
                        <li><a href="/elenco/">Elenco</a></li>

                    </ul>

                </nav>

            </div>

        </header>

    );

}
