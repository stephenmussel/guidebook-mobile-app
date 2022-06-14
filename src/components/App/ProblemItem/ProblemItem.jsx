import './ProblemItem.css';

function ProblemItem({ each }) {
    return (
        <div>

            {/* conditionally renders new boulder name if the problem_num is 1 (start of a new boulder) */}
            <h3 className={each.problem_num != 1 ? '' : 'boulder-name'}>
                <b>{each.problem_num === 1 ? each.boulder_name : ''}</b>
            </h3><br />
            {/* <p><b>{each.boulder_name}</b></p> */}

            {/* conditionally renders color of circle based on grade */}
            <p className={
                each.grade <= 2 ? 'circle-green' :
                    each.grade <= 5 ? 'circle-blue' :
                        each.grade <= 8 ? 'circle-orange' :
                            each.grade < 17 ? 'circle-pink' :
                                each.grade === 'B' ? 'circle-green' : // VB
                                    each.project ? 'circle-black' : ''} // Project
            >
                {/* determines whether it's a problem or a variation. if it's a variation, the number is replaced with a `V` */}
                {each.variation ? <b>V</b> : <b>{each.problem_num}</b>}
            </p>

            {/* displays name of problem and grade like: V5, VB, Project, etc. */}
            <p><b>{each.problem}</b> {each.grade === 'B' ? 'VB' : each.project ? 'Project' : 'V' + each.grade}</p>
            {/* <p>{each.problem_num} {each.problem}</p> */}

            <p>stars: {each.stars}</p>
            <p>{each.description}</p>
            <p>fa: {each.fa}</p>
        </div>
    )
}

export default ProblemItem;

