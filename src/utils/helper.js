export function formatPoll(poll, author, authedUser) {
    const { id, optionOne, optionTwo, timestamp } = poll;
    const { name, avatarURL } = author;

    const optionOneTotalVotes = poll.optionOne.votes.length;
    const optionTwoTotalVotes = poll.optionTwo.votes.length;
    const toatlVotes = optionOneTotalVotes + optionTwoTotalVotes;

    return {
        id,
        optionOne,
        optionTwo,
        timestamp,
        name,
        avatarURL,
        hasVoted1: optionOne.votes.includes(authedUser),
        hasVoted2: optionTwo.votes.includes(authedUser),
        percentVotes1: (optionOneTotalVotes/toatlVotes *100).toFixed(0),
        percentVotes2: (optionTwoTotalVotes/toatlVotes *100).toFixed(0)
    }
}

export function formatLeader( author, rank, authedUser ) {
    const { name, avatarURL, answers, questions } = author;

    return {
        name,
        avatarURL,
        rank,
        answeredQuestions : Object.keys(answers).length,
        createdQuestions: questions.length,
        authedUser,
    }
}