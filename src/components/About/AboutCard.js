import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Manuel Hosseini </span>
            from <span className="purple"> Bologna, Italy.</span>
            <br /> I am the founder of San Liuk.
            <br />

            <br />
            I am currently working as a software developer and motion designer.
            <br />
            San Liuk was born in 2017 when I was studying chemical engineering.
            Much like every notable inception, <span className="purple">San Liuk Animation and Multimedia Studio</span> was born of a jest. The moniker "San Liuk" is a playful transliteration of "<span className="purple">Saint Luke</span>," a name deeply rooted in the sanctuary nestled in the hills of Bologna. This sanctuary is not just a place; it represents a journey beneath the arches, traveled by many after achieving a significant milestone, before undertaking a daunting challenge, or as a spiritual and symbolic pilgrimage. For some, it's a superstitious act; for others, a form of atonement. For the sports enthusiasts and health-conscious, it is a path to wellness, but universally, it is an ascent towards something greater.<br /><br />
            The legend has it that my gaze was always upward, and indeed, for many years I traversed this path two to three times a week. I raced against fellow runners, engaged in conversations along the way, and most importantly, I embarked on a journey of self-discovery in solitude.<br /><br />
            This is how it all began. Everyone knew of my affection for this place and started referring to me as "San Liuk." Eventually, "going to San Liuk" became the vernacular for engaging in sports, staying active, reconvening with friends, or simply doing something invigorating: "When shall we have our San Liuk?"<br /><br />
            One day, I made a video where I journeyed to San Liuk, the entire course, juggling a ball on my finger for the full 20-minute span. The video went viral in no time.<br /><br />
            At that period, I was experimenting with my first animations, and my inaugural creation featured a duck. I had predestined it to bear the name San Liuk. This animated duck mimicked my own endeavors; it walked, played, ran, and made its way toward the <span className="purple">San Luca</span> church with a basketball, spinning it while in stride - a digital homage to my real-life ritual.<br /><br />
            As San Liuk studio stands today, it embodies the spirit of that path – a commitment to continuous movement, innovation, and the journey of storytelling. We weave narratives not just to entertain, but to encourage others to find their own paths, to explore, and to ascend. Every frame we craft, every story we animate, pulses with the heart of a journey, a testament to the ethos of "San Liuk" – to always reach higher, push further, and to share the vibrant tapestry of human experience through the universal language of animation.

          </p>


          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive not only to ascend in life but to lift the spirit of innovation in each stride!"{" "}
          </p>
          <footer className="blockquote-footer">Manuel Hosseini</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
