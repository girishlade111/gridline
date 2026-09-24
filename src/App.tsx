import { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './views/Home';
import ArticleView from './views/ArticleView';
import EssaysView from './views/EssaysView';
import ArchiveView from './views/ArchiveView';

export type Route =
  | { name: 'home' }
  | { name: 'article'; id: string }
  | { name: 'essays' }
  | { name: 'essay'; id: string }
  | { name: 'archive' };

export default function App() {
  const [route, setRoute] = useState<Route>({ name: 'home' });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [route]);

  return (
    <div className="flex min-h-screen flex-col">
      <Header route={route} onNavigate={setRoute} />
      <main className="flex-1">
        {route.name === 'home' && <Home onNavigate={setRoute} />}
        {route.name === 'article' && <ArticleView id={route.id} onNavigate={setRoute} />}
        {route.name === 'essays' && <EssaysView onNavigate={setRoute} />}
        {route.name === 'essay' && <EssaysView essayId={route.id} onNavigate={setRoute} />}
        {route.name === 'archive' && <ArchiveView />}
      </main>
      <Footer onNavigate={setRoute} />
    </div>
  );
}
