import './index.css'
import Business from './components/Business'
import FAQ from './components/FAQ'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import styles from './constants/style'
import When from './components/When'
import Partnership from './components/Partnership'
import Dynamic from './components/Dynamic'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {


  return (
    <>
      <div className="bg-primary w-full h-full overflow-hidden">
        <div className={`${styles.flexCenter}`}>
          <div className={`${styles.boxWidth} ${styles.paddingX} `}>
            <Navbar />
          </div>
        </div>
        <div className={`${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Hero />
          </div>
        </div>


        <div className={`${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <CTA />
            <Business />
            <Partnership />
            <Dynamic />
            <When />
            <FAQ />
            <Footer />
          </div>
        </div>
      </div>

    </>
  )
}

export default App
