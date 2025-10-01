import Section from '../components/Section';
import { siteConfig } from '../data/site.config';

const About = () => {
  return (
    <Section title="Career Profile" id="career-profile">
      <p>{siteConfig.description}</p>
      <p>
        Currently seeking part-time work (weekends available) in a dynamic restaurant environment.
      </p>
    </Section>
  );
};

export default About;