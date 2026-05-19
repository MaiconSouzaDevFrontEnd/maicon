import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return(
    <main className={styles.main}>
      <h1 className={styles.title}>
        Maicon Souza - Desenvolvedor Front-end
      </h1>

      <section className={styles.galery}>
        <div className={styles.imageContainer}>
          <h3 className={styles.subtitle}>Certificado de conclusão do curso Tecnologia da Informação</h3>
          <Image
          src="/certificados/CertTiMicroCampFront.tiff"
          alt="Description"
          height={300}
          width={300}
        />
        <Image
          src="/certificados/CertTiMicroCampBack.tiff"
          alt="Description"
          height={300}
          width={300}
        />
        </div>
        <div className={styles.imageContainer}>
          <h3 className={styles.subtitle}>Certificado de conclusão do curso de Manutenção de Computadores</h3> 
          <Image
          src="/certificados/CertRemington.tiff"
          alt="Description"
          height={300}
          width={300}
          />
        </div>
        <div className={styles.imageContainer}>
          <h3 className={styles.subtitle}>Certificado de conclusão do curso de Eletrônica Analógica</h3>
          <Image
            src="/certificados/CertEletrAnalogSenaiFront.tiff"
            alt="Description"
            height={300}
            width={300}
          />
          <Image
            src="/certificados/CertEletrAnalogSenaiBack.tiff"
            alt="Description"
            height={300}
            width={300}
          />
        </div>
      </section>
    </main>  
  )};
