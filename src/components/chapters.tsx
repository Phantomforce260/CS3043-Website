import { Collapse, SegmentedControl, Flex } from '@mantine/core'
import { useState } from 'react'

export function Chapters() {

    const [chapter, setChapter] = useState('ch3')

    return(
        <section>
            <h1 className="bubble dark-blue">An Analysis Through Each Chapter</h1>
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
                    <Flex direction={'row'}>
                        <Flex direction="column" align={'center'} w={"50%"}>
                        <p className={'bubble-text'}>Networked communications play a large role in the movie, seen in the multiversal computer system utilized by Miguel in the movie, the holographic artificial intelligence Lyla, and the multiversal watch. </p>
                        <p className={'bubble-text'}>As well as the specific technologies, Nueva York itself somewhat represents a networked communication in how it acts as a place spider people from many different universes can access and have a form of connection.</p>
                        </Flex>
                        <Flex direction="column" align={'center'} w={"50%"}>
                            <h3>MULTIVERSAL COMPUTERS: </h3>
                            <p className={'bubble-text'}>The computer system used by Miguel and his team can predict when certain canon events in a spider-person's timeline occur and is able to alert when these events are expected to occur, which we saw in  Pavitr Prabhakar’s universe when the building almost killed Pavitr’s relative. The technology's ability to connect across different multiverses to alert on when canon events is an example of its ability to function as a communication device. </p>
                        </Flex>
                    </Flex>
                </Collapse>

            </div>


        </section>
    );
}