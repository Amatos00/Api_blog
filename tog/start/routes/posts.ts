import Route from '@ioc:Adonis/Core/Route'

Route.resource('/posts', 'PostController').apiOnly()
