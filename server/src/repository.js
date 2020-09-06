import database from './database'

const content = async () => {
  const results = await database.column('links').select().table('content')
  if (results.length > 0) {
    const result = results[0]
    return {
      links: JSON.parse(result.links)
    }
  }
}

export default { content }
