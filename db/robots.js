const client = require('./client.js');

const seedRobot = async () => {
    const robotsData = [
    {
        name: 'Robot1',
        model: 'R001',
        company: 'TechCo',
        image: 'https://example.com/robot1.jpg',
        guaranteed_months: 12,
        safe_for_children: true,
        release_date: '2023-01-01',
        cost: 999.99,
    }
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