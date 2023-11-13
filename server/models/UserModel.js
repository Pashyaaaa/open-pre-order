import { DataTypes } from "sequelize";

const Users = {
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  password: {
    type: DataTypes.STRING,
  },
  refresh_token: {
    type: DataTypes.TEXT,
  },
};

export default Users;
