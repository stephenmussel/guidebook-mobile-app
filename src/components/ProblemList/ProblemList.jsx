import ProblemItem from '../ProblemItem/ProblemItem';

function ProblemList({ problems }) {

    return (
        <>
            <h1>Problem List...</h1>
            {problems.map(each => (
                <ProblemItem 
                    each={each}
                    key={each.id}
                />
            ))}

        </>
    )
}

export default ProblemList;