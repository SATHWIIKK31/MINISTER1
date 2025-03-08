import React from 'react';
import { Brain, Shield, Users, Lightbulb } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="max-w-6xl mx-auto space-y-20">
        {/* Hero Section */}
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Ethical Decision Making,{' '}
            <span className="bg-gradient-to-r from-indigo-400 to-blue-500 bg-clip-text text-transparent">
              Powered by AI
            </span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Minister AI combines the power of Mistral AI with ethical frameworks to help you make better decisions.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="backdrop-blur-lg bg-white/10 rounded-2xl p-6 border border-white/20">
            <Shield className="w-12 h-12 text-indigo-400 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">Ethical Framework</h3>
            <p className="text-white/70">
              Built on comprehensive ethical principles and guidelines to ensure responsible decision-making.
            </p>
          </div>
          <div className="backdrop-blur-lg bg-white/10 rounded-2xl p-6 border border-white/20">
            <Brain className="w-12 h-12 text-indigo-400 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">Mistral AI Integration</h3>
            <p className="text-white/70">
              Powered by Mistral AI's advanced language models for nuanced understanding and responses.
            </p>
          </div>
          <div className="backdrop-blur-lg bg-white/10 rounded-2xl p-6 border border-white/20">
            <Users className="w-12 h-12 text-indigo-400 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">Collaborative Decision Making</h3>
            <p className="text-white/70">
              Facilitates group discussions and helps reach consensus on complex ethical issues.
            </p>
          </div>
          <div className="backdrop-blur-lg bg-white/10 rounded-2xl p-6 border border-white/20">
            <Lightbulb className="w-12 h-12 text-indigo-400 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">Continuous Learning</h3>
            <p className="text-white/70">
              Adapts and improves based on user interactions while maintaining ethical principles.
            </p>
          </div>
        </div>

        {/* Chess Metaphor Section */}
        <div className="backdrop-blur-lg bg-white/10 rounded-2xl p-8 border border-white/20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">The Minister's Role</h2>
              <p className="text-white/70 mb-6">
                Just as a minister serves as a crucial advisor to a king in chess, Minister AI serves as your trusted
                counsel in ethical decision-making. Like the powerful queen piece that can move in any direction,
                our AI provides comprehensive analysis from multiple ethical perspectives.
              </p>
              <p className="text-white/70">
                The chess board represents the complex landscape of decision-making, where every move has
                consequences and foresight is crucial for success.
              </p>
            </div>
            <div className="aspect-square bg-gradient-to-br from-indigo-900 to-blue-900 rounded-2xl p-8">
              {/* Chess board visualization would go here */}
              <div className="grid grid-cols-8 gap-1 h-full">
                {[...Array(64)].map((_, i) => (
                  <div
                    key={i}
                    className={`${
                      (Math.floor(i / 8) + i) % 2 === 0
                        ? 'bg-white/20'
                        : 'bg-white/5'
                    } rounded-sm`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* About Mistral AI Section */}
        <div className="backdrop-blur-lg bg-white/10 rounded-2xl p-8 border border-white/20 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Powered by Mistral AI</h2>
          <p className="text-white/70 max-w-3xl mx-auto">
            Mistral AI is at the forefront of artificial intelligence research and development. Their advanced
            language models provide the foundation for Minister AI's sophisticated understanding of ethical
            principles and nuanced decision-making capabilities. Through this partnership, we deliver
            state-of-the-art AI technology focused on ethical guidance and decision support.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;