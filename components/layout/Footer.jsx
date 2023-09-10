import GithubIcon from "@components/UI-Componets/SVGIcons/GithubIcon";
import Link from "next/link";
import styles from "@styles/footer.module.css";
import FacebookIcon from "@components/UI-Componets/SVGIcons/FacebookIcon";
import StackOverflowIcon from "@components/UI-Componets/SVGIcons/StackOverflowIcon";
import LinkedinIcon from "@components/UI-Componets/SVGIcons/LinkedinIcon";
const Footer = ({ tagline }) => {
  return (
    <footer className="bg-uiDark py-10  text-white">
      <div className="max-container">
        <p className="text-center">{tagline}</p>
        <div className="flex justify-center gap-3 mt-8">
          <Link
            target="_blank"
            href="https://www.facebook.com/juud.ik"
            className={styles.socialLink}
          >
            <FacebookIcon size="36" />
          </Link>
          <Link
            target="_blank"
            href="https://stackoverflow.com/users/10671168/jude-okagu"
            className={styles.socialLink}
          >
            <StackOverflowIcon size="36" />
          </Link>
          <Link
            target="_blank"
            href="https://github.com/jdhova"
            className={styles.socialLink}
          >
            <GithubIcon size="36" />
          </Link>
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/jude-okagu-6142b913b/"
            className={styles.socialLink}
          >
            <LinkedinIcon size="36" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
