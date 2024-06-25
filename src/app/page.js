import classes from "./page.module.css";
export default function Home() {
  return (
    <main className={classes.main}>
      {/* <div className={classes.grid}>
        <div className={classes.placeholders}></div>
        <div className={classes.placeholders}></div>
        <div className={classes.placeholders}></div>
      </div> */}

      {/* <div className={classes.grid__areas}>
        <div className={`${classes.placeholders} ${classes.columnOne}`}>
          One
        </div>
        <div className={`${classes.placeholders} ${classes.columnTwo}`}>
          Two
        </div>
        <div className={`${classes.placeholders} ${classes.columnThree}`}>
          Three
        </div>
      </div> */}
      {/* <div className={classes.grid__areas__dense}>
        <div className={classes.placeholders}>One</div>
        <div
          className={classes.placeholders}
          style={{ width: "200px", justifySelf: "end" }}
        >
          Two
        </div>
      </div> */}
      <div
        className={classes.psuedo__elements}
        style={{
          "--bgi": `linear-gradient(to right, red 0 ${50}%, blue ${50}% 100%)`,
        }}
      >
        <span className={classes.stepperOne}></span>
        <span className={classes.stepperTwo}></span>
        <span className={classes.stepperThree}></span>
      </div>
    </main>
  );
}
