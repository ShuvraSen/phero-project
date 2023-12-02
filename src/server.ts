import mongoose from 'mongoose';

// const mongoose = require('mongoose');
import app from './app';
import config from './app/config';

async function main() {
  try {
    await mongoose.connect(config.database_url as string);

    app.listen(config.port, () => {
      console.log(`Example aaaaaaaaaapp listening on port ${config.port}`);
    });
  } catch (err) {
    console.log(err);
  }
}
main();
