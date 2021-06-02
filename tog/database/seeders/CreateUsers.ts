import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class CreateUsersSeeder extends BaseSeeder {
  public static developmentOnly = true

  public async run() {
    await User.createMany([
      {
        email: 'admin@gmail.com',
        password: '123456',
        role: 'admin',
      },
      {
        email: 'normal@gmail.com',
        password: '123456',
        role: 'normal',
      },
    ])
  }
}
