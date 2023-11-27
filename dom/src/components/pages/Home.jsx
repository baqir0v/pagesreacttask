import { useState } from "react"
import "./pages.scss"

function Home() {
  const [img1, setImg1] = useState("https://149842022.v2.pressablecdn.com/dazzling/wp-content/uploads/sites/54/2013/01/homev_updated1_02.jpg")
  const [img2, setImg2] = useState("https://149842022.v2.pressablecdn.com/dazzling/wp-content/uploads/sites/54/2013/01/slide03.jpg")
  const [img3, setImg3] = useState("https://149842022.v2.pressablecdn.com/dazzling/wp-content/uploads/sites/54/2013/01/slide02.jpg")
  const [currentImg, setCurrentImg] = useState(img1)
  function handleImgChange(img) {
    setCurrentImg(img)
  }
  return (
    <section id="home" style={{ backgroundImage: `url(${currentImg})`, backgroundSize: 'cover' }}>
      <div className="btns">
        <button onClick={()=>handleImgChange(img1)}></button>
        <button onClick={()=>handleImgChange(img2)}></button>
        <button onClick={()=>handleImgChange(img3)}></button>
      </div>
    </section>
  )
}

export default Home