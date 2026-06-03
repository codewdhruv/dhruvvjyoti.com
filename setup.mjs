import { writeFile } from 'fs/promises';

const setup = async () => {
  try {
    // Do any setup tasks here if needed
    console.log('Running setup tasks...');

    // Example: Create a .env file if it doesn't exist
    await writeFile('.env', '');

    console.log('Setup tasks completed successfully.');
  } catch (error) {
    console.error('Error occurred during setup:', error);
    process.exit(1);
  }
};

setup();
