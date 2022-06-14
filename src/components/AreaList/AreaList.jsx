import AreaItem from "../AreaItem/AreaItem";

function AreaList({ areas }) {
    return (
        <>
            <h1>Area List...</h1>
            {areas.map(each => (
                <AreaItem 
                    each={each}
                    key={each.id}
                />
            ))}
        </>
    )
}

export default AreaList;