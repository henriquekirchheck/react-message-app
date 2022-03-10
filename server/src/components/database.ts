import cuid from 'cuid'
import { prisma } from '../services/prisma'

function getGroups(name?: string, id?: string) {
  return prisma.group.findMany({
    where: {
      name,
      id,
    },
  })
}

function createGroup(name: string) {
  return prisma.group.create({
    data: {
      id: cuid(),
      name,
    },
  })
}

export { createGroup, getGroups }
