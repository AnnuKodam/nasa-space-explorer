import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchApod } from '../api/nasaApi';
import Loader from '../components/Loader';
import ErrorDisplay from '../components/ErrorDisplay';

const Home = () => {
    const { data, error, isLoading } = useQuery({ queryKey: ['apod'], queryFn: fetchApod });

    if (isLoading) return <Loader />;
    if (error) return <ErrorDisplay message={error.message} />;

    const apodData = data?.data;
    if (!apodData) return <ErrorDisplay message="No APOD data available."/>;

    return (
        <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-2 text-center">{apodData.title}</h1>
            <p className="text-center text-gray-400 mb-6">{apodData.date}</p>
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-2xl mb-8 margin-auto sm:w-[500px] sm:h-[500px] md:w-[500px] md:h-[500px] m-auto">
                {apodData.media_type === 'image' ? (
                    <img src={apodData.url} alt={apodData.title} className="w-full h-auto object-contain" />
                ) : (
                    <div className="aspect-w-16 aspect-h-9"><iframe title={apodData.title} src={apodData.url} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="w-full h-full"></iframe></div>
                )}
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">Explanation</h2>
            <p className="text-gray-300 leading-relaxed text-lg">{apodData.explanation}</p>
        </div>
    );
};

export default Home;