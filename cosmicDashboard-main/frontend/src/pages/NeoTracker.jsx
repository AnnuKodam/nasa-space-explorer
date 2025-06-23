import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchNeows } from '../api/nasaApi';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Loader from '../components/Loader';
import ErrorDisplay from '../components/ErrorDisplay';
import { useNeows } from '../hooks/useNeows';

const NeoTracker = () => {
    const { data: rawData, error, isLoading } = useQuery({ queryKey: ['neows'], queryFn: fetchNeows });
    const { chartData, tableData } = useNeows(rawData?.data);

    if (isLoading) return <Loader />;
    if (error) return <ErrorDisplay message={error.message} />;
    
    return (
        <div>
            <h1 className="text-4xl font-extrabold text-white tracking-tight mb-4">Near-Earth Object Tracker</h1>
            <p className="text-gray-400 mb-8">Potentially hazardous vs. non-hazardous objects approaching Earth this week.</p>
            <div className="w-full h-96 bg-gray-800 p-4 rounded-lg shadow-lg mb-12">
                <ResponsiveContainer>
                    <BarChart data={chartData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#4A5568" />
                        <XAxis dataKey="name" stroke="#A0AEC0" />
                        <YAxis stroke="#A0AEC0" />
                        <Tooltip contentStyle={{ backgroundColor: '#1A202C', border: '1px solid #4A5568' }} itemStyle={{color: '#E2E8F0'}} labelStyle={{color: '#CBD5E0'}}/>
                        <Legend wrapperStyle={{ color: '#E2E8F0' }} />
                        <Bar dataKey="Non-Hazardous" stackId="a" fill="#3B82F6" />
                        <Bar dataKey="Hazardous" stackId="a" fill="#EF4444" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
            <div className="space-y-8">
                {Object.keys(tableData).map(date => (
                    <div key={date}>
                        <h2 className="text-2xl font-bold text-white mb-4">Approaches on {new Date(date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</h2>
                        <div className="overflow-x-auto bg-gray-800 rounded-lg shadow-md">
                            <table className="min-w-full text-left text-sm whitespace-nowrap">
                                <thead className="bg-gray-700/50 uppercase tracking-wider"><tr><th className="p-4">Name</th><th className="p-4">Est. Diameter (m)</th><th className="p-4">Velocity (km/h)</th><th className="p-4">Hazardous?</th></tr></thead>
                                <tbody className="divide-y divide-gray-700">
                                    {tableData[date].map(neo => (
                                        <tr key={neo.id} className="hover:bg-gray-700/50 transition-colors">
                                            <td className="p-4 font-medium">{neo.name}</td>
                                            <td className="p-4 text-gray-300">{neo.estimated_diameter_min} - {neo.estimated_diameter_max}</td>
                                            <td className="p-4 text-gray-300">{parseInt(neo.relative_velocity_kmph).toLocaleString()}</td>
                                            <td className="p-4"><span className={`px-3 py-1 rounded-full text-xs font-semibold ${neo.is_hazardous ? 'bg-red-500/20 text-red-300' : 'bg-green-500/20 text-green-300'}`}>{neo.is_hazardous ? 'Yes' : 'No'}</span></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NeoTracker;