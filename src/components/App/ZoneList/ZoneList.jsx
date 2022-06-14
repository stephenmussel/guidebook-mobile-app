import ZoneItem from "../../ZoneItem/ZoneItem";

function ZoneList({ zones }) {
    return (
        <>
            <h1>Zone List...</h1>
            {zones.map(each => (
                <ZoneItem
                    each={each}
                    key={each.id}
                />
            ))}
        </>
    )
}

export default ZoneList;