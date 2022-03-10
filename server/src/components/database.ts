import cuid from 'cuid'
import { prisma } from '../services/prisma'

function createGroup(name: string) {
  return prisma.group.create({
    data: {
      id: cuid(),
      name,
    },
  })
}

export { createGroup }
