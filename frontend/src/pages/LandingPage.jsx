import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CustomCard } from '../components/ui/CustomCard';

function LandingPage() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div className="w-full px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Welcome to our AI Project
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mt-6">
            Discover the power of artificial intelligence with our cutting-edge solutions
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 px-4 lg:px-16">
          <CustomCard className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Smart Analysis</h3>
              <p className="text-gray-600">Advanced AI algorithms for intelligent data processing</p>
            </div>
          </CustomCard>

          <CustomCard className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Real-time Processing</h3>
              <p className="text-gray-600">Instant results with our powerful processing engine</p>
            </div>
          </CustomCard>

          <CustomCard className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Easy Integration</h3>
              <p className="text-gray-600">Seamless integration with your existing workflows</p>
            </div>
          </CustomCard>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <button 
            onClick={handleGetStarted}
            className="bg-blue-600 text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
