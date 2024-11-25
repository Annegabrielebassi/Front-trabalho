import styles from "./sobre.module.css"

export default function sobre() {
    return (
        <main className={styles.main}>
            <h1 className={styles.h1}>Sobre</h1>
            <p className={styles.Titulo}>Conheça os personagens principais da Sanrio</p>
            
            <section className={styles.personagem}>
                <h2 className={styles.h2}>Hello Kitty</h2>
                <p className={styles.paragrafo}>
                    Hello Kitty é uma gatinha branca com um laço vermelho na orelha esquerda. Ela é uma das personagens mais icônicas da Sanrio e é conhecida por sua personalidade amigável e amorosa. Hello Kitty adora fazer novos amigos e viver aventuras.
                </p>
            </section>

            <section className={styles.personagem}>
                <h2 className={styles.h2}>My Melody</h2>
                <p className={styles.paragrafo}>
                    My Melody é uma coelhinha branca que usa um capuz vermelho ou rosa. Ela é doce e gentil, sempre pronta para ajudar seus amigos. My Melody adora assar bolos e passar tempo com sua família e amigos.
                </p>
            </section>

            <section className={styles.personagem}>
                <h2 className={styles.h2}>Cinnamoroll</h2>
                <p className={styles.paragrafo}>
                    Cinnamoroll é um cachorrinho branco com orelhas longas e encaracoladas. Ele pode voar usando suas orelhas como asas. Cinnamoroll é curioso e adora explorar novos lugares, sempre em busca de novas aventuras.
                </p>
            </section>
        </main>
    )
}
