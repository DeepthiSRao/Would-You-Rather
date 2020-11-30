export function formatPoll() {
    
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