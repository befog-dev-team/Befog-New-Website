
import { useEffect, useRef } from "react";

export function CodeAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const codeLines = [
      'function initBefogApp() {',
      '  const app = new BefogApp();',
      '  app.initialize({',
      '    modules: ["ai", "cloud", "security"],',
      '    theme: "modern",',
      '    version: "2.4.1"',
      '  });',
      '',
      '  // Connect to services',
      '  app.connect();',
      '',
      '  return app.start();',
      '}',
      '',
      'initBefogApp().then(result => {',
      '  console.log("App started successfully!");',
      '});'
    ];
    
    let html = '';
    codeLines.forEach((line, index) => {
      const delay = index * 150;
      html += `<div class="code-line" style="animation-delay: ${delay}ms">${line || '&nbsp;'}</div>`;
    });
    
    container.innerHTML = html;
    
    // Clean up animation on unmount
    return () => {
      container.innerHTML = '';
    };
  }, []);
  
  return (
    <div className="code-animation-container w-full max-w-lg bg-gray-900 rounded-xl p-6 font-mono text-sm leading-relaxed overflow-hidden shadow-xl">
      <div className="flex items-center justify-start mb-4">
        <span className="w-3 h-3 rounded-full bg-red-500 mr-2"></span>
        <span className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></span>
        <span className="w-3 h-3 rounded-full bg-green-500"></span>
      </div>
      <div ref={containerRef} className="text-gray-300 overflow-hidden"></div>
      <style>
        {`
          .code-line {
            opacity: 0;
            transform: translateY(1rem);
            animation: fadeIn 0.5s ease forwards;
            white-space: pre;
          }
          
          @keyframes fadeIn {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </div>
  );
}
