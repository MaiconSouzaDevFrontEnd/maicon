import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return(
    <main className={styles.main}>
      <h1 className={styles.title}>
        Maicon Souza - Desenvolvedor Front-end
      </h1>

      <section className={styles.galery}>
        <h2 className={styles.subtitle}>Certificados</h2>

        <div className={styles.imageContainer}>

          <h3 className={styles.subtitle}>Certificado de conclusão do curso Tecnologia da Informação</h3>
          <figure className={styles.figure}>
            <Image
              src="/certificados/CertTiMicroCampFront.tiff"
              alt="Certificado TI MicroCamp frente"
              height={222}
              width={300}
            />
          
            <Image
              src="/certificados/CertTiMicroCampBack.tiff"
              alt="Certificado TI MicroCamp verso"
              height={220}
              width={300}
            />
          </figure>
        </div>

        <div className={styles.imageContainer}>

          <h3 className={styles.subtitle}>Certificado de conclusão do curso de Manutenção de Computadores</h3> 
          <figure className={styles.figure}>
            <Image
              src="/certificados/CertRemington.tiff"
              alt="Certificado Remington"
              height={212}
              width={300}
            />
          </figure>
        </div>

        <div className={styles.imageContainer}>

          <h3 className={styles.subtitle}>Certificado de conclusão do curso de Eletrônica Analógica</h3>
          <figure className={styles.figure}>
            <Image
              src="/certificados/CertEletrAnalogSenaiFront.tiff"
              alt="Certificado Eletrônica Analógica frente"
              height={426}
              width={300}
            />
          
            <Image
              src="/certificados/CertEletrAnalogSenaiBack.tiff"
              alt="Certificado Eletrônica Analógica verso"
              height={467}
              width={300}
            />
          </figure>
        </div>
      </section>
    </main>  
  )};
