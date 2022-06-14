function ZoneItem({ each }) {
    return (
        <div>
            <h2>{each.zone}</h2>
            <h3>Overview</h3>
                <p>{each.overview}</p>
            <h3>Approach</h3>
                <p>{each.approach}</p>
        </div>
    )
}

export default ZoneItem;