import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class FirstUserSeeder extends BaseSeeder {
  public static developmentOnly = true

  public async run() {
    await User.create({
      email: 'anderson@gmail.com',
      password: '123456',
    })
  }
}
