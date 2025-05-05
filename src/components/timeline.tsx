import {Timeline} from "@mantine/core";
import { useState } from "react";

export function TimeLine() {

    const [active, setActive] = useState(0);

    return(
        <section>
            <h1 className="bubble pink">Plot Timeline of Computing Related Events</h1>

            <Timeline lineWidth={6} active={10} bulletSize={30} color={"#fd09bc"} style={{width: '60%', height: '60%'}} onMouseLeave={() => setActive(-1)}>
                <Timeline.Item onMouseEnter={() => setActive(0)}>
                    <h3 className="title big">Spider-Man: Into The Spider-Verse</h3>
                    <div className="body">
                        <p>The prequel to Spiderman: Across the Spider-verse establishes Miles and Gwen as the main characters, as well as the creation of the main antagonist for the next movie. </p>
                    </div>
                </Timeline.Item>

                <Timeline.Item onMouseEnter={() => setActive(1)}>
                    <h3 className="title">Kingpin creates the collider to open the multiverse (prequel) </h3>
                    <div className="body">
                        <p>The antagonist of Spider-Man: Into the Spider-Verse, Kingpin funds a project that created a particle collider, opening the multiverse and in some cases causing leakage between different universes. </p>
                    </div>
                </Timeline.Item>

                <Timeline.Item onMouseEnter={() => setActive(2)}>
                    <h3 className="title">A spider is brought through that gives Miles his powers (prequel)</h3>
                    <div className="body">
                        <p>This spider bites Miles, giving him his spiderman powers. Along with it are other spider-people from different universes, who work with Miles to stop the collider from causing further damage. </p>
                    </div>
                </Timeline.Item>

                <Timeline.Item onMouseEnter={() => setActive(3)}>
                      <h3 className="title">Collider destroyed and “Spot” created </h3>
                      <div className="body">
                          <p>Spot, the main antagonist is a scientist recreated after the destruction of the collider. He absorbs the matter created by the collider exploding and himself gains powers to travel through the multiverse. </p>
                      </div>
                </Timeline.Item>

                <Timeline.Item onMouseEnter={() => setActive(4)}>
                      <h3 className="title big">Multiverse-crossing technology is used</h3>
                      <div className="body">
                          <p>Other spider people have formed an alliance to protect the multiverse, they jump between different universes, using multiverse watches to open portals, communicate between universes, and stay stable in universes other than their own. They work together to stop incursions with beings from other universes. </p>
                      </div>
                </Timeline.Item>

                <Timeline.Item onMouseEnter={() => setActive(5)}>
                      <h3 className="title">Spot triggers different colliders </h3>
                      <div className="body">
                          <p>Throughout the movie, Spot continues to travel between universes, consuming more and more matter created by different particle colliders. As he moves through the multiverse, he continues to open holes, damaging the universes that now connect with each other. </p>
                      </div>
                </Timeline.Item>

                <Timeline.Item onMouseEnter={() => setActive(6)}>
                    <h3 className="title">Canon events and the prediction algorithm </h3>
                    <div className="body">
                        <p>Miles is brought to Nueva York, the headquarters of the spider-people, there he learns why the spider people enforce a ban on travelling between the multiverses. There is an algorithm that predicts where a canon event will happen, an event that if does not come to pass, the specific universe will shred. To prevent interference with the spider people must allow some people close to them to die for the greater good. </p>
                    </div>
                </Timeline.Item>

                <Timeline.Item onMouseEnter={() => setActive(7)}>
                    <h3 className="title">DNA Analyzer robot can send villains back to their dimensions </h3>
                    <div className="body">
                        <p>This applies to any organic matter or creatures, scanning their DNA to find what universe they are from and opening a portal to send them to their correct universe. Treated as a flawless machine, it is revealed at the end of the movie that Miles was teleported to the wrong universe.   </p>
                    </div>
                </Timeline.Item>

            </Timeline>
        </section>
    );
}
