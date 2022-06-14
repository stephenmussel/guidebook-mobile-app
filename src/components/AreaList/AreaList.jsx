function AreaList({ areas }) {
    return (
        <>
            <h1>Area List...</h1>
            {areas.map(each => (
                <div key={each.id}>
                    <h2>{each.name}</h2>
                    <h3>Overview</h3>
                        <p>{each.overview}</p>
                    <h3>Driving</h3>
                        <p>{each.driving}</p>
                </div>
            ))}
        </>
    )
}

export default AreaList;