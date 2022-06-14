import { useEffect } from 'react';

function ProblemList({ problems, setProblems, fetchProblems, }) {

    useEffect(() => {
        fetchProblems();
    }, [])

    return (
        <>
            <h1>Problem List...</h1>
            {problems.map(each => (
                <div>
                    <p><b>{each.boulder_name}</b></p>
                    <p>{each.problem_num} {each.problem}</p>
                    <p>V{each.grade}</p>
                    <p>stars: {each.stars}</p>
                    <p>{each.description}</p>
                    <p>fa: {each.fa}</p>
                </div>
            ))}
        </>
    )
}

export default ProblemList;