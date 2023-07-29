import { ConnectOptions, connect } from 'mongoose';

const connectDBController = async () => {
  try {
    const connectDB = await connect(process.env.MONGO_URI!, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions);
    console.log('mongoDB connected ', connectDB.connection.host);
  } catch (error) {
    console.log('error connect mongodb : ', error);
    process.exit(1);
  }
};

export default connectDBController;
