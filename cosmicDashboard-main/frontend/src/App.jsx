import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import MarsExplorer from './pages/MarsExplorer';
import NeoTracker from './pages/NeoTracker';
import './index.css'; // Assuming you have a global stylesheet
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
    return (
    <QueryClientProvider client={queryClient}>
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="mars-explorer" element={<MarsExplorer />} />
                    <Route path="neo-tracker" element={<NeoTracker />} />
                    <Route path="*" element={
                        <div className="text-center p-16 bg-gray-800 rounded-lg">
                            <h1 className="text-4xl font-bold text-white">404 - Not Found</h1>
                            <p className="mt-4 text-gray-300">The page you are looking for does not exist.</p>
                        </div>
                    } />
                </Route>
            </Routes>
        </Router>
    </QueryClientProvider>
    )
}

export default App
