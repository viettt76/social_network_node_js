const { AppDataSource } = require('../data-source');
const { User } = require('../entity/User');
const users = require('./users.json');

async function seed() {
    await AppDataSource.initialize();

    const userRepository = AppDataSource.getRepository(User);
    for (const user of users) {
        const existingType = await userRepository.findOne({
            where: { username: user.username },
        });
        if (!existingType) {
            await userRepository.save(user);
        }
    }

    await AppDataSource.destroy();
}

seed()
    .then(() => {
        console.log('Seed completed!');
    })
    .catch((error) => {
        console.error('Error seeding data:', error);
    });
