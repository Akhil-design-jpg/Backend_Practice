import mongoose from 'mongoose';

const testConnection = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      'mongodb+srv://Akhil123:Akhil%40123@cluster0.ev2ywy6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
    );
    console.log(`MongoDB connected!! Host: ${connectionInstance.connection.host}`);
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
};

testConnection();
