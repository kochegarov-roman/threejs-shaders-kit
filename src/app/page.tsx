import { Projects } from '@/widgets/projects';
import { Footer } from '@/widgets/footer';

export default function Home() {
  return (
    <div className="min-h-screen p-2 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="mt-8">My collection Three.js projects</h1>
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
