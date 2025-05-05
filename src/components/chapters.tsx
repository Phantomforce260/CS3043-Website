import {Collapse, SegmentedControl, Flex, Box} from '@mantine/core'
import { useState } from 'react'

export function Chapters() {

    const [chapter, setChapter] = useState('ch3')

    return(
        <section>
            <h1 className="bubble dark-blue">An Analysis Through Each Chapter</h1>
            <Box w={'70%'}>
            <div className="bubble dark-blue">
                <SegmentedControl
                    radius='l'
                    color={'#0105b4'}
                    data={['ch3', 'ch4', 'ch5', 'ch6', 'ch7', 'ch8', 'ch10']}
                    transitionDuration={300}
                    transitionTimingFunction={'linear'}
                    onChange={setChapter}
                    styles={{innerLabel: {
                        fontSize: '16px',
                            fontWeight: 'bold',
                            fontFamily: 'adamwarrenpro',
                            }}}
                >
                </SegmentedControl>
                <Collapse in={chapter == 'ch3'} transitionDuration={300} transitionTimingFunction={'linear'}>
                    <h2>Chapter 3: Networked Communications</h2>
                    <Flex direction={'row'} align={'center'}>
                        <Flex direction="column" align={'flex-start'}>
                        <p className={'bubble-text'}>Networked communications play a large role in the movie, seen in the multiversal computer system utilized by Miguel in the movie, the holographic artificial intelligence Lyla, and the multiversal watch. </p>
                            <p className={'bubble-text'}>As well as the specific technologies, Nueva York itself somewhat represents a networked communication in how it acts as a place spider people from many different universes can access and have a form of connection.</p>
                            <br />
                            <h3>-MULTIVERSAL COMPUTERS: </h3>
                            <p className={'bubble-text'}>The computer system used by Miguel and his team can predict when certain canon events in a spider-person's timeline occur and is able to alert when these events are expected to occur, which we saw in  Pavitr Prabhakar’s universe when the building almost killed Pavitr’s relative. The technology's ability to connect across different multiverses to alert on when canon events is an example of its ability to function as a communication device. </p>
                            <br />
                        </Flex>
                        <Flex direction="column" align={'flex-start'}>
                            <h3>-MULTIVERSAL WATCH: </h3>
                            <p className={'bubble-text'}>The group of Spider people follow Miguel O’Hara and listen to his experience and use his technology as a guide on how to protect people throughout the multiverse. The watch is used as a tool to do so and help the different Spider people communicate, providing a massive asset to their operations. </p>
                            <br />
                            <h3>-LYLA: </h3>
                            <p className={'bubble-text'}>Lyla is an advanced artificial intelligence hologram utilized by Miguel. It is seen in the film as able to contact other members of Miguel’s team whenever he needs assistance, which was seen when he was struggling to defeat the Vulture at the beginning of the movie. </p>
                        </Flex>
                    </Flex>
                </Collapse>
                <Collapse in={chapter == 'ch4'} transitionDuration={300} transitionTimingFunction={'linear'}>
                    <h2>Chapter 4: Intellectual Property</h2>
                    <Flex direction={'row'} align={'center'}>
                        <Flex direction="column" align={'flex-start'}>
                            <p className={'bubble-text'}>Intellectual property has a minor theme in the film, relating to Hobie’s prototype multiversal watch which he gave away to Gwen.  </p>
                            <p className={'bubble-text'}>As part of Miguel’s team to prevent the collapse of the multiverse, each person was given a multiverse-travelling watch that allowed them to cross into other universes without glitching, which Hobie, one of the spidermen on the team, created his own version of. When Gwen was kicked off of the team after Miles was able to escape Nueva York, Miguel took her watch, and she was sent back to her world using the DNA analyzing teleporter. Afterwards, Hobie gave his prototype watch to Gwen, so she could travel across the multiverse to help find Miles. Hobie’s personality in the film is very contrarian, especially when it comes to following rules, which we see in how he quit Miguel’s team once Miles tried to escape instead of helping them catch him. </p>
                            <p className={'bubble-text'}>This topic relates to intellectual property in accessing if Hobie was in the right to give away his technology, which was very similar to what was used by Miguel. While he was the one who created the watch he gave to Gwen, it was heavily based on the one which Miguel had given him. According to Cornell Law, reverse engineering something is generally not considered to be a crime, and because it does not appear that this technology has any kind of patents in the film, Hobie’s decision to reverse engineer the multiversal teleportation watch is legal [5]. </p>
                        </Flex>
                    </Flex>
                </Collapse>
                <Collapse in={chapter == 'ch5'} transitionDuration={300} transitionTimingFunction={'linear'}>
                    <h2>Chapter 5: Information Privacy</h2>
                    <Flex direction={'row'}>
                        <Flex direction="column" align={'flex-start'}>
                            <p className={'bubble-text'}>Information privacy is a topic that can be connected to the way Miguel O’Hara is using technology to try and patrol the multiverse. The large surveillance structure that is used by Miguel seems to be limitless and raises safety concerns as the technology seems to lack any restrictions or checks on its usage.  </p>
                            <p className={'bubble-text'}>The existence of this technology is helpful to Miguel and his team for tracking these multiversal threats, but there is never clarity on if this surveillance is allowed by the governments of each of these worlds. While the technology appears to be used for good intentions, there is a reasonable concern of a loss of privacy for the citizens of each world who have no idea this surveillance is ongoing. An example to compare to can be the United States and the Privacy Act of 1974, which gives each US citizen the right to access whatever data may have been collected about them and gives them power to change certain aspects about it. [3] This large-scale surveillance presence does not seem to give any notice to the universes they are surveying, despite its good intentions. </p>
                        </Flex>
                    </Flex>
                </Collapse>
                <Collapse in={chapter == 'ch6'} transitionDuration={300} transitionTimingFunction={'linear'}>
                    <h2>Chapter 6: Privacy and the Government</h2>
                    <Flex direction={'row'}>
                        <Flex direction="column" align={'flex-start'}>
                            <p className={'bubble-text'}>Privacy and government play a role in the movie when discussing the morality of Miguel and his team regarding their use of technology to fight off anomalies across the multiverse. The use of their multiversal computer system and watches can be analyzed through ethical lenses. </p>
                            <p className={'bubble-text'}>When analyzing through the Act Utilitarianist perspective explained by the textbook, it can be argued that Miguel is doing the correct thing [4]. Going to other worlds to prevent a collapse would almost certainly lead to more happiness for all affected when compared to the alternative where the universe collapses and everyone within it perishes. The counter side of the argument however is this increased surveillance across the multiverse by an ungoverned force can be seen as something that could cause fear, or a lack of happiness, by those who live in these locations, especially if the universe is not at a high risk of an anomaly. </p>
                            <p className={'bubble-text'}>Kantianism is prevalent in how it avoids treating people to an end, and in that regard, Miguel’s use of the technology can be argued both ways [4]. On one hand, he is treating the well-being of the multiverse as the end goal, making sure a large-scale societal collapse is prevented by utilizing his advanced technology. On the other hand, it can be argued he is treating Miles Morales as a means to an end, wanting to keep him under control in Nueva York believing he will cause more problems due to him being the “original anomaly.” </p>
                            <p className={'bubble-text'}>Based on Miguel’s backstory, we know this computer system must have existed before it was utilized for detecting anomalies, as Miguel used the system to find a universe where another Miguel O’Hara had died so he could take his place, stepping in right when his counterpart was killed so nobody in the universe knew that it had occurred. This had disastrous consequences, as Miguel altering with the timeline of the universe caused it to collapse. This raises the question of whether this system needs proper oversight and surveillance to make sure it is used properly, as it appears Miguel has little to no checks on power with the system and its functionality. Given how Miguel made such a large mistake before the resulted in a multiversal collapse, it can be argued that greater oversight over what he is trying to accomplish is reasonable. </p>
                            <p className={'bubble-text'}>Another technology to consider for the topic is the multiversal watches used by Miguel’s team. The watch’s primary purpose is to help the users travel through the multiverse to protect the safety of different universes by containing the related anomalies. This technology does help the team of Spider people protect regular citizens but also creates a grey area in government structure formed by the spider people but not clearly shown as following any strict rules. </p>
                        </Flex>
                    </Flex>
                </Collapse>
                <Collapse in={chapter == 'ch7'} transitionDuration={300} transitionTimingFunction={'linear'}>
                    <h2>Chapter 7: Computer and Network Security</h2>
                    <Flex direction={'row'}>
                        <Flex direction="column" align={'flex-start'}>
                            <p className={'bubble-text'}>The topic of computer and network security plays a role in the film when Miles Morales activates the DNA analyzer machine using his invisibility powers to avoid being caught by Lyla and Spider-Byte. In the film, after managing to create separation from Miguel and the other spider-people trying to stop him, Miles goes into the control panel for the DNA analysis machine and starts it all on his own. This falls under security in how easily he was able to start up such a high-technology device on his own with no background at all. The lack of any identification system or key needed to activate the machine is a major misstep in terms of security. When comparing to the United States, government jobs have different levels of security clearances, ranging on different levels of what confidential information or jobs people have access to [6]. When applying this logic to the movie, there does not seem to be any kind of required clearance to be able to use the machine, given how Miles was able to easily turn it on and teleport to another universe. Had a safety net been built in, Miguel would have likely been able to prevent Miles’ escape from Nueva York. The issue with this lack of security also is notable in how Nueva York is an incredibly large city where all the spider-people can access; having such low security for such an important technology in a heavy-populated area is incredibly unsafe if someone used it for nefarious purposes. </p>
                        </Flex>
                    </Flex>
                </Collapse>
                <Collapse in={chapter == 'ch8'} transitionDuration={300} transitionTimingFunction={'linear'}>
                    <h2>Chapter 8: Computer Reliability</h2>
                    <Flex direction={'row'}>
                        <Flex direction="column" align={'flex-start'}>
                            <p className={'bubble-text'}>Computer reliability plays a role in the movie near the end when the multiversal teleportation machine sends Miles to the incorrect universe. The teleportation system was utilized in the movie to teleport anomalies back to their universes, as well as the spider-people given it’s specific tracking for the spider DNA when it is activated. This system has a fundamental flaw in how it appears to only have varied systems to detect the correct universes for those who are being analyzed. </p>
                            <p className={'bubble-text'}>To back up the claim that there must be two different DNA identification systems used, it is important to note how Miles was sent to the incorrect universe. Because Miles’ spider which bit him was transported from another universe, the analysis believed that the correct universe was the one which the spider came from, instead of the universe Miles is from. There must be another form of identification system put in place, since the anomalies that would be transported would not have this spider DNA; The spider people are identified by the DNA of the spider that bit them, while the anomalies seem to be identified by some other method, that is assumed to be reliable.  </p>
                            <p className={'bubble-text'}>A reasonable claim can be made this two-factor system differentiating between the spider-people and non-spider-people is pointless; if the machine is able to detect what universes each individual under analysis belongs to, what is the purpose of the Spider DNA analysis? If Miles had been analyzed with the same process as the non-spider-people, it is not unreasonable to think he would have been sent to his correct universe, preventing a preventable error. </p>
                            <p className={'bubble-text'}></p>
                        </Flex>
                    </Flex>
                </Collapse>
                <Collapse in={chapter == 'ch10'} transitionDuration={300} transitionTimingFunction={'linear'}>
                    <h2>Chapter 10: Automation and Globalization</h2>
                    <Flex direction={'row'}>
                        <Flex direction="column" align={'flex-start'}>
                            <p className={'bubble-text'}>Globalization plays a minor, but notable, role in the movie. The book describes globalization as something that results in greater services, goods, and capital around the world [4]. A parallel can be made between this idea of globalization and the mission that Miguel O’Hara and his team are trying to achieve. The main priority of Miguel’s team is to go to different universes and prevent collapses from anomalies from other worlds. A parallel could be made that Nueva York and this team are similar to globalization in some regard, as the spider-people from each different universe are able to collaborate with one another for the betterment of each one’s world. The topic of automation does not play a large role in the movie. While one of the characters, Lyla, is meant to be an artificial intelligence hologram, there is not much else relating to the artificial intelligence besides that and it does not play an integral role in the story or narrative. </p>
                        </Flex>
                    </Flex>
                </Collapse>
            </div>
            </Box>

        </section>
    );
}