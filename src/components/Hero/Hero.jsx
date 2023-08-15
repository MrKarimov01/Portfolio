import "./Hero.scss";
import { useInView } from "react-intersection-observer";

function Hero() {
  const { ref: cube, inView: element1 } = useInView();
  const { ref: text, inView: element2 } = useInView();
  const { ref: button, inView: element3 } = useInView();
  return (
    <div className="hero">
      <h1
        className={element2 ? "hero__text_h1 title_view" : "hero__text_h1"}
        ref={text}
      >
        Lorem ipsum dolor sit amet
      </h1>
      <p
        className={element2 ? "hero__text_p title_view" : "hero__text_h1"}
        ref={text}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.{" "}
      </p>
      <button className={element3 ? "button_view" : ""} ref={button}>
        Let’s begin
      </button>
      <div className={element1 ? "cube cube_view" : "cube"} ref={cube}>
        <div className="cube1">
          <div className="cube1_1"></div>
          <div className="cube1_2"></div>
          <div className="cube1_3"></div>
          <div className="cube1_4"></div>
        </div>
        <div className="cube2">
          <div className="cube2_1"></div>
          <div className="cube2_2"></div>
          <div className="cube2_3"></div>
        </div>
        <div className="cube1">
          <div className="cube1_1"></div>
          <div className="cube1_2"></div>
          <div className="cube1_3"></div>
          <div className="cube1_4"></div>
        </div>
        <div className="cube2">
          <div className="cube2_1"></div>
          <div className="cube2_2"></div>
          <div className="cube2_3"></div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
