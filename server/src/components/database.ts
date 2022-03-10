import cuid from 'cuid'
import { prisma } from '../services/prisma'

async function getGroups(name?: string, id?: string) {
  return await prisma.group.findMany({
    where: {
      name,
      id,
    },
  })
}

async function createGroup(name: string) {
  return await prisma.group.create({
    data: {
      id: cuid(),
      name,
    },
  })
}

async function deleteGroup(id: string) {
  return await prisma.group.delete({
    where: {
      id
    }
  })
}

async function getUsers(username?: string, id?: string) {
  return await prisma.user.findMany({
    where: {
      username,
      id,
    }
  })
}

export { createGroup, getGroups, deleteGroup, getUsers }
