const { User, sequelize } = require('../services/UserService')
const boardService = require('../services/BoardService')

test('should create a user', async () => {
  await sequelize.sync()
  const user = await User.create({
    username: 'janedoe',
    birthday: new Date(1980, 6, 20),
  })
  expect(user.username).toBe('janedoe')
  expect(user.birthday).toEqual(new Date(1980, 6, 20))
  await User.destroy({ where: { id: user.id } })
})

test('should create a board', async () => {
  const data = {
    boardname: 'janedoe',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  }
  const board = await boardService.create(data)

  expect(board.boardname).toBe('janedoe')
  expect(board.content).toBe(
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  )
  boardService.remove(board.id)
})
