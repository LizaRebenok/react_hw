import { useState } from 'react';

const EmojiVoting = () => {

    const [votes, voteCount] = useState({
        '😀': 0,
        '😍': 0,
        '😢': 0,
    });


    const [winner, setWinner] = useState(null);


    const handleVote = (emoji) => {
        voteCount((prevVotes) => ({
            ...prevVotes,
            [emoji]: prevVotes[emoji] + 1
        }));
    };


    const showResults = () => {
        let maxVotes = 0;
        let winEmoji = '';

        for (let emoji in votes) {
            if (votes[emoji] > maxVotes) {
                maxVotes = votes[emoji];
                winEmoji = emoji;
            }
        }

        setWinner(winEmoji);
    };

    return (
        <div className="container">
            <h1> Голосування за смайлики</h1>

            <div className="wrapper-emoji-voting">
                <button className="emoji" onClick={() => handleVote('😀')}>
                    😀
                </button>
                <span> {votes['😀']} votes</span>

                <button className="emoji" onClick={() => handleVote('😍')} >
                    😍
                </button>
                <span> {votes['😍']} votes</span>

                <button className="emoji" onClick={() => handleVote('😢')} >
                    😢
                </button>
                <span> {votes['😢']} votes</span>
            </div>


            <button onClick={showResults} className="btn-results">Show Results</button>

            {winner ? (
                <div>
                    <h2>Переможець: {winner}</h2>
                </div>
            ) : null}
        </div>
    );
};

export default EmojiVoting;
