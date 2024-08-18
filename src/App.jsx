import styles from "./style";
import { Navbar, About, Activities, Contact, Home, Projects, Resume, WorkExperience, Footer } from "./components";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
  <div className={`${styles.paddingX} ${styles.flexCenter}`}>
    <div className={`${styles.boxWidth}`}>
      <Navbar />
    </div>
  </div>
  <div className={`bg-primary w-full ${styles.flexStart}`}>
    <div className={`${styles.boxWidth}`}>
      <Home />
    </div>
  </div>
  <div className={`bg-primary w-full ${styles.flexStart}`}>
    <div className={`${styles.boxWidth}`}>
      <About />
    </div>
  </div>
  <div className={`bg-primary w-full ${styles.flexStart}`}>
    <div className={`${styles.boxWidth}`}>
      <Projects />
    </div>
  </div>
  <div className={`bg-primary w-full ${styles.flexStart}`}>
    <div className={`${styles.boxWidth}`}>
      <WorkExperience />
    </div>
  </div>
  <div className={`bg-primary w-full ${styles.flexStart}`}>
    <div className={`${styles.boxWidth}`}>
      <Activities />
    </div>
  </div>
  <div className={`bg-primary w-full ${styles.flexStart}`}>
    <div className={`${styles.boxWidth}`}>
      <Resume />
    </div>
  </div>
  <div className={`bg-primary w-full ${styles.flexStart}`}>
    <div className={`${styles.boxWidth}`}>
      <Contact />
    </div>
  </div>
  <div>
    <div>
      <Footer />
    </div>
  </div>
</div>
);

export default App
