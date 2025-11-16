
import React, { useState, useCallback } from 'react';
import { Tab } from './types';
import GenerateImage from './components/GenerateImage';
import EditImage from './components/EditImage';
import FastResponse from './components/FastResponse';
import { Icon, IconType } from './components/Icon';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('generate');

  const renderTabContent = useCallback(() => {
    switch (activeTab) {
      case 'generate':
        return <GenerateImage />;
      case 'edit':
        return <EditImage />;
      case 'chat':
        return <FastResponse />;
      default:
        return null;
    }
  }, [activeTab]);

  const TabButton: React.FC<{ tabName: Tab; label: string; icon: IconType }> = ({ tabName, label, icon }) => (
    <button
      onClick={() => setActiveTab(tabName)}
      className={`flex items-center justify-center w-full md:w-auto gap-2 px-4 py-3 text-sm font-semibold rounded-lg transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 focus-visible:ring-indigo-500 ${
        activeTab === tabName
          ? 'bg-indigo-600 text-white shadow-lg'
          : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
      }`}
    >
      <Icon icon={icon} className="w-5 h-5" />
      <span>{label}</span>
    </button>
  );

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col items-center p-4 sm:p-6">
      <div className="w-full max-w-5xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">
            Creative Suite AI
          </h1>
          <p className="mt-2 text-gray-400">Your AI-powered assistant for images and ideas.</p>
        </header>

        <nav className="mb-8 p-1.5 bg-gray-800 rounded-xl shadow-md flex flex-col md:flex-row items-center justify-center gap-2">
          <TabButton tabName="generate" label="Generate Image" icon="image" />
          <TabButton tabName="edit" label="Edit Image" icon="edit" />
          <TabButton tabName="chat" label="Fast Response" icon="bolt" />
        </nav>
        
        <main className="bg-gray-800 rounded-xl shadow-lg p-4 sm:p-8">
          {renderTabContent()}
        </main>

        <footer className="text-center mt-8 text-gray-500 text-sm">
          <p>Powered by Google Gemini</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
