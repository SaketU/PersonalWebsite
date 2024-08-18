import styles from "../style";
import utprofilepic from "../assets/utprofilepic.png";

const About = () => {
  return (
    <section
      id="about"
      className={`flex md:flex-row flex-col ${styles.paddingY} relative overflow-hidden`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 ml-20`}
      >
        <div className="flex flex-row justify-between items-center w-full">
          <h1
            className="flex-1 font-poppins font-semibold ss:text-[72px] text-[40px] text-white ss:leading-[100.8px] leading-[50px]"
          >
            <span className="text-gradient">About Me</span>{" "}
          </h1>
        </div>

        <p
          className={`${styles.paragraph} max-w-[470px] mt-5 text-white text-[14px] sm:text-[16px]`}
        >
          I am currently a Computer Science student at the University of Texas
          at Austin. My interests include robotics, machine learning,
          artificial intelligence, and web development.
        </p>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img
          src={utprofilepic}
          alt="profile"
          className="w-[30%] sm:w-[30%] md:w-[40%] lg:w-[45%] xl:w-[25%] h-auto relative z-[5] rounded-full"
        />
        <div className="absolute z-[0] w-[30%] h-[50%] pink__gradient rounded-full" />
        <div className="absolute z-[1] w-[40%] h-[40%] left-[30%] top-[30%] white__gradient rounded-full" />
        <div className="absolute z-[0] w-[70%] h-[70%] blue__gradient rounded-full" />
      </div>
    </section>
  );
};

export default About;
