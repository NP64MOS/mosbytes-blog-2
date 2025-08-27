export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text text-primary-600 animate-fade-in-up">
          เกี่ยวกับ MOSBytes 👋
        </h1>
        <p className="text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed animate-fade-in-up stagger-1">
          สวัสดีครับ ผม Mos ที่นี่คือพื้นที่เล็ก ๆ บนโลกอินเทอร์เน็ตที่ผมจะแชร์ความรู้ เทคนิค และไอเดียการพัฒนาเว็บและ AI 🤖
        </p>
      </div>

      <div className="prose prose-lg max-w-none">
        <div className="card-light p-8 mb-8 animate-fade-in-up stagger-2">
          <h2 className="text-3xl font-bold mb-6 gradient-text">ยินดีต้อนรับสู่ MOSBytes 🚀</h2>
          
          <p className="text-lg leading-relaxed mb-6 text-neutral-dark">
            ที่นี่ผมจะเล่าถึงการทดลอง การเรียนรู้ และการใช้เทคโนโลยี—โดยเฉพาะ <strong>AI</strong> 🤖—เพื่อทำให้ชีวิตและการทำงานง่ายและฉลาดขึ้น MOSBytes ถูกสร้างมาเพื่อคนที่อยาก:
          </p>

          <ul className="space-y-3 mb-8">
            <li className="flex items-start space-x-3">
              <span className="text-2xl">🚀</span>
              <span className="text-neutral-dark">สร้างโปรเจกต์ที่ดีกว่าเดิม</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-2xl">💡</span>
              <span className="text-neutral-dark">แก้ปัญหาจริงได้อย่างมีประสิทธิภาพ</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-2xl">📈</span>
              <span className="text-neutral-dark">ตามทันโลกเทคโนโลยีที่เปลี่ยนแปลงเร็ว</span>
            </li>
          </ul>

          <div className="card-light-blue p-6 rounded-xl border-l-4 border-blue-500">
            <h3 className="text-xl font-semibold mb-3 text-neutral-dark">💡 โฟกัสหลัก:</h3>
            <p className="text-neutral-dark">
              การพัฒนาเว็บสมัยใหม่, React.js, Next.js, TypeScript, เครื่องมือ AI และเทคนิคเพิ่มประสิทธิภาพการทำงาน
            </p>
          </div>
        </div>

        <div className="card p-8 mb-8 animate-fade-in-up stagger-3">
          <h2 className="text-3xl font-bold mb-6 gradient-text">สิ่งที่ผมเชื่อ</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <span className="text-2xl">⚡</span>
                <div>
                  <h4 className="font-semibold text-lg">ทำงานฉลาด &gt; ทำงานหนัก</h4>
                  <p className="text-neutral-600">ใช้เครื่องมือและเทคโนโลยีเพื่อทำให้ชีวิตง่ายขึ้น</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-2xl">🛠️</span>
                <div>
                  <h4 className="font-semibold text-lg">เรียนรู้ด้วยการลงมือทำ</h4>
                  <p className="text-neutral-600">ทดลอง สร้าง และแบ่งปันความรู้ที่ใช้ได้จริง</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <span className="text-2xl">🤹‍♂️</span>
                <div>
                  <h4 className="font-semibold text-lg">โค้ด + AI ไปด้วยกัน</h4>
                  <p className="text-neutral-600">ผสมผสานการเขียนโปรแกรมกับ AI เพื่อแก้ปัญหาที่ซับซ้อนอย่างมีประสิทธิภาพ</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-2xl">🌱</span>
                <div>
                  <h4 className="font-semibold text-lg">การเรียนรู้ร่วมกัน</h4>
                  <p className="text-neutral-600">การเรียนรู้จะมีค่ามากขึ้นเมื่อเราแบ่งปัน</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card p-8 mb-8 animate-fade-in-up stagger-4">
          <h2 className="text-3xl font-bold mb-6 gradient-text">ทำไมต้อง MOSBytes</h2>
          
          <p className="text-lg leading-relaxed mb-6">
            ที่นี่คุณจะได้เจอบทความ เทคนิค และการทดลองที่ถูกสร้างมาเพื่อช่วยให้คุณ:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <span className="text-2xl">🧹</span>
                <span>เขียนโค้ดที่สะอาดและดูแลต่อได้ง่าย</span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-2xl">📚</span>
                <span>เรียนรู้ framework และ library สมัยใหม่อย่างมีประสิทธิภาพ</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <span className="text-2xl">🧠</span>
                <span>นำ AI มาช่วยในการโค้ดและเพิ่ม productivity ในชีวิตประจำวัน</span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-2xl">✨</span>
                <span>อยากรู้อยากเห็น เรียนรู้ไว และสร้างสรรค์มากขึ้น</span>
              </div>
            </div>
          </div>
        </div>

        <div className="card p-8 mb-8 animate-fade-in-up stagger-5">
          <h2 className="text-3xl font-bold mb-6 gradient-text">เรื่องเล่าสนุก ๆ 🤓</h2>
          
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <span className="text-2xl">☕</span>
              <span>ผมดื่ม <strong>กาแฟเยอะเกินไป</strong> ตอนเขียนโค้ด</span>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-2xl">🤖</span>
              <span>ผมชอบลอง <strong>เขียน prompt เล่นทุกวัน</strong></span>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-2xl">🎉</span>
              <span>บางครั้งก็เขียนโค้ดแค่เพราะ “สนุกดี!”</span>
            </div>
          </div>
        </div>

        <div className="card p-8 bg-gradient-to-br from-blue-50 to-purple-50 animate-fade-in-up stagger-6">
          <h2 className="text-3xl font-bold mb-6 gradient-text">มาติดต่อกันเถอะ</h2>
          
          <p className="text-lg leading-relaxed mb-6">
            มีไอเดีย คำถาม หรือโปรเจกต์เจ๋ง ๆ ที่อยากแชร์ไหม? ติดต่อผมได้ผ่านช่องทางเหล่านี้:
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
              📬 สมัครรับจดหมายข่าวเพื่อไม่พลาดเทคนิคและบทเรียน AI ที่ใช้ได้จริง!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
