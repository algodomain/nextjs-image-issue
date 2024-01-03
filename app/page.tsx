import Image from "next/image"
import styles from "./page.module.css"

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="column-container">
        <div className="column">
          <div>Case 1: This image will be missing at .next/static/media</div>
          <Image
            src="/img/test-img.png"
            alt="test image"
            width={200}
            height={200}
          />
        </div>

        <div className="column">
          <div>Case 2: This image is Not loading (using inline style)</div>
          <div style={{ backgroundImage: "url(/img/test-img1.png)" }}></div>
        </div>

        <div className="column">
          <div>
            Case 3: This image will load but will NOT be Available at
            .next/static/media
          </div>
          <div className="sample-img2"></div>
        </div>

        <div className="column">
          <div>
            Case 4: This image will load and also will be Available at
            .next/static/media
          </div>
          <div className="sample-img3"></div>
        </div>
      </div>
    </main>
  )
}
