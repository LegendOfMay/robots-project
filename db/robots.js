const client = require('./client.js');

const seedRobot = async () => {
    const robotsData = [
    {
        name: 'RoboPro',
        model: 'R001',
        company: 'TechCo',
        image: 'https://example.com/robot1.jpg',
        guaranteed_months: 12,
        safe_for_children: true,
        release_date: '2023-01-01',
        cost: 999.99,
    },

    {
        name: 'JazzBot',
        model: 'R002',
        company: 'MusicMinds',
        image: 'https://example.com/jazzbot.jpg',
        guaranteed_months: 15,
        safe_for_children: true,
        release_date: '2023-03-15',
        cost: 1299.99,
    },

    {
        name: 'ChefMaster',
      model: 'R003',
      company: 'CulinaryTech',
      image: 'https://example.com/chefmaster.jpg',
      guaranteed_months: 18,
      safe_for_children: false,
      release_date: '2023-05-01',
      cost: 1599.99,
    },

    {
        name: 'GuardianX',
        model: 'R004',
        company: 'SecureSolutions',
        image: 'https://example.com/guardianx.jpg',
        guaranteed_months: 24,
        safe_for_children: true,
        release_date: '2023-07-10',
        cost: 1999.99,
    },

    {
        name: 'AdventureBot',
        model: 'R005',
        company: 'ExploreTech',
        image: 'https://example.com/adventurebot.jpg',
        guaranteed_months: 20,
        safe_for_children: true,
        release_date: '2023-09-05',
        cost: 1799.99,
    },
    ];

    try {
        for (const robotData of robotsData) {
          const query = `
            INSERT INTO robots (name, model, company, image, guaranteed_months, safe_for_children, release_date, cost)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8);`;
    
          const values = [
            robotData.name,
            robotData.model,
            robotData.company,
            robotData.image,
            robotData.guaranteed_months,
            robotData.safe_for_children,
            robotData.release_date,
            robotData.cost
          ];
    
          await client.query(query, values);
          console.log(`Robot ${robotData.model} created successfully.`);
        }
      } catch (error) {
        console.error('Error seeding robots:', error);
      
    };
};

    
    
    
  

module.exports = {
    seedRobot
}