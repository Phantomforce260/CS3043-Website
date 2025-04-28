export function NameTag() {
    return(
        <div>
            <style>{`
                .tag {
                    margin-bottom: 2rem;
                    padding: 1rem 7.5rem 11rem;
                    border-radius: 30px;
                    font-size: 2rem;
                    color: #fff;
                    background: #f8012d;
                    text-align: center;
                    font-family: "Lato", sans-serif;
                    box-shadow: 0 1px 15px -7.5px #000000;
                    /* position relative for the pseudo element(s) */
                    position: relative;

                    width: 15vw;
                }
                .tag strong {
                    text-transform: uppercase;
                    font-size: 3.5rem;
                }
                .tag:before {
                    content: "";
                    position: absolute;
                    top: 9rem;
                    left: 2%;
                    width: 96%;
                    height: 9rem;
                    background: #fff;
                    /* border-radius mathing the .tag container */
                    border-radius: 0 0 30px 30px;
                }
                .tag:after {
                    content: "Peter Parker";
                    position: absolute;
                    top: 11.25rem;
                    left: 0;
                    width: 100%;
                    text-align: center;
                    font-family: "Rock Salt", cursive;
                    font-size: 2rem;
                    letter-spacing: 0.25rem;
                    font-weight: 300;
                    font-weight: bold;
                    color: #000;
                }
            `}</style>

            <div className="tag">
                <strong>Hello</strong>
                <br />
                my name is
            </div>
        </div>
    );
}