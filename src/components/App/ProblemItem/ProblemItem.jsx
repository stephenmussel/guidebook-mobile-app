import './ProblemItem.css';

function ProblemItem({ each }) {
    return (
        <div>
            <p><b>{each.boulder_name}</b></p>
            <p>{each.problem_num} {each.problem}</p>

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
            <p>stars: {each.stars}</p>
            <p>{each.description}</p>
            <p>fa: {each.fa}</p>
        </div>
    )
}

export default ProblemItem;

