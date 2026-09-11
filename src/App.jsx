import React, { useState } from 'react';
import { portfolioData as initialData } from './data/portfolioData';
import NeuralBackground from './components/NeuralBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Achievements from './components/Achievements';
import LearningJourney from './components/LearningJourney';
import FutureGoals from './components/FutureGoals';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import EditProfileModal from './components/EditProfileModal';

export default function App() {
  const [data, setData] = useState(initialData);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);

  const handleSaveCustomProfile = (customFields) => {
    setData((prev) => ({
      ...prev,
      personal: {
        ...prev.personal,
        name: customFields.name || prev.personal.name,
        initials: customFields.initials || prev.personal.initials,
        role: customFields.role || prev.personal.role,
        university: customFields.university || prev.personal.university,
        location: customFields.location || prev.personal.location,
      },
      socials: {
        ...prev.socials,
        email: customFields.email || prev.socials.email,
        github: customFields.github || prev.socials.github,
        linkedin: customFields.linkedin || prev.socials.linkedin,
      },
    }));
  };

  const handleResetProfile = () => {
    setData(initialData);
  };

  return (
    <div className="relative min-h-screen bg-dark-950 text-slate-100 overflow-x-hidden selection:bg-blue-500 selection:text-white">
      {/* Background Neural / Constellation particle system */}
      <NeuralBackground />

      {/* Main Content Layout */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar
          personal={data.personal}
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenCustomizer={() => setIsCustomizerOpen(true)}
        />

        <main className="flex-grow">
          <Hero personal={data.personal} socials={data.socials} />
          <About personal={data.personal} stats={data.stats} />
          <Skills categories={data.skillCategories} />
          <Projects projects={data.projects} />
          <Education education={data.education} />
          <Achievements achievements={data.achievements} />
          <LearningJourney
            modules={data.currentlyLearning}
            quote={data.learningQuote}
          />
          <FutureGoals goals={data.futureGoals} />
          <Contact personal={data.personal} socials={data.socials} />
        </main>

        <Footer personal={data.personal} socials={data.socials} />
      </div>

      {/* Modals */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        personal={data.personal}
      />

      <EditProfileModal
        isOpen={isCustomizerOpen}
        onClose={() => setIsCustomizerOpen(false)}
        currentData={data}
        onSave={handleSaveCustomProfile}
        onReset={handleResetProfile}
      />
    </div>
  );
}
