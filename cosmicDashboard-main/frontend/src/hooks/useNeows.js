import { useMemo } from "react";

export const useNeows = (neowsData) => {
    return useMemo(() => {
        if (!neowsData || !neowsData.near_earth_objects) {
            return { chartData: [], tableData: {} };
        }

        const dates = Object.keys(neowsData.near_earth_objects).sort();
        
        const chartData = dates.map(date => {
            const dayData = neowsData.near_earth_objects[date];
            return {
                name: new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
                Hazardous: dayData.filter(neo => neo.is_potentially_hazardous_asteroid).length,
                'Non-Hazardous': dayData.filter(neo => !neo.is_potentially_hazardous_asteroid).length,
            };
        });

        const tableData = dates.reduce((acc, date) => {
            const sortedNeos = neowsData.near_earth_objects[date].sort((a,b) => a.name.localeCompare(b.name));
            acc[date] = sortedNeos.map(neo => ({
                id: neo.id,
                name: neo.name,
                estimated_diameter_min: neo.estimated_diameter.meters.estimated_diameter_min.toFixed(2),
                estimated_diameter_max: neo.estimated_diameter.meters.estimated_diameter_max.toFixed(2),
                is_hazardous: neo.is_potentially_hazardous_asteroid,
                relative_velocity_kmph: parseFloat(neo.close_approach_data[0].relative_velocity.kilometers_per_hour).toFixed(0),
            }));
            return acc;
        }, {});

        return { chartData, tableData };

    }, [neowsData]);
};