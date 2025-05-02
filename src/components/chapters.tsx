export function Chapters() {

    const setChapterContent = (chapter: string) => {
        const contentSection = document.getElementById('context');
        switch (chapter) {
            case "ch1":
                contentSection!.innerHTML =
                    '<p className={"bubble-text"}>Networked communications play a large role in the movie, seen in the multiversal computer system utilized by Miguel in the movie, the holographic artificial intelligence Lyla, and the technology used by Miguel’s team to talk to each other across universes, and the multiversal watch. </p>'
                break;
            case "ch2":
                contentSection!.innerHTML = 'content'
                break;
        }
    }

    return(
        <section>
            <h1 className="bubble dark-blue">An Analysis Through Each Chapter</h1>
            <div className="bubble dark-blue">
                <select name={"Chapters"} onChange={(event) => setChapterContent(event.target.value)}>
                    <option value={"ch1"}>Chapter 1</option>
                    <option value={"ch2"}>Chapter 2</option>
                </select>
                <div id={"context"}></div>
            </div>


        </section>
    );
}