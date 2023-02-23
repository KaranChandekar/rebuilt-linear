import Container from '@/components/Container';
import { Hero, HeroSubtitle, HeroTitle } from '@/components/Hero';

function Home() {
  return (
    <div>
      <header>
        <Container>header</Container>
      </header>
      <main>
        <Container>
          <Hero>
            <HeroTitle>
              Linear is a better way <br /> to build products
            </HeroTitle>
            <HeroSubtitle>
              Meet the new standard for modern software development. <br />
              Streamline issues, sprints, and product roadmaps.
            </HeroSubtitle>
            <img src="/img/hero.jpeg" alt="Hero image" />
          </Hero>
        </Container>
      </main>
      <footer>
        <Container>footer</Container>
      </footer>
    </div>
  );
}
export default Home;
