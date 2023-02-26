export const CustomTooltip = ({ active, payload }) => {

    if (active && payload && payload.length) {
        const date = payload[0].name;
        const value = payload[0].value;
        const name = payload[0].payload.name

        return (
            <div style={{
                backgroundColor: '#000',
                color: '#E4ECED',
                padding: '10px 15px',
                borderRadius: '10px'
            }}>
                <p>{name}</p>
                <p className="label">{`${date} : ${value}`}</p>
            </div>
        );
    }

    return null;
};