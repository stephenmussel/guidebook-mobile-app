function ZoneList({ zones }) {
    return (
        <>
            <h1>Zone List...</h1>
            {zones.map(each => (
                <div key={each.id}>
                    <h2>{each.zone}</h2>
                        <h3>Overview</h3>
                            <p>{each.overview}</p>
                        <h3>Approach</h3>
                            <p>{each.approach}</p>
                </div>
            ))}
        </>
    )
}

export default ZoneList;