import styled from 'styled-components';

// Taken from https://uiverse.io/Cybercom682/kind-newt-73 -------------------------------------------------------------------------------------------- */

const ComicButton = ({displayText, clickFunction}: {displayText: string, clickFunction: () => void}) => {
    return (
        <StyledWrapper>
            <button className="button" onClick={clickFunction}>
                {displayText}
            </button>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
    .button {
        border: 0;
        padding: 1rem;
        margin: 0.25rem;
        background-color: orange;
        font-family: adamwarrenpro;
        font-size: large;
        color: black;
        position: relative;
    }

    .button:hover {
        background-color: orangered;
        cursor: pointer;
        transition: all 0.15s linear;
    }

    .button:hover::before {
        content: "";
        width: 100%;
        height: 100%;
        background-color: cadetblue;
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;
        animation: swingLeft 0.2s ease-in forwards;
    }

    .button:hover::after {
        content: "";
        width: 100%;
        height: 100%;
        background-color: purple;
        position: absolute;
        z-index: -1;
        bottom: 0;
        right: 0;
        animation: swingRight 0.2s ease-in forwards;
    }

    @keyframes swingLeft {
        0% {
            top: 0;
            left: 0;
        }

        100% {
            top: 5px;
            left: 5px;
        }
    }

    @keyframes swingRight {
        0% {
            bottom: 0;
            right: 0;
        }

        100% {
            bottom: 5px;
            right: 5px;
        }
    }`;

export default ComicButton;
