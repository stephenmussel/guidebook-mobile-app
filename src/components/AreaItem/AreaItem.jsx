function AreaItem({ each }) {
    return (
        <div key={each.id}>
            <h2>{each.name}</h2>
            <h3>Overview</h3>
                <p>{each.overview}</p>
            <h3>Driving</h3>
                <p>{each.driving}</p>
        </div>
    )
}

export default AreaItem;