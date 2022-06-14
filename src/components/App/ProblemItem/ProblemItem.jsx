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
                each.grade <= 2 ? 'circle-green' : // 0-2
                    each.grade <= 5 ? 'circle-blue' : // 3-5
                        each.grade <= 8 ? 'circle-orange' : // 6-8
                            each.grade < 17 ? 'circle-pink' : // 9-16
                                each.grade === 'B' ? 'circle-green' : // VB
                                    each.project ? 'circle-black' : '' // Project
            }
            >
                {/* determines whether it's a problem or a variation. if it's a variation, the number is replaced with a `V` */}
                {each.variation ? <b>V</b> : <b>{each.problem_num}</b>}
            </p>
            <p>
                {/* displays name of problem and grade like: V5, VB, Project, etc. */}
                <b>{each.problem}</b> {each.grade === 'B' ? 'VB' : each.project ? 'Project' : 'V' + each.grade} {

                    // TODO: there's a better way to do this!
                    // displays number of stars for each problem
                    each.stars === 5 ? '\u2605\u2605\u2605\u2605\u2605' :
                        each.stars === 4 ? '\u2605\u2605\u2605\u2605' :
                            each.stars === 3 ? '\u2605\u2605\u2605' :
                                each.stars === 2 ? '\u2605\u2605' :
                                    each.stars === 1 ? '\u2605' : ""
                }
            </p>
            {/* <p>{each.problem_num} {each.problem}</p> */}

            {/* displays FA if one exists */}
            <p>{each.description} {each.fa ? <em><b>FA </b>{each.fa} </em> : ''}</p>
            {/* <p>fa: {each.fa}</p> */}
        </div>
    )
}

export default ProblemItem;

