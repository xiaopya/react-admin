import React from 'react';
import styles from './style.less';
import useTypewriter from 'react-typewriter-hook';

interface IAppProps {}

const Banner_Parallax: React.FunctionComponent<IAppProps> = (props) => {
  const talk = useTypewriter('Miànxiàng xīngkōng biānchéng🎉...');
  return (
    <div className={styles.wrap_css_doodle}>
      <div className={styles.svg_block}>
        <svg viewBox="0 0 141.9 203.6">
          <path
            className={styles.a}
            d="M146.5,100.4s-3.6,71.6,43.2,91.5C189.7,191.9,209.5,119.5,146.5,100.4Z"
            transform="translate(-118 -95.9)"
          />
          <path
            className={styles.b}
            d="M163.3,187.2s-43.4-1.5-44.5-14.8S158.5,165.8,163.3,187.2Z"
            transform="translate(-118 -95.9)"
          />
          <path
            className={styles.a}
            d="M208.4,222.3s28.8-37.5,46.3-25.4a7.4,7.4,0,0,1-.3,12.5c-2.8,1.7-9,3.1-16.2,3.6Z"
            transform="translate(-118 -95.9)"
          />
          <path
            className={styles.a}
            d="M185.5,246l-33.8-9a10.5,10.5,0,0,1-8.1-11.4c.6-4.5,4.2-8.2,15.9-5.4a6,6,0,0,1,1.9.6c4.4,1.9,22.7,10.6,24.1,25.2"
            transform="translate(-118 -95.9)"
          />
          <path
            className={styles.b}
            d="M242.6,130.6s-44.5,7.7-40.2,66.5C202.4,197.1,241.9,183.4,242.6,130.6Z"
            transform="translate(-118 -95.9)"
          />
          <path
            className={styles.c}
            d="M195.1,281.3s1.7-76,5.2-81.3c4.8-7.1-11.4-57.8,39.9-72.1,0,0-.9,45.7-39.2,72.5"
            transform="translate(-118 -95.9)"
          />
          <path
            className={styles.c}
            d="M191.8,274.6s1.7-40.2-15.7-69.2c-4.4-7.2-6.4-10.5-9.5-13.3a28.6,28.6,0,0,0-15.4-7.2c-11.6-1.8-34.3-6.4-32.6-14.8,0,0,30.3-21.4,57.5,35.3"
            transform="translate(-118 -95.9)"
          />
          <path
            className={styles.c}
            d="M189,195.1a4.1,4.1,0,0,0-1.7-2.6c-42.1-35.7-29.1-95.8-29.1-95.8,59.3,30.7,30.8,98.4,30.8,98.4,6.4,24.1,4.1,82.7,4.1,82.7"
            transform="translate(-118 -95.9)"
          />
          <path
            className={styles.c}
            d="M199.6,271.3s-2-69.1,47.4-77.3a11.1,11.1,0,0,1,10.7,3.9c2,2.8,2.9,6.7-1.1,11.8A11.8,11.8,0,0,1,247,214c-9.4-.3-30,.4-38.5,11.7"
            transform="translate(-118 -95.9)"
          />
          <path
            className={styles.c}
            d="M197.9,292.6s1.9-69.1-44.6-77.3a9.8,9.8,0,0,0-10,3.9c-2,2.7-2.8,6.7.9,11.7a11,11,0,0,0,9.1,4.4c8.9-.4,28.3.4,36.2,11.7"
            transform="translate(-118 -95.9)"
          />
          <path
            className={styles.c}
            d="M213.6,169.3s-6.1,9.9-10.4,25.9"
            transform="translate(-118 -95.9)"
          />
          <path
            className={styles.c}
            d="M163.3,226.6s13.7,2.9,18,11"
            transform="translate(-118 -95.9)"
          />
          <polygon
            className={styles.d}
            points="51.4 165.7 104.7 165.7 104.7 172.7 101 172.7 95.5 197.9 91.9 197.9 91.9 203.6 64.3 203.6 64.3 198.2 60.1 198.2 53.7 170.3 50.8 170.3 50.8 165.7 51.4 165.7"
          />
        </svg>
      </div>
      {/* 打字效果 */}
      <span className={styles.span_writer}>{talk}</span>
    </div>
  );
};

export default Banner_Parallax;
