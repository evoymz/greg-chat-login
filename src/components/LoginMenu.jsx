import styles from './LoginMenu.module.css';
import { AppleLogo, FacebookLogo, GoogleLogo } from "@phosphor-icons/react";

export function LoginMenu() {
    return (
        <div id={styles.WelcomeDiv}>
            <div id={styles.TopContainerWelcome}>
                <h1>Bem Vindo</h1>
                <span>Por favor coloque seus dados</span>
                <input type="email" name="" id="" placeholder="Coloque seu email..." className={styles.wrapperInputs}/>
                <input type="button" value="Continue" id={styles.buttonContinue}/>
                <div id={styles.Or}>
                    <p>OU</p>
                </div>
            </div>
            <div id={styles.AutoLoginDiv}>
                <div className={styles.wrapperLogoGoogle}>
                    <GoogleLogo size={24} />
                </div>

                <input className={styles.wrapperAutoLogin} type="button" value="Continue com Google"  />
                
                <div className={styles.wrapperLogoFace}>
                    <FacebookLogo size={24} />
                </div>

                <input className={styles.wrapperAutoLogin} type="button" value="Continue com Facebook" />

                <div className={styles.wrapperLogoApple}>
                    <AppleLogo size={24} />
                </div>

                <input className={styles.wrapperAutoLogin} type="button"
                value="Continue com Apple"></input>


                <p>Não possui uma conta? <a href="">Cadastre-se</a></p>
            </div>

        </div>
    )
}