import HeaderStyle from "./header.module.css";
import HeaderCustomStyle from './header.css';
import classNames from "classnames";

export default function Header(props) {

    const headerNavUlClasses = classNames({
        headerNavUl: true,
        headerNavUlCustomColor: props.changeNavigationButtonsColor == 'true' ? true : false
    })

    return (

        <header className={HeaderStyle.header}>

            <div className={HeaderStyle.headerContainer}>

                <div className={HeaderStyle.headerLogoDiv}>

                    <img src={'/logo.png'} className={HeaderStyle.headerLogo} />

                </div>

                <nav className={HeaderStyle.headerNav}>

                    <ul className={headerNavUlClasses}>

                        <li><a href="/">Home</a></li>
                        <li><a href="/curso/">Curso</a></li>
                        <li><a href="/elenco/">Elenco</a></li>

                    </ul>

                </nav>

            </div>

        </header>

    );

}
