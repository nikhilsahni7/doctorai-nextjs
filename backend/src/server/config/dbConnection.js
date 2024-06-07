import { connect as _connect } from "mongoose";

const dbconnection = async () => {
  try {
    const connect = await _connect("mongodb://localhost:27017/doctorapp");
    console.log(
      "Db connected",
      connect.connection.host,
      connect.connection.name
    );
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

export default dbconnection;
