const { handlerAddBooks, handlerGetBooks, bookById, editBookId, deleteBookByBookId } = require('./handler');

const routes = [
    {
        method: 'POST',
        path: '/books',
        handler: handlerAddBooks,
        options: {
            cors: {
                origin: ['*']
            }
        }
    },
    {
        method: 'GET',
        path: '/books',
        handler: handlerGetBooks,
        options: {
            cors: {
                origin: ['*']
            }
        }
    },
    {
        method: 'GET',
        path: '/books/{bookId}',
        handler: bookById,
        options: {
            cors: {
                origin: ['*']
            }
        }
    },
    {
        method: 'PUT',
        path: '/books/{bookId}',
        handler: editBookId,
        options: {
            cors: {
                origin: ['*']
            }
        }
    },
    {
        method: 'DELETE',
        path: '/books/{bookId}',
        handler: deleteBookByBookId,
        options: {
            cors: {
                origin: ['*']
            }
        }
    }
]

module.exports = routes;