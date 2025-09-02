export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
          <span className="gradient-text">เกี่ยวกับ MOSBytes</span> 👋
        </h1>
        <p className="text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed animate-fade-in-up stagger-1">
          สวัสดีครับ ผม Mos ที่นี่ผมจะมาแบ่งปันความรู้และเทคนิคการพัฒนาเว็บไซต์และ AI
        </p>
      </div>

      <div className="prose prose-lg max-w-none">
        <div className="card-light p-8 mb-8 animate-fade-in-up stagger-2">
          <h2 className="text-3xl font-bold mb-6 gradient-text">Welcome to MOSBytes 🚀</h2>
          
          <p className="text-lg leading-relaxed mb-6 text-neutral-dark">
            Hi, I&apos;m Mos. This is my little corner of the internet where I explore, experiment, and share how technology—especially <strong>AI</strong> 🤖—can make life and work smarter. MOSBytes is for developers, creators, and lifelong learners who want to:
          </p>

          <ul className="space-y-3 mb-8">
            <li className="flex items-start space-x-3">
              <span className="text-2xl">🚀</span>
              <span className="text-neutral-dark">Build better projects</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-2xl">💡</span>
              <span className="text-neutral-dark">Solve real problems</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-2xl">📈</span>
              <span className="text-neutral-dark">Stay ahead in the fast-moving world of tech</span>
            </li>
          </ul>

          <div className="card-light-blue p-6 rounded-xl border-l-4 border-blue-500">
            <h3 className="text-xl font-semibold mb-3 text-neutral-dark">💡 Focus:</h3>
            <p className="text-neutral-dark">
              Modern web development, React.js, Next.js, TypeScript, AI tools, and productivity hacks.
            </p>
          </div>
        </div>

        <div className="card p-8 mb-8 animate-fade-in-up stagger-3">
          <h2 className="text-3xl font-bold mb-6 gradient-text">What I Believe</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <span className="text-2xl">⚡</span>
                <div>
                  <h4 className="font-semibold text-lg">Smart Work &gt; Hard Work</h4>
                  <p className="text-neutral-600">Use tools and tech to make your life easier</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-2xl">🛠️</span>
                <div>
                  <h4 className="font-semibold text-lg">Hands-On Learning</h4>
                  <p className="text-neutral-600">Experiment, build, and share knowledge that works in the real world</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <span className="text-2xl">🤹‍♂️</span>
                <div>
                  <h4 className="font-semibold text-lg">Code & AI Together</h4>
                  <p className="text-neutral-600">Combine programming with AI to solve complex problems efficiently</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-2xl">🌱</span>
                <div>
                  <h4 className="font-semibold text-lg">Community & Growth</h4>
                  <p className="text-neutral-600">Learning is better when shared</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card p-8 mb-8 animate-fade-in-up stagger-4">
          <h2 className="text-3xl font-bold mb-6 gradient-text">Why MOSBytes</h2>
          
          <p className="text-lg leading-relaxed mb-6">
            Here, you&apos;ll find tutorials, tips, and experiments built to help you:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <span className="text-2xl">🧹</span>
                <span>Write cleaner, maintainable code</span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-2xl">📚</span>
                <span>Learn modern frameworks and libraries effectively</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <span className="text-2xl">🧠</span>
                <span>Apply AI in everyday coding and productivity</span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-2xl">✨</span>
                <span>Stay curious, learn faster, and create more</span>
              </div>
            </div>
          </div>
        </div>

        <div className="card p-8 mb-8 animate-fade-in-up stagger-5">
          <h2 className="text-3xl font-bold mb-6 gradient-text">Fun Fact 🤓</h2>
          
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <span className="text-2xl">☕</span>
              <span>I drink <strong>way too much coffee</strong> while coding</span>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-2xl">🤖</span>
              <span>I experiment with <strong>AI prompts daily</strong></span>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-2xl">🎉</span>
              <span>Sometimes I write code just for the joy of it!</span>
            </div>
          </div>
        </div>

        <div className="card p-8 bg-gradient-to-br from-blue-50 to-purple-50 animate-fade-in-up stagger-6">
          <h2 className="text-3xl font-bold mb-6 gradient-text">Let&apos;s Connect</h2>
          
          <p className="text-lg leading-relaxed mb-6">
            Got ideas, questions, or cool projects to share? Reach out via:
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 p-4 bg-white rounded-lg hover:shadow-lg transition-all duration-300 group">
              <span className="text-2xl">🐱</span>
              <span className="font-semibold group-hover:text-blue-600 transition-colors">GitHub</span>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 p-4 bg-white rounded-lg hover:shadow-lg transition-all duration-300 group">
              <span className="text-2xl">🐦</span>
              <span className="font-semibold group-hover:text-blue-600 transition-colors">Twitter</span>
            </a>
            <a href="mailto:contact@mosbytes.com" className="flex items-center space-x-3 p-4 bg-white rounded-lg hover:shadow-lg transition-all duration-300 group">
              <span className="text-2xl">✉️</span>
              <span className="font-semibold group-hover:text-blue-600 transition-colors">Email</span>
            </a>
          </div>

          <div className="mt-8 p-6 bg-white rounded-lg border-l-4 border-green-500">
            <p className="text-center text-lg font-semibold text-neutral-800">
              📬 Join the newsletter to get practical tutorials and AI-powered tips straight to your inbox!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}