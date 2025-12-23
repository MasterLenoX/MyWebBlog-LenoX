const sequelize = require('../config/db');
const { Hero, Skills, Gallery, Projects, Timeline } = require('../models');

const seed = async () => {
  try {
    await sequelize.sync({ force: true }); // WARNING: This drops tables! Use with caution. 
    // User asked to create tables, so force: true ensures they are created with correct schema.

    // Hero Data
    await Hero.create({
      first_name: 'Leonard James',
      last_name: 'Emperado',
      typewriting_text: [
        'Software Engineer',
        'Full Stack Developer',
        'IT Support Specialist',
        'Web Developer',
        'Software Developer'
      ],
      profile_image: 'user.jpg' // Placeholder
    });
    console.log('Hero seeded.');

    // Skills Data (Placeholder)
    await Skills.create({
      category: 'Frontend',
      name: 'React.js',
      meta: { level: 'Advanced' },
      icon: 'react-icon.png'
    });
    console.log('Skills seeded.');

    // Gallery Data (Placeholder)
    await Gallery.create({
      album_name: 'My Album',
      image_path: 'sample.jpg'
    });
    console.log('Gallery seeded.');

    // Projects Data (Placeholder)
    await Projects.create({
      title: 'My Project',
      description: 'A sample project.',
      slug: 'my-project',
      image_path: 'project.jpg',
      meta: { technologies: ['Node.js', 'React'] }
    });
    console.log('Projects seeded.');

    // Timeline Data (Placeholder)
    await Timeline.create({
      type: 'work',
      title: 'Software Engineer',
      company_or_school: 'Tech Corp',
      date_from: '2023-01-01',
      description: 'Working on cool stuff.'
    });
    console.log('Timeline seeded.');

    console.log('Seeding complete.');
    process.exit(0);
  } catch (err) {
    console.error('Seeding failed:', err);
    process.exit(1);
  }
};

seed();
