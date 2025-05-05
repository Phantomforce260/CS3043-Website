import {Timeline} from "@mantine/core";

export function GroupWork() {
    return(
        <section>
            <h1 className="bubble blue">Our Group Work</h1>

            <Timeline lineWidth={6} active={10} bulletSize={30} color={"#5bcab1"} style={{width: '40%', height: '60%'}}>
                    <Timeline.Item>
                        <h3 className="title big">4/3/2025</h3>
                        <div className="body">
                            <p>Group Chat Created</p>
                        </div>
                    </Timeline.Item>

                <Timeline.Item>
                        <h3 className="title">4/13/2025</h3>
                        <div className="body">
                            <p>Watched the Movie as a Group</p>
                        </div>
                </Timeline.Item>

                <Timeline.Item>
                        <h3 className="title">4/14/2025</h3>
                        <div className="body">
                            <p>Website Published</p>
                        </div>
                </Timeline.Item>

                <Timeline.Item>
                        <h3 className="title">4/28/2025</h3>
                        <div className="body">
                            <p>Website Style Finalized</p>
                        </div>
                </Timeline.Item>

                <Timeline.Item>
                    <h3 className="title">5/3/2025</h3>
                    <div className="body">
                        <p>Group Meeting to work on slideshow arguments and website content </p>
                    </div>
                </Timeline.Item>

                <Timeline.Item>
                    <h3 className="title">5/5/2025</h3>
                    <div className="body">
                        <p>Finalize slideshow, discuss who is presenting on what topics</p>
                    </div>
                </Timeline.Item>

                <Timeline.Item>
                        <h3 className="title">Work In Progress</h3>
                        <div className="body">
                            <p>Website Content and Slideshow Finalized</p>
                        </div>
                </Timeline.Item>

                <Timeline.Item>
                        <h3 className="title big">5/7/2025</h3>
                        <div className="body">
                            <p>Presentation Day</p>
                        </div>
                </Timeline.Item>
            </Timeline>
        </section>
    );
}